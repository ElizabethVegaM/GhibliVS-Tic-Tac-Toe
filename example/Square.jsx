import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const Square = ({spot, clickFunc}) => {
  return (
  <TouchableOpacity style={styles.square} onPress={(event) => clickFunc(event)}><Text>{spot}</Text></TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  square: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#999',
    width: 100,
    height: 100,
    fontSize: 30
  }
})

export default Square;