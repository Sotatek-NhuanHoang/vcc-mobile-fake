import { handleActions, createAction } from 'redux-actions';

import MasterApi from '../api/master';
import MarketPricesApi from '../api/marketPrices';


/**
 * =====================================================
 * Global actions
 * =====================================================
 */

export const GLOBAL_GET_MARKETS_REQUESTING = createAction('GLOBAL_GET_MARKETS_REQUESTING');
export const GLOBAL_GET_MARKETS_SUCCEEDED = createAction('GLOBAL_GET_MARKETS_SUCCEEDED');
export const GLOBAL_GET_MARKETS_FAILED = createAction('GLOBAL_GET_MARKETS_FAILED');



/**
 * =====================================================
 * Global thunk actions
 * =====================================================
 */

export const GLOBAL_GET_MARKETS_REQUESTED = (payload = {}) => async (dispatch, getState) => {
    const { force } = payload;
    const currentState = getState().global;

    dispatch(GLOBAL_GET_MARKETS_REQUESTING());

    if (!(force || currentState.markets.data.length === 0)) {
        dispatch(GLOBAL_GET_MARKETS_SUCCEEDED());
        return;
    }

    try {
        const responses = await Promise.all([
            MasterApi.get(),
            MarketPricesApi.get()
        ]);

        const rawMarkets = responses[0].data.data.coin_settings;
        const prices = responses[1].data.data;

        // update markets' price
        const updatedMarkets = rawMarkets.map((market) => {
            const coinPair = market.currency + '_' + market.coin;
            return { ...market, ...prices[coinPair] };
        });

        dispatch(GLOBAL_GET_MARKETS_SUCCEEDED(updatedMarkets));
    } catch (error) {
        dispatch(GLOBAL_GET_MARKETS_FAILED(error));
    }
};



/**
 * =====================================================
 * Global reducer
 * =====================================================
 */

const defaultState = {
    markets: {
        data: [],
        loading: false,
        error: null,
    },
};

export const globalReducer = handleActions({
    GLOBAL_GET_MARKETS_REQUESTING: (state) => {
        return {
            ...state,
            markets: { ...state.markets, loading: true, error: null },
        };
    },

    GLOBAL_GET_MARKETS_SUCCEEDED: (state, action) => {
        if (!action.payload) {
            return { ...state };
        }

        const markets = action.payload;
        return {
            ...state,
            markets: { ...state.markets, data: markets, loading: false, error: null },
        };
    },

    GLOBAL_GET_MARKETS_FAILED: (state, action) => {
        const error = action.payload;
        return {
            ...state,
            markets: { ...state.markets, loading: false, error: error },
        };
    },
}, defaultState);

export default globalReducer;
