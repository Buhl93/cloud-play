import React, { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";

export const useWishlist = () => {
  const context = useContext(WishlistContext);

    // check if context is used outside its scope
  if (context === undefined) {
    throw new Error("useWishlist() must be used inside a WishlistProvider");
  }

  return context;
};
