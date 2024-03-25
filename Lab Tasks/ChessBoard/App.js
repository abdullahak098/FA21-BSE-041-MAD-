import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

const ChessBoard = () => {
  const renderSquare = (i, j) => {
    const isBlack = (i + j) % 2 === 1;
    return (
      <View
        key={i * 8 + j}
        style={[
          styles.square,
          { backgroundColor: isBlack ? 'black' : 'white' },
        ]}
      />
    );
  };

  const renderRow = (i) => {
    return (
      <View key={i} style={styles.boardRow}>
        {[...Array(8).keys()].map((j) => renderSquare(i, j))}
      </View>
    );
  };

  return (
    <View style={styles.board}>
      {[...Array(8).keys()].map((i) => renderRow(i))}
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    flexDirection: 'column',
  },
  boardRow: {
    flexDirection: 'row',
  },
  square: {
    width: Dimensions.get('window').width / 8,
    height: Dimensions.get('window').width / 8,
  },
});

export default ChessBoard;
