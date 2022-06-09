import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";

import WishlistButton from "../wishlistButton/WishlistButton";

import "./MovieItem.scss";

const MovieItem = ({ item }) => {
  const [itemTitle, setItemTitle] = useState("");
  const [itemCover, setItemCover] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    if (item.hasOwnProperty("title")) {
      setItemTitle(item.title);
    }
    // if item object is passed from the api
    if (item.hasOwnProperty("plprogram$thumbnails")) {
      const itemThumb = item.plprogram$thumbnails;
      if (itemThumb.hasOwnProperty("orig-212x414")) {
        const itemThumbImg = itemThumb["orig-212x414"];
        if (itemThumbImg.hasOwnProperty("plprogram$url")) {
          const itemThumbImgUrl = itemThumbImg.plprogram$url;
          setItemCover(itemThumbImgUrl);
        }
      }
      // if item object is passed from wishlist
    } else if (item.hasOwnProperty("cover")) {
      setItemCover(item.cover);
    }
    if (item.hasOwnProperty("id")) {
      // Get item id and remove all non numeric characters
      setId(item.id.replace(/\D/g, ""));
    }
  }, []);

  return (
    <div className="movieItem">
      <div className="movieItem__thumb">
        <div className="movieItem__thumb-imageHolder">
          <img src={itemCover} />
        </div>

        <Link className="movieItem-link" to={`/item/${id}`}>
          <div className="movieItem__thumb-seeMore">
            <FaEye />
          </div>
        </Link>
        <div className="movieItem__thumb-wishlist">
          <WishlistButton id={id} title={itemTitle} cover={itemCover} />
        </div>
      </div>

      <Link className="movieItem-link" to={`/item/${id}`}>
        <h4 className="movieItem-title">{itemTitle}</h4>
      </Link>
    </div>
  );
};

export default MovieItem;
