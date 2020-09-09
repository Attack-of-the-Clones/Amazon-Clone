export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item] };
    case "REMOVE_FROM_BASKET":
      //Logic for Removing Item from basket

      // we cloned the basket
      let newBasket = [...state.basket];

      // we check to see if the item exist
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        // item exist in the basket, remove it
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id} ) as its not present`
        );
      }

      return { ...state, basket: newBasket };

    default:
      return state;
  }
};

export default reducer;

// export const reducer = (state, update) => {
//   console.log("Set Global State " + JSON.stringify(update));

//   let newState = { ...state, ...update };
//   return newState;
// };
