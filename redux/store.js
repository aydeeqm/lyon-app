import { createStore } from 'redux';
import reducer from '../redux/modules/videos';

const store = createStore(reducer, {});

export default store;
