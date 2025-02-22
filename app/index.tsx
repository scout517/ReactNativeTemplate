import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View className='flex-1 items-center justify-center bg-white'>
      <Text className='text-3xl font-pblack'>Template</Text>
      <StatusBar style="auto" />
      <Link href={"/home"} className='text-blue-500'>Go to Home</Link>
    </View>
  );
}