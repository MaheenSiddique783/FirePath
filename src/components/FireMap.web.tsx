import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function FireMap({ onPointPress }: { onPointPress: (coord: {latitude: number, longitude: number}) => void }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#E2F0CB', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, color: '#555', fontWeight: 'bold', marginBottom: 10 }}>
        🗺️ Map placeholder (Web)
      </Text>
      <Text style={{ fontSize: 14, color: '#777', marginBottom: 30, textAlign: 'center', paddingHorizontal: 40 }}>
        react-native-maps crashes on the web due to native dependencies. This placeholder lets you test the web UI!
      </Text>
      
      {/* TouchableOpacity is natively supported on web and acts as a button */}
      <TouchableOpacity 
        style={{ padding: 15, backgroundColor: '#FF9B9B', borderRadius: 20, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5 }}
        onPress={() => onPointPress({ latitude: 50.4452, longitude: -104.6189 })}
      >
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>
          Simulate Map Tap
        </Text>
      </TouchableOpacity>
    </View>
  );
}
