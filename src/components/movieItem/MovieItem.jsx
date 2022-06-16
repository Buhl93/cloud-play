import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { useImage } from "../../hooks/useImage";
import { MdImageNotSupported } from "react-icons/md";

import WishlistButton from "../wishlistButton/WishlistButton";

import "./MovieItem.scss";

const MovieItem = ({ item }) => {
  const [itemTitle, setItemTitle] = useState("");
  const [id, setId] = useState("");
  const { coverWide } = useImage(item, "coverWide");

  useEffect(() => {
    if (item.hasOwnProperty("title")) {
      setItemTitle(item.title);
    }
    if (item.hasOwnProperty("id")) {
      // Get item id and remove all non numeric characters
      setId(item.id.replace(/\D/g, ""));
    }
  }, [item]);

  return (
    <div className="movieItem">
      {item && (
        <>
          <div className="movieItem__thumb">
            <div className="movieItem__thumb-imageHolder">
              {coverWide ? ( // If cover was not found, render placeholder instead
                <img src={coverWide} alt="thumbnail" />
              ) : (
                <div className="imagePlaceholder">
                  <MdImageNotSupported />
                </div>
              )}
            </div>

            <Link className="movieItem-link" to={`/item/${id}`}>
              <div className="movieItem__thumb-seeMore">
                <FaEye />
              </div>
            </Link>
            <div className="movieItem__thumb-wishlist">
              <WishlistButton id={id} title={itemTitle} cover={coverWide} />
            </div>
          </div>

          <Link className="movieItem-link" to={`/item/${id}`}>
            <h4 className="movieItem-title">{itemTitle}</h4>
          </Link>
        </>
      )}
    </div>
  );
};

export default MovieItem;
