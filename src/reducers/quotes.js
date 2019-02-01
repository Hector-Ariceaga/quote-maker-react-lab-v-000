export default (state = [], action) => {
  let idx;
  switch(action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote];
  }
  return state;
}
