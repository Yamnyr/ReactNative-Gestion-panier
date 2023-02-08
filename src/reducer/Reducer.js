

export function reducer(state, action) {
  switch (action.type) {
    case 'set_articles':
      return {...state,articles:action.articles};
    case 'set_panier':
      return {...state,panier:action.panier};
    default:
      throw new Error();
  }
}