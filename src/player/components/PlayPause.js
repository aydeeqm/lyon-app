import React from 'react';
import {
  TouchableHighlight,
  // TouchableOpacity,
  // TouchableWithoutFeedback,
  StyleSheet,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ControlPlay = props => (
  <View>
    <Icon name={props.value ? 'play' : 'pause'} size={20} color="#d62b39" />
  </View>
);

const PlayPause = props => {
  return (
    <TouchableHighlight
      onPress={props.onPress}
      style={styles.container}
      underlayColor="rgba(249,68,63,0.5)"
      hitSlop={{
        left: 5,
        top: 5,
        bottom: 5,
        right: 5,
      }}>
      <ControlPlay value={props.paused} />
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  container: {
    justifyContent: 'center',
    paddingHorizontal: 10,
    height: 25,
    marginRight: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'transparent',
    backgroundColor: 'transparent',
  },
});

export default PlayPause;
