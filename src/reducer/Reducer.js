
export function reducer(state, action) {
  console.log(action)
  switch (action.type) {
    case 'set_articles':
      return {...state,articles:action.articles};
    case 'set_panier':
      return {...state,cart:action.cart};
    case 'set_in_cart':
//      return {...state,cart: { ...state.cart, [action.inCart.id]:action.inCart }};
      const newCart1 = { ...state.cart};
      newCart1[action.inCart.id] = action.inCart
      return { ...state, cart: newCart1 };
    case 'delete_in_cart':
      const newCart2 = { ...state.cart};
      delete newCart2[action.id];
      return { ...state, cart: newCart2 };
      //return {...state,cart:};
    default:
      throw new Error();
  }
}