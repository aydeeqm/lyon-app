/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Text} from 'react-native';

/* import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen'; */
import Home from './src/screens/container/Home';
import Header from './src/sections/components/Header';
import SuggestionList from './src/videos/container/SuggestionList';

const App = () => {
  return (
    <Home>
      <Header>
        <Text>User</Text>
      </Header>
      <Text>buscador</Text>
      <Text>categorías</Text>
      <SuggestionList />
    </Home>
  );
};

export default App;
