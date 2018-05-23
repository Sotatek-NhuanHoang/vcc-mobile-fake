import { handleActions, createAction } from 'redux-actions';
import { call, put, takeEvery } from 'redux-saga/effects';

import MasterApi from '../api/master';


/**
 * =====================================================
 * Global actions
 * =====================================================
 */

export const GLOBAL_GET_MARKETS_REQUESTED = createAction('GLOBAL_GET_MARKETS_REQUESTED');
export const GLOBAL_GET_MARKETS_SUCCEEDED = createAction('GLOBAL_GET_MARKETS_SUCCEEDED');
export const GLOBAL_GET_MARKETS_FAILED = createAction('GLOBAL_GET_MARKETS_FAILED');



/**
 * =====================================================
 * Redux saga
 * =====================================================
 */

const getMarkets = function* () {
    try {
        console.log(MasterApi);
        const response = yield call(MasterApi.get);
        console.log('response', response);
    } catch (e) {
        console.log('error', e);
    }
};

export const globalSaga = function* () {
    yield takeEvery(GLOBAL_GET_MARKETS_REQUESTED().type, getMarkets);
};



/**
 * =====================================================
 * Global reducer
 * =====================================================
 */

const defaultState = {
    markets: [],
};

export const globalReducer = handleActions({}, defaultState);

export default globalReducer;