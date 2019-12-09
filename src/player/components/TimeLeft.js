import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TimeLeft = ({ current, total }) => {
  return (
    <View style={styles.container}>
      <Text>{current} | </Text>
      <Text>{total}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default TimeLeft;
