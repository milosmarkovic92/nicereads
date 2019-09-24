import {
  UPDATE_GENRE,
  UPDATE_SUBGENRE,
  UPDATE_NEW_GENRE_TITLE,
  UPDATE_NEW_GENRE_DESCRIPTION,
  UPDATE_AUTHOR,
  UPDATE_BOOK_DESCRIPTION,
  UPDATE_BOOK_TITLE,
  UPDATE_DATE_PUBLISHED,
  UPDATE_EDITION,
  UPDATE_EDITION_LANGUAGE,
  UPDATE_FORMAT,
  UPDATE_ISBN,
  UPDATE_PAGES_NUMBER,
  UPDATE_PUBLISHER,
  UPDATE_BOOK
} from "../constants/constants";

export function addGenre(payload) {
  return {
    type: UPDATE_GENRE,
    payload
  };
}

export const addBook = (genre) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('newBook').add({
            ...genre,
            createdAt: new Date()
        }).then(() => {
            dispatch({type: UPDATE_BOOK, genre});
        }).catch((error) => {
            dispatch({type: 'CREATE_PROJECT_ERROR', error});
        })
    }
};

export function addSubgenre(payload) {
  return {
    type: UPDATE_SUBGENRE,
    payload
  };
}

export function addNewGenreTitle(payload) {
  return {
    type: UPDATE_NEW_GENRE_TITLE,
    payload
  };
}

export function addNewGenreDescription(payload) {
  return {
    type: UPDATE_NEW_GENRE_DESCRIPTION,
    payload
  };
}

export function addAuthor(payload) {
  return {
    type: UPDATE_AUTHOR,
    payload
  };
}

export function addBookDescription(payload) {
  return {
    type: UPDATE_BOOK_DESCRIPTION,
    payload
  };
}

export function addBookTitle(payload) {
  return {
    type: UPDATE_BOOK_TITLE,
    payload
  };
}

export function addDatePublished(payload) {
  return {
    type: UPDATE_DATE_PUBLISHED,
    payload
  };
}

export function addEdition(payload) {
  return {
    type: UPDATE_EDITION,
    payload
  };
}

export function addEditionLanguage(payload) {
  return {
    type: UPDATE_EDITION_LANGUAGE,
    payload
  };
}

export function addFormat(payload) {
  return {
    type: UPDATE_FORMAT,
    payload
  };
}

export function addIsbn(payload) {
  return {
    type: UPDATE_ISBN,
    payload
  };
}

export function addPagesNumber(payload) {
  return {
    type: UPDATE_PAGES_NUMBER,
    payload
  };
}

export function addPublisher(payload) {
  return {
    type: UPDATE_PUBLISHER,
    payload
  };
}
