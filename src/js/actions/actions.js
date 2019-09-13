import { ADD_GENRE, ADD_SUBGENRE, ADD_NEW_GENRE_TITLE, ADD_NEW_GENRE_DESCRIPTION } from '../constants/constants';

export function addGenre(payload) {
    return {
        type: ADD_GENRE,
        payload
    }
}

export function addSubgenre(payload) {
    return {
        type: ADD_SUBGENRE,
        payload
    }
}

export function addNewGenreTitle(payload) {
    return {
        type: ADD_NEW_GENRE_TITLE,
        payload
    }
}

export function addNewGenreDescription(payload) {
    return {
        type: ADD_NEW_GENRE_DESCRIPTION,
        payload
    }
}