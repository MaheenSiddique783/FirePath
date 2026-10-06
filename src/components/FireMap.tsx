import React, { useRef, useEffect } from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function FireMap({ onPointPress, windSpeed, dryness, showFires, showSmoke }: any) {
  const webViewRef = useRef<WebView>(null);

  useEffect(() => {
    if (webViewRef.current) {
      webViewRef.current.injectJavaScript(`
        if (window.updateMap) {
          window.updateMap(${windSpeed}, ${dryness}, ${showFires}, ${showSmoke});
        }
        true;
      `);
    }
  }, [windSpeed, dryness, showFires, showSmoke]);

  const mapHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
      <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
      <style>
        body { padding: 0; margin: 0; background-color: #E2F0CB; }
        #map { width: 100vw; height: 100vh; }
        
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.02); opacity: 0.6; }
          100% { transform: scale(1); opacity: 0.8; }
        }
        .breathing-fire {
          animation: pulse 2s infinite ease-in-out;
          transform-origin: center;
        }
        
        .fire-icon {
          font-size: 24px;
          text-align: center;
          line-height: 24px;
          filter: drop-shadow(0 0 8px rgba(255, 0, 0, 0.8));
          animation: pulse 1s infinite alternate;
        }
        
        .compass {
          position: absolute;
          top: 30px;
          left: 20px;
          width: 45px;
          height: 45px;
          background: rgba(255,255,255,0.9);
          border-radius: 50%;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          font-family: sans-serif;
          color: #444;
          box-shadow: 0 4px 10px rgba(0,0,0,0.2);
          pointer-events: none;
        }
        .compass-arrow {
          position: absolute;
          top: 4px;
          font-size: 12px;
          color: #EF4444;
        }
      </style>
    </head>
    <body>
      <div id="map"></div>
      <div class="compass"><span class="compass-arrow">▲</span>N</div>
      <script>
        const map = L.map('map', { zoomControl: false }).setView([50.4452, -104.6189], 10);
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '© OpenStreetMap'
        }).addTo(map);

        // Draw a subtle coordinate grid to make it feel technical
        const gridLines = L.layerGroup().addTo(map);
        for(let lat = 49; lat <= 52; lat += 0.15) {
          L.polyline([[lat, -107], [lat, -102]], {color: '#555', weight: 1, opacity: 0.2, dashArray: '4, 4'}).addTo(gridLines);
        }
        for(let lng = -107; lng <= -102; lng += 0.15) {
          L.polyline([[49, lng], [52, lng]], {color: '#555', weight: 1, opacity: 0.2, dashArray: '4, 4'}).addTo(gridLines);
        }

        let currentPolygons = [];
        let currentMarker = null;
        let lastLat = null;
        let lastLng = null;
        
        let fireLayerGroup = L.layerGroup().addTo(map);
        let smokeLayer = null;

        function drawSpread(lat, lng, wSpeed, dry) {
          currentPolygons.forEach(p => map.removeLayer(p));
          currentPolygons = [];
          
          if (!lat || !lng) return;

          // Scale based on interactive sliders
          const baseLength = 0.01 + (wSpeed * 0.0015); // wind makes it stretch out longer
          const baseWidth = 0.005 + (dry * 0.0002); // dryness makes it wider

          const windDir = 45; // Fixed North-East wind
          const rad = (windDir * Math.PI) / 180;

          // Draw 4 hr, 2 hr, 1 hr (largest to smallest so they stack correctly)
          const hours = [4, 2, 1];
          const colors = ['#FFA07A', '#FF7F50', '#FF4500']; 
          const opacities = [0.2, 0.4, 0.7];

          hours.forEach((hr, idx) => {
            const length = baseLength * hr;
            const width = baseWidth * hr;
            
            const latlngs = [];
            const numPoints = 32;
            for (let i = 0; i < numPoints; i++) {
              const t = (i / numPoints) * 2 * Math.PI;
              const x = width * Math.cos(t) * Math.sin(t / 2 + Math.PI / 4); 
              const y = length * Math.sin(t) + (length * 0.8);

              const rotX = x * Math.cos(rad) - y * Math.sin(rad);
              const rotY = x * Math.sin(rad) + y * Math.cos(rad);
              latlngs.push([lat + rotY, lng + rotX]);
            }
            
            const p = L.polygon(latlngs, {
              color: 'transparent',
              fillColor: colors[idx],
              fillOpacity: opacities[idx],
              smoothFactor: 1,
              className: 'breathing-fire' // CSS pulsing animation
            }).addTo(map);
            currentPolygons.push(p);
          });
        }

        window.updateMap = function(wSpeed, dry, showFires, showSmoke) {
          // Update the fire spread sizes
          drawSpread(lastLat, lastLng, wSpeed, dry);
          
          // Toggle Active Fires
          fireLayerGroup.clearLayers();
          if (showFires) {
            const mockFires = [[50.55, -104.5], [50.35, -104.7], [50.65, -104.2]];
            mockFires.forEach(coord => {
              L.marker(coord, {
                icon: L.divIcon({ html: '🔥', className: 'fire-icon', iconSize: [30,30] })
              }).addTo(fireLayerGroup);
            });
          }
          
          // Toggle Smoke Overlay
          if (showSmoke && !smokeLayer) {
            // A massive polygon covering the downwind area
            smokeLayer = L.polygon([
              [50.6, -104.2], [51.2, -103.2], [50.9, -102.8], [50.3, -104.0]
            ], {
              color: 'transparent', fillColor: '#555', fillOpacity: 0.35, className: 'breathing-fire'
            }).addTo(map);
          } else if (!showSmoke && smokeLayer) {
            map.removeLayer(smokeLayer);
            smokeLayer = null;
          }
        };

        map.on('click', function(e) {
          lastLat = e.latlng.lat;
          lastLng = e.latlng.lng;
          
          if (currentMarker) map.removeLayer(currentMarker);

          const pastelIcon = L.divIcon({
            html: '<div style="background-color: #FF4500; width: 16px; height: 16px; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 10px rgba(0,0,0,0.5);"></div>',
            className: '',
            iconSize: [20, 20],
            iconAnchor: [10, 10]
          });

          currentMarker = L.marker([lastLat, lastLng], { icon: pastelIcon }).addTo(map);
          
          // Send message to React Native that a point was tapped
          window.ReactNativeWebView.postMessage(JSON.stringify({ lat: lastLat, lng: lastLng }));
        });
      </script>
    </body>
    </html>
  `;

  return (
    <View style={{ flex: 1, width: '100%', height: '100%' }}>
      <WebView
        ref={webViewRef}
        source={{ html: mapHtml }}
        style={{ flex: 1 }}
        onMessage={(event) => {
          try {
            const { lat, lng } = JSON.parse(event.nativeEvent.data);
            if (onPointPress) onPointPress({ latitude: lat, longitude: lng });
          } catch (e) {}
        }}
        javaScriptEnabled={true}
        scrollEnabled={false}
        bounces={false}
      />
    </View>
  );
}
