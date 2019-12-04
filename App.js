/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';

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
import CategoryList from './src/videos/container/CategoryList';
import Player from './src/player/container/Player';
import API from './utils/api';

const App = () => {
  const [listMovies, setListMovies] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    (async function getMovies() {
      const movies = await API.getSuggestion(10);
      const categoryMovies = await API.getListMovies();
      setListMovies(movies);
      setCategories(categoryMovies);
    })();
  }, []);
  return (
    <Home>
      <Header>
        <Text>User</Text>
      </Header>
      <Player />
      <Text>buscador</Text>
      <Text>categorías</Text>
      <CategoryList list={categories} />
      <SuggestionList list={listMovies} />
    </Home>
  );
};

export default App;
