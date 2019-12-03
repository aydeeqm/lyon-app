import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Suggestion = props => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{ uri: props.medium_cover_image }}
          style={styles.image}
        />
        <View style={styles.gender}>
          <Text style={styles.genderText}>
            {props.genres[Math.floor(Math.random() * props.genres.length)]}
          </Text>
        </View>
      </View>
      <View style={styles.right}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.year}>{props.year}</Text>
        <Text style={styles.rating}>{props.rating}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  gender: {
    backgroundColor: 'black',
    position: 'absolute',
    left: 0,
    top: 0,
    paddingVertical: 5,
    paddingHorizontal: 7,
  },
  genderText: {
    color: 'white',
    fontSize: 11,
  },
  image: {
    height: 150,
    width: 100,
    resizeMode: 'contain',
  },
  right: {
    paddingLeft: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    color: '#44546b',
  },
  year: {
    backgroundColor: '#70b124',
    paddingVertical: 4,
    paddingHorizontal: 6,
    color: 'white',
    fontSize: 11,
    borderRadius: 5,
    overflow: 'hidden',
    alignSelf: 'flex-start',
  },
  rating: {
    color: '#6b6b6b',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Suggestion;
