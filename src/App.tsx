import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { NativeWindStyleSheet } from "nativewind";
import FireMap from './components/FireMap';
import InfoBottomSheet from './components/InfoBottomSheet';

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  const [showInfo, setShowInfo] = useState(false);
  const [windSpeed, setWindSpeed] = useState(15); // km/h
  const [dryness, setDryness] = useState(80); // percentage mock
  const [showFires, setShowFires] = useState(false);
  const [showSmoke, setShowSmoke] = useState(false);

  const handlePointPress = () => {
    setShowInfo(true);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={{ flex: 1, width: '100%', height: '100%', position: 'absolute' }}>
        <FireMap 
          onPointPress={handlePointPress} 
          windSpeed={windSpeed}
          dryness={dryness}
          showFires={showFires}
          showSmoke={showSmoke}
        />
      </View>
      
      {/* Search Bar Mockup */}
      <View className="absolute top-16 left-6 right-6 bg-white rounded-full p-4 shadow-lg flex-row items-center z-10">
        <Text className="text-gray-400 font-bold ml-2">Search location in Saskatchewan...</Text>
      </View>

      {/* Map Layer Controls */}
      <View className="absolute top-36 right-6 z-10 flex-col" style={{ gap: 16 }}>
        <TouchableOpacity 
          className={`w-12 h-12 rounded-full items-center justify-center shadow-lg ${showFires ? 'bg-pastelRed' : 'bg-white'}`}
          onPress={() => setShowFires(!showFires)}
        >
          <Text className="text-xl">🔥</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          className={`w-12 h-12 rounded-full items-center justify-center shadow-lg ${showSmoke ? 'bg-gray-400' : 'bg-white'}`}
          onPress={() => setShowSmoke(!showSmoke)}
        >
          <Text className="text-xl">💨</Text>
        </TouchableOpacity>
      </View>

      {showInfo && (
        <InfoBottomSheet 
          onClose={() => setShowInfo(false)} 
          windSpeed={windSpeed}
          setWindSpeed={setWindSpeed}
          dryness={dryness}
          setDryness={setDryness}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
