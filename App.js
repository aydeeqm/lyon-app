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
import Home from './src/screens/container/home';
import Header from './src/sections/components/header';

const App = () => {
  return (
    <Home>
      <Header>
        <Text>User</Text>
      </Header>
      <Text>buscador</Text>
      <Text>categorías</Text>
      <Text>sugerencias</Text>
    </Home>
  );
};

export default App;
