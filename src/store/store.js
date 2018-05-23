import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { globalReducer, globalSaga } from './global';
import homeScreenReducer from './homeScreen';


const reducers = combineReducers({
    global: globalReducer,
    homeScreen: homeScreenReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
);


sagaMiddleware.run(globalSaga);

export default store;
