export default (state = [], action) => {
  let idx;
  switch(action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote];
    case 'REMOVE_QUOTE':
      idx = state.indexOf(action.id);
      return [state.slice(0, idx), state.slice(idx + 1)]

    default:
      return state;
  }
}
