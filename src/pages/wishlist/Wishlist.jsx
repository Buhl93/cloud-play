import React, { useEffect } from "react";
import { useWishlist } from "../../hooks/useWishlist";

import MovieItem from "../../components/movieItem/MovieItem";

import "./Wishlist.scss";

const Wishlist = () => {
  const { wishlist } = useWishlist();
  /*
  useEffect(() => {
    console.log(wishlist);
  }, [wishlist]);
  */

  return (
    <div className="wishlist">
      <h1>My Wishlist</h1>
      <div className="wishlist__items">
        {wishlist &&
          wishlist.map((item) => {
            return (
              <div key={item.id} className="wishlist__items-item">
                <MovieItem item={item} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Wishlist;
