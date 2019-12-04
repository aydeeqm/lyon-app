import React from 'react';
import { Text, ImageBackground, StyleSheet } from 'react-native';

const Category = props => {
  return (
    <ImageBackground
      style={styles.wrapper}
      source={{ uri: props.background_image }}>
      <Text style={styles.genre}>
        {props.genres[Math.floor(Math.random() * props.genres.length)]}
      </Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 100,
    width: 250,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  genre: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0,0,0,.75)',
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 1, // ios: 0
  },
});

export default Category;
