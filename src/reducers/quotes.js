export default (state = [], action) => {
  let idx;
  let quote;

  switch(action.type) {
    case 'ADD_QUOTE':
      return state.concat(action.quote);
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id === quoteId)
    case 'UPVOTE_QUOTE':

    case 'DOWNVOTE_QUOTE':

    default:
      return state;
  }
}
