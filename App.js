import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeImage from './presentation/HomeImage';
import TextPresentation from './presentation/TextPresentation';


export default function App() {
  return (
    <View style={styles.container}>
      <HomeImage/>
      <TextPresentation user="lokdi"></TextPresentation>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
