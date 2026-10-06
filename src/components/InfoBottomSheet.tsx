import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';

export default function InfoBottomSheet({ onClose, windSpeed, setWindSpeed, dryness, setDryness }: any) {
  const [tab, setTab] = useState('current');

  return (
    <View className="absolute bottom-0 w-full bg-white rounded-t-3xl p-6 shadow-2xl elevation-10 pb-10">
      
      {/* Header */}
      <View className="flex-row justify-between items-center mb-6">
        <Text className="text-3xl font-extrabold text-gray-800">Fire Insight</Text>
        <View className="flex-row space-x-2" style={{ gap: 8 }}>
          <TouchableOpacity className="bg-gray-100 rounded-full w-10 h-10 items-center justify-center">
            <Text className="text-red-400 font-bold text-xl">♡</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onClose} className="bg-gray-100 rounded-full w-10 h-10 items-center justify-center">
            <Text className="text-gray-500 font-bold text-lg">✕</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      {/* Tabs */}
      <View className="flex-row mb-6 bg-gray-100 rounded-full p-1">
        <TouchableOpacity 
          className={`flex-1 py-3 rounded-full items-center ${tab === 'current' ? 'bg-white' : ''}`}
          style={tab === 'current' ? { shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 3 } : {}}
          onPress={() => setTab('current')}
        >
          <Text className={`font-bold ${tab === 'current' ? 'text-gray-800' : 'text-gray-400'}`}>Current Risk</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          className={`flex-1 py-3 rounded-full items-center ${tab === 'whatif' ? 'bg-white' : ''}`}
          style={tab === 'whatif' ? { shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 3 } : {}}
          onPress={() => setTab('whatif')}
        >
          <Text className={`font-bold ${tab === 'whatif' ? 'text-gray-800' : 'text-gray-400'}`}>What-If Scenario</Text>
        </TouchableOpacity>
      </View>

      {tab === 'current' ? (
        <>
          <View className="flex-row justify-between mb-4">
            <View className="bg-pastelRed rounded-3xl p-3 flex-1 mr-1 items-center justify-center">
              <Text className="text-[10px] text-red-900 font-bold uppercase tracking-wider opacity-70 mb-1">Danger</Text>
              <Text className="text-xl font-black text-red-900">HIGH</Text>
            </View>
            <View className="bg-pastelOrange rounded-3xl p-3 flex-1 mx-1 items-center justify-center">
              <Text className="text-[10px] text-orange-900 font-bold uppercase tracking-wider opacity-70 mb-1">Vegetation</Text>
              <Text className="text-sm font-black text-orange-900 text-center">Jack Pine</Text>
            </View>
            <View className="bg-pastelYellow rounded-3xl p-3 flex-1 ml-1 items-center justify-center">
              <Text className="text-[10px] text-yellow-900 font-bold uppercase tracking-wider opacity-70 mb-1">Spread Rate</Text>
              <Text className="text-sm font-black text-yellow-900 text-center">15 m/m</Text>
            </View>
          </View>

          <View className="flex-row justify-between mb-6 px-2">
            <View className="items-center flex-1">
              <Text className="text-gray-400 text-xs font-bold uppercase">Wind</Text>
              <Text className="text-gray-800 font-black">{windSpeed} km/h</Text>
            </View>
            <View className="items-center flex-1 border-l border-r border-gray-100">
              <Text className="text-gray-400 text-xs font-bold uppercase">Temp</Text>
              <Text className="text-gray-800 font-black">28°C</Text>
            </View>
            <View className="items-center flex-1">
              <Text className="text-gray-400 text-xs font-bold uppercase">Humidity</Text>
              <Text className="text-gray-800 font-black">30%</Text>
            </View>
          </View>

          <View className="bg-bgBlue rounded-3xl p-5">
            <Text className="text-gray-800 text-sm font-semibold leading-5">
              A fire here would spread quickly and likely reach the canopy. Stay alert and check official SPSA warnings.
            </Text>
          </View>
        </>
      ) : (
        <View className="mb-4">
          <Text className="text-gray-500 font-medium mb-4 text-sm leading-5">
            Adjust sliders to visualize how the fire spread shapes react to extreme scenarios.
          </Text>
          
          <View className="mt-2">
            <View className="flex-row justify-between mb-1 px-1">
              <Text className="font-bold text-gray-700">Wind Speed</Text>
              <Text className="font-bold text-red-400">{windSpeed} km/h</Text>
            </View>
            <Slider
              style={{ width: '100%', height: 40 }}
              minimumValue={5}
              maximumValue={80}
              step={1}
              value={windSpeed}
              onValueChange={setWindSpeed}
              minimumTrackTintColor="#FF9B9B"
              maximumTrackTintColor="#f0f0f0"
              thumbTintColor="#FF9B9B"
            />
          </View>

          <View className="mt-4">
            <View className="flex-row justify-between mb-1 px-1">
              <Text className="font-bold text-gray-700">Dryness Intensity</Text>
              <Text className="font-bold text-orange-400">{dryness}</Text>
            </View>
            <Slider
              style={{ width: '100%', height: 40 }}
              minimumValue={20}
              maximumValue={100}
              step={1}
              value={dryness}
              onValueChange={setDryness}
              minimumTrackTintColor="#FFD6A5"
              maximumTrackTintColor="#f0f0f0"
              thumbTintColor="#FFD6A5"
            />
          </View>
        </View>
      )}
    </View>
  );
}
