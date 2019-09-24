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

const initialState = {
  genres: "",
  subGenres: "",
  subGenreTitle: "",
  subGenreDescription: "",
  bookTitle: "",
  author: "",
  isbn: "",
  publisher: "",
  datePublished: "",
  pagesNumber: "",
  format: "",
  edition: "",
  editionLanguage: "",
  bookDescription: ""
};

function bookReducer(state = initialState, action) {
  // console.log(action);
  switch (action.type) {
    case UPDATE_GENRE:
      // console.log("genre selected", action.payload);
      return {
        ...state,
        genres: action.payload
      };
    // return action.payload;
    case UPDATE_SUBGENRE:
      return {
        ...state,
        subGenres: action.payload
      };
    case UPDATE_NEW_GENRE_TITLE:
      return {
        ...state,
        subGenreTitle: action.payload
      };
    case UPDATE_NEW_GENRE_DESCRIPTION:
      return {
        ...state,
        subGenreDescription: action.payload
      };
    case UPDATE_AUTHOR:
      return {
        ...state,
        author: action.payload
      };
    case UPDATE_BOOK_DESCRIPTION:
      return {
        ...state,
        bookDescription: action.payload
      };
    case UPDATE_BOOK_TITLE:
      return {
        ...state,
        bookTitle: action.payload
      };
    case UPDATE_DATE_PUBLISHED:
      return {
        ...state,
        datePublished: action.payload
      };
    case UPDATE_EDITION:
      return {
        ...state,
        edition: action.payload
      };
    case UPDATE_EDITION_LANGUAGE:
      return {
        ...state,
        editionLanguage: action.payload
      };
    case UPDATE_FORMAT:
      return {
        ...state,
        format: action.payload
      };
    case UPDATE_ISBN:
      return {
        ...state,
        isbn: action.payload
      };
    case UPDATE_PAGES_NUMBER:
      return {
        ...state,
        pagesNumber: action.payload
      };
    case UPDATE_PUBLISHER:
      return {
        ...state,
        publisher: action.payload
      };
    case UPDATE_BOOK:
      console.log(action.genre);
      return state;
    default:
      return state;
  }
}

export default bookReducer;
