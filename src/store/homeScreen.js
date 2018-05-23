import { handleActions } from 'redux-actions';


const defaultState = {
    banner: {
        imageSources: [
            { uri: 'https://cmcsoft.com/image/data/up-anh/chain.jpg' },
            { uri: 'https://cmcsoft.com/image/data/up-anh/chain.jpg' },
            { uri: 'https://cmcsoft.com/image/data/up-anh/chain.jpg' },
            { uri: 'https://cmcsoft.com/image/data/up-anh/chain.jpg' }
        ],
    },
};

export const homeScreenReducer = handleActions({}, defaultState);

export default homeScreenReducer;