import React, { useState, useEffect } from "react";
import { useWishlist } from "../../hooks/useWishlist";

import WishlistButton from "../../components/wishlistButton/WishlistButton";
import MovieItem from "../../components/movieItem/MovieItem";

const Wishlist = () => {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  useEffect(() => {
    console.log(wishlist);
  }, [wishlist]);

  return (
    <div>
      <div>Wishlist</div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {wishlist &&
          wishlist.map((item) => {
            return (
              <MovieItem key={item.id} item={item} />
            );
          })}
      </div>
    </div>
  );
};

export default Wishlist;
