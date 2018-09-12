//State argument is not appication state, only the state this reducer is responsible for.

export default function (state = null, action) {  //reducers get arguments of current state and the action. default argument of null to prevent undefined, which will throw an error.
  switch(action.type) {
    case: 'BOOK_SELECTED':
      return action.payload;
      
  }
  return state;
}
