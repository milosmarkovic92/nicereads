import { ADD_GENRE, ADD_SUBGENRE, ADD_NEW_GENRE_TITLE, ADD_NEW_GENRE_DESCRIPTION } from '../constants/constants';

const initialState = {
    genres: '',
    subGenres: '',
    subGenreTitle: '',
    subGenreDescription: '',
    bookTitle: '',
    author: '',
    isbn: '',
    publisher: '',
    datePublished: '',
    pagesNumber: '',
    format: '',
    edition: '',
    editionLanguage: '',
    bookDescription: ''
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_GENRE:
            return {
                ...state,
                genres: action.payload
            }
        case ADD_SUBGENRE:
            return {
                ...state,
                subGenres: action.payload
            }
        case ADD_NEW_GENRE_TITLE:
            return {
                ...state,
                subGenreTitle: action.payload
            }
        case ADD_NEW_GENRE_DESCRIPTION:
            return {
                ...state,
                subGenreDescription: action.payload
            }
        default:
            return state;
    }
}

export default rootReducer;