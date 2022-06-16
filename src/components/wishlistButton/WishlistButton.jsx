import React, { useEffect, useState } from "react";
import { useWishlist } from "../../hooks/useWishlist";
import { FaHeart, FaRegHeart } from "react-icons/fa";

import "./WishlistButton.scss";

const WishlistButton = ({ id, title, cover }) => {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const [currentWishlist, setCurrentWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlisted-movies"))
  );
  const [itemIsInWishlist, setItemIsInWishlist] = useState(false);

  // checks whether the current item is in the current wishlist - determaines which button to render
  useEffect(() => {
    // updates whether the current item is in the current wishlist
    if (currentWishlist) {
      setItemIsInWishlist(currentWishlist.some((item) => item.id === id));
    }
  }, [currentWishlist, id]);

  // saves a stringifyed version of the item to local storage
  const saveToLocalStorage = (wishlist) => {
    localStorage.setItem("wishlisted-movies", JSON.stringify(wishlist));
  };

  useEffect(() => {
    saveToLocalStorage(wishlist);
    // retrieves current wishlist stored in local storage
    setCurrentWishlist(JSON.parse(localStorage.getItem("wishlisted-movies")));
    // console.log(wishlist);
  }, [wishlist]);

  return (
    <>
      {/* Different button is rendered depending on whether the current item is in the current wishlist or not */}
      {itemIsInWishlist ? (
        <div className="wishlistBtn" onClick={() => removeFromWishlist(id)}>
          <FaHeart />
        </div>
      ) : (
        <div
          className="wishlistBtn"
        >
          <FaRegHeart />
        </div>
      )}
    </>
  );
};

export default WishlistButton;
