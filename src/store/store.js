import { createStore, combineReducers } from 'redux';

import globalReducer from './global';
import homeScreenReducer from './homeScreen';


const reducers = combineReducers({
    global: globalReducer,
    homeScreen: homeScreenReducer,
});

const store = createStore(reducers);


export default store;
