export const initialState = {
  basket: [
    {
      id: "5f583ea173952597c8e71d5f",
      price: 56.72,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51ZIQxjxTxL._AC_US218_.jpg",
      rating: 5,
      title: "Sample Product Title 01",
    },
    {
      id: "5f583ea16d82001b8f91c5b2",
      price: 39.76,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51GTuVaUpdL._AC_US218_.jpg",
      rating: 4,
      title: "Sample Product Title 02",
    },
    {
      id: "5f583ea15b67dd88db8e9b80",
      price: 13.83,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/513ttWDr7eL._AC_US218_.jpg",
      rating: 5,
      title: "Sample Product Title 03",
    },
  ],
  user: null,
};

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
