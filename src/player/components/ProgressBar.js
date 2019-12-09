import React from 'react';
import { ProgressBarAndroid, StyleSheet } from 'react-native';

const ProgressBar = ({ progress }) => {
  return (
    <ProgressBarAndroid
      styleAttr="Horizontal"
      color="#d62b39"
      indeterminate={false}
      progress={progress}
      style={styles.progressBarAndroid}
    />
  );
};

const styles = StyleSheet.create({
  progressBarAndroid: {
    width: '50%',
  },
});

export default ProgressBar;
