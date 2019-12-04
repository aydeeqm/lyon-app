import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Video from 'react-native-video';
import Layout from '../components/Layout';

class Player extends Component {
  render() {
    return (
      <Layout
        video={
          <Video
            source={{
              uri: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
            }}
            style={styles.backgroundVideo}
            resizeMode="contain"
          />
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default Player;
