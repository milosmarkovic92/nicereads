import { NEW_BOOK } from '../actions/types';

const initialState = {
    items: [],
    item: {}
}

export default function(state = initialState, action) {
    switch (action.type) {
        case NEW_BOOK:
            return {
                ...state,
                item: action.payload
            }
        default:
            return state;
    }
}