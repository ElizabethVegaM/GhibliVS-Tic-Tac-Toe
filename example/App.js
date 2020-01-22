import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Header from './Header';
import Board from './Board';

export default function App() {
  return (
    <ImageBackground source={require('./assets/forest.jpg')} style={styles.image}>
      <View style={styles.container}>
        <Header />
        <Board />
      </View>
    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%'
  }
});
