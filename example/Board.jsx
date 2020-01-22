import React, { useState } from 'react';
import { StyleSheet, View, Text, Alert, TouchableOpacity } from 'react-native';

const Board = () => {
  const [gameTurn, changeTurn] = useState(0);
  const [spotStatus, setSpot] = useState(<Text>-</Text>);

  const play = (key) => {
    Alert.alert('Esta es la key: '+ key)
    changeTurn(!gameTurn)
  }

  const showCurrentPlayer = (turn) => {
    switch (turn) {
      case 0:
        return '0';
      case 1:
        return '1';
      default:
        break;
    }
  }

  const renderSpot = (spot, set) => {
    if (spot == 1 && gameTurn == 0 || spot == 2 && gameTurn == 0 || spot == 3 && gameTurn == 0) {
      return 'X';
    }
    if (spot == 1 || spot == 2 || spot == 3 && gameTurn == 1) {
      return 'Y';
    }
  } 

  return (
    <View>
      <Text>Es el turno de: {showCurrentPlayer(gameTurn)}</Text>
      <View style={styles.boardRow}>
        <TouchableOpacity style={styles.square} onPress={() =>play(1)}><Text>{renderSpot(1)}</Text></TouchableOpacity>
        <TouchableOpacity style={styles.square} onPress={() =>play(2)}><Text>{renderSpot(2)}</Text></TouchableOpacity>
        <TouchableOpacity style={styles.square} onPress={() =>play(3)}><Text>{renderSpot(3)}</Text></TouchableOpacity>
      </View>
      <View style={styles.boardRow}>
        <TouchableOpacity style={styles.square} onPress={() =>play(4)}>{renderSpot(4)}</TouchableOpacity>
        <TouchableOpacity style={styles.square} onPress={() =>play(5)}>{renderSpot(5)}</TouchableOpacity>
        <TouchableOpacity style={styles.square} onPress={() =>play(6)}>{renderSpot(6)}</TouchableOpacity>
      </View>
      <View style={styles.boardRow}>
        <TouchableOpacity style={styles.square} onPress={() =>play(7)}>{renderSpot(7)}</TouchableOpacity>
        <TouchableOpacity style={styles.square} onPress={() =>play(8)}>{renderSpot(8)}</TouchableOpacity>
        <TouchableOpacity style={styles.square} onPress={() =>play(9)}>{renderSpot(9)}</TouchableOpacity>
      </View>
    </View>
  )
};

export default Board;

const styles = StyleSheet.create({
  boardRow: {
    flexDirection: 'row',
  },
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