import React from 'react';
import { View, StyleSheet } from 'react-native';

const HorizontalSeparator = () => {
  return <View style={styles.sepatator} />;
};

const styles = StyleSheet.create({
  sepatator: {
    flex: 1,
    marginHorizontal: 5,
  },
});

export default HorizontalSeparator;
