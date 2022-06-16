import { createContext, useReducer} from "react";

// context is created
export const WishlistContext = createContext();

// Mutates the state depending on the action passed
const wishlistReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
        // Adds the pssed item to the current array of items
      return { ...state, wishlist: [...state.wishlist, action.payload] };
    case "REMOVE_ITEM":
        // filters the array, only returning items with id not matching the passed id
      return {
        ...state,
        wishlist: [
          ...state.wishlist.filter((item) => {
            return item.id !== action.payload;
          }),
        ],
      };
    default:
      return state;
  }
};

// provider is created to wrap the parts of the app that should have access to its values
export function WishlistProvider({ children }) {
    // initial wishlist is retieved from local storage
  const wishlist = JSON.parse(localStorage.getItem("wishlisted-movies"));

  // initial state and dispatch funtion is created
  const [state, dispatch] = useReducer(wishlistReducer, {
    wishlist: [...wishlist],
  });

  // dispatch function for adding item to wishlist - decalering type name and payload
  const addToWishlist = ({id, title, cover}) => {
    dispatch({ type: "ADD_ITEM", payload: {id, title, cover} });
  };

// dispatch function for removing item to wishlist - decalering type name and payload
  const removeFromWishlist = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  // provider return the context and renders its children giving access to its values 
  return (
    <WishlistContext.Provider value={{ ...state, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}
