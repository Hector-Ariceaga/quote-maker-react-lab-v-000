export const addQuote = quote => {
  return {
    type: 'ADD_QUOTE',
    quote
  }
}

export const removeQuote = quoteID => {
  return {
    type: 'REMOVE_QUOTE'
    quoteID
  }
}
