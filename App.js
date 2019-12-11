/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { Provider } from 'react-redux';

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
import store from './redux/store';

const App = () => {
  // const [listMovies, setListMovies] = useState([]);
  // const [categories, setCategories] = useState([]);
  useEffect(() => {
    (async function getMovies() {
      const categoryList = await API.getListMovies();
      store.dispatch({
        type: 'SET_CATEGORY_LIST',
        payload: {
          categoryList,
        },
      });
      const suggestionList = await API.getSuggestion(10);
      store.dispatch({
        type: 'SET_SUGGESTION_LIST',
        payload: {
          suggestionList,
        },
      });
    })();
  }, []);
  return (
    <Provider store={store}>
      <Home>
        <Header>
          <Text>User</Text>
        </Header>
        <Player />
        <Text>buscador lll</Text>
        <CategoryList />
        <SuggestionList />
      </Home>
    </Provider>
  );
};

export default App;
