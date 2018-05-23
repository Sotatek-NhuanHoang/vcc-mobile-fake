import { handleActions } from 'redux-actions';


const defaultState = {
    markets: [],
};

export const globalReducer = handleActions({}, defaultState);

export default globalReducer;