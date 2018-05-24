import { handleActions, createAction } from 'redux-actions';


/**
 * =====================================================
 * Home actions
 * =====================================================
 */

export const HOME_BANNER_CHANGE_CURRENT_SLIDE_INDEX = createAction('HOME_BANNER_CHANGE_CURRENT_SLIDE_INDEX');



/**
 * =====================================================
 * Home reducer
 * =====================================================
 */

const defaultState = {
    banner: {
        imageSources: [
            { uri: 'https://cmcsoft.com/image/data/up-anh/chain.jpg' },
            { uri: 'https://cmcsoft.com/image/data/up-anh/chain.jpg' },
            { uri: 'https://cmcsoft.com/image/data/up-anh/chain.jpg' },
            { uri: 'https://cmcsoft.com/image/data/up-anh/chain.jpg' }
        ],
        currentSlideIndex: 1,
    },
};

export const homeScreenReducer = handleActions({
    HOME_BANNER_CHANGE_CURRENT_SLIDE_INDEX: (state, action) => {
        const currentSlideIndex = action.payload;
        return { ...state, banner: { ...state.banner, currentSlideIndex }};
    },
}, defaultState);

export default homeScreenReducer;
