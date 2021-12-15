import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './screens/MainScreen';
import { colors } from './assets/colors';

export default function App() {
  return (
    <View style={styles.container}>
     <MainScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#fff',
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
