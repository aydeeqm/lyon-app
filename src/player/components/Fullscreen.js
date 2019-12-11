import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Fullscreen = ({ onPress }) => {
  return (
    <TouchableHighlight onPress={onPress}>
      <Text>
        <Icon name="fullscreen" size={25} color="#900" />
      </Text>
    </TouchableHighlight>
  );
};

export default Fullscreen;
