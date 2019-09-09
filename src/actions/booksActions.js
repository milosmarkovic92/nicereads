import { NEW_BOOK } from './types';

export const addBook = payload => {
    return {
        type: NEW_BOOK,
        payload
      }
    // fetch('https://jsonplaceholder.typicode.com/posts', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(postData)
    //     })
    //         .then(res => res.json())
    //         .then(post => dispatch({
    //             type: NEW_BOOK,
    //             payload: post
    //         }));
}