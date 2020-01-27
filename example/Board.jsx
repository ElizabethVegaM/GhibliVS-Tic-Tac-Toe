import React, { useState } from 'react';
import { StyleSheet, View, Text, Alert, TouchableOpacity } from 'react-native';
import Square from './Square';

const Board = () => {
  const [gameTurn, changeTurn] = useState(true);
  const [squares, fillSquares] = useState(Array(9).fill(null));

  const renderSpot = (key) => {
    if (squares[key] == null) {
      const spot = squares.slice();
      switch (gameTurn) {
        case true:
          spot[key] = 'X';
          break;
        case false:
          spot[key] = 'O';
          break;
        default:
          break;
      }
      fillSquares(spot);
      changeTurn(!gameTurn)
    } else {
      Alert.alert('Este cuadro ya está ocupado >:c')
      return;
    }

  } 

  const renderSquare = (i) => {
    return <Square spot={squares[i]} clickFunc={() => renderSpot(i)} />
  }

  // const play = (key) => {
  //   Alert.alert('Esta es la key: '+ key)
  //   changeTurn(!gameTurn)
  // }

  const showCurrentPlayer = (turn) => {
  if (turn) {
    return 'X';
  } else {
    return 'O';
  }
  }

  const resetGame = () => {
    Alert.alert('hola')
    changeTurn(true);
    fillSquares(Array(9).fill(null))
  }

  return (
    <View>
      <Text>Es el turno de: {showCurrentPlayer(gameTurn)}</Text>
      <View style={styles.boardRow}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </View>
      <View style={styles.boardRow}>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </View>
      <View style={styles.boardRow}>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </View>
      <View>
        <TouchableOpacity onPress={() => {fillSquares(Array(9).fill(null)); changeTurn(true)}}><Text>Limpiar</Text></TouchableOpacity>
      </View>
    </View>
  )
};

export default Board;

const styles = StyleSheet.create({
  boardRow: {
    flexDirection: 'row',
  }
})