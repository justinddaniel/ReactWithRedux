export function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property.
  return {
    type: 'BOOK_SELECTED',
    payload: book;
  }
}

// an action always contains a type, and sometimes a payload.


/* Notes: Redux is responsible for managing state. State is a plain JSON object.
application state is formed by reducers. combined by combinereducers in index.js in the reducers folder.
reducers are responsible for changing application state over time, by dispatching actions.
action creators are simple functions that return actions, and actions are plain javascript objects.
payloads are data sent with actions.
*/
