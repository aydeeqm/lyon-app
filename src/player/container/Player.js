import React, { Component } from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import Video from 'react-native-video';
import Layout from '../components/Layout';
import ControlLayout from '../components/ControlLayout';
import PlayPause from '../components/PlayPause';
import ProgressBar from '../components/ProgressBar';
import FullSCreen from '../components/Fullscreen';
import TimeLeft from '../components/TimeLeft';

class Player extends Component {
  state = {
    loading: true,
    paused: false,
    progress: 0.0,
    currentTime: 0.0,
    duration: 0,
    fullScreen: false,
  };

  onBuffer = ({ isBuffering }) => {
    this.setState({ loading: isBuffering });
  };

  onLoad = () => this.setState({ loading: false });

  onPlayPause = () => {
    this.setState(prevState => ({ paused: !prevState.paused }));
  };

  onProgress = progress => {
    const mediaProgress = progress.currentTime / progress.seekableDuration;
    const calcMinute = progress.seekableDuration / 60;
    const minute = Math.floor(calcMinute);
    const seconds = Math.ceil((calcMinute % 1) * 60);
    this.setState({
      progress: mediaProgress,
      currentTime: `${Math.floor(progress.currentTime / 60)}:${Math.floor(
        progress.currentTime,
      )}`,
      duration: `${minute}:${seconds}`,
    });
  };

  onFullScreen = () => {
    this.setState(prevState => ({ fullScreen: !prevState.fullScreen }));
    this.video.presentFullscreenPlayer();
  };

  render() {
    const { currentTime, duration, fullScreen } = this.state;
    return (
      <Layout
        loading={this.state.loading}
        video={
          <Video
            source={{
              uri: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
            }}
            style={styles.backgroundVideo}
            resizeMode="contain"
            onBuffer={this.onBuffer}
            onLoad={this.onLoad}
            paused={this.state.paused}
            ref={ref => {
              this.video = ref;
            }}
            onProgress={this.onProgress}
            fullscreen={fullScreen}
          />
        }
        loader={<ActivityIndicator color="grey" />}
        controls={
          <ControlLayout>
            <PlayPause onPress={this.onPlayPause} paused={this.state.paused} />
            <ProgressBar progress={this.state.progress} />
            <TimeLeft current={currentTime} total={duration} />
            <FullSCreen onPress={this.onFullScreen} />
          </ControlLayout>
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
