import React from "react";

export const useImage = (item, imageType) => {
  let coverWide = "";
  let coverTall = "";
  let backdrop = "";
  let itemThumb = "";
  let itemThumbImg = "";
  let itemThumbImgUrl = "";

  // if a wide cover iamge is wanted
  if (imageType === "coverWide") {
    // if item object is passed from the api
    if (item.hasOwnProperty("plprogram$thumbnails")) {
      itemThumb = item.plprogram$thumbnails;
      if (itemThumb.hasOwnProperty("orig-212x414")) {
        itemThumbImg = itemThumb["orig-212x414"];
        if (itemThumbImg.hasOwnProperty("plprogram$url")) {
          const itemThumbImgUrl = itemThumbImg.plprogram$url;
          coverWide = itemThumbImgUrl;
        }
      } else if (itemThumb.hasOwnProperty("da-278x495")) {
        itemThumbImg = itemThumb["da-278x495"];
        if (itemThumbImg.hasOwnProperty("plprogram$url")) {
          itemThumbImgUrl = itemThumbImg.plprogram$url;
          coverWide = itemThumbImgUrl;
        }
      } else if (itemThumb.hasOwnProperty("orig-278x495")) {
        itemThumbImg = itemThumb["orig-278x495"];
        if (itemThumbImg.hasOwnProperty("plprogram$url")) {
          itemThumbImgUrl = itemThumbImg.plprogram$url;
          coverWide = itemThumbImgUrl;
        }
      } else if (itemThumb.hasOwnProperty("da-278x495")) {
        itemThumbImg = itemThumb["da-278x495"];
        if (itemThumbImg.hasOwnProperty("plprogram$url")) {
          itemThumbImgUrl = itemThumbImg.plprogram$url;
          coverWide = itemThumbImgUrl;
        }
      }
      // if item object is passed from wishlist
    } else if (item.hasOwnProperty("cover")) {
      coverWide = item.cover;
    }
  }
  // is a tall cover image i wanted
  else if (imageType === "coverTall") {
    if (item.hasOwnProperty("plprogram$thumbnails")) {
      itemThumb = item.plprogram$thumbnails;
      if (itemThumb.hasOwnProperty("orig-364x250")) {
        itemThumbImg = itemThumb["orig-364x250"];
        if (itemThumbImg.hasOwnProperty("plprogram$url")) {
          const itemThumbImgUrl = itemThumbImg.plprogram$url;
          coverTall = itemThumbImgUrl;
        }
      } else if (itemThumb.hasOwnProperty("da-364x250")) {
        itemThumbImg = itemThumb["da-364x250"];
        if (itemThumbImg.hasOwnProperty("plprogram$url")) {
          itemThumbImgUrl = itemThumbImg.plprogram$url;
          coverTall = itemThumbImgUrl;
        }
      } else if (itemThumb.hasOwnProperty("orig-365x251")) {
        itemThumbImg = itemThumb["orig-365x251"];
        if (itemThumbImg.hasOwnProperty("plprogram$url")) {
          itemThumbImgUrl = itemThumbImg.plprogram$url;
          coverTall = itemThumbImgUrl;
        }
      } else if (itemThumb.hasOwnProperty("da-365x251")) {
        itemThumbImg = itemThumb["da-365x251"];
        if (itemThumbImg.hasOwnProperty("plprogram$url")) {
          itemThumbImgUrl = itemThumbImg.plprogram$url;
          coverTall = itemThumbImgUrl;
        }
      }
    }
  }
  // if backdrop image is wanted
  else if (imageType === "backdrop") {
    // if item object is passed from the api
    if (item.hasOwnProperty("plprogram$thumbnails")) {
      itemThumb = item.plprogram$thumbnails;
      if (itemThumb.hasOwnProperty("orig-1080x1920")) {
        itemThumbImg = itemThumb["orig-1080x1920"];
        if (itemThumbImg.hasOwnProperty("plprogram$url")) {
          const itemThumbImgUrl = itemThumbImg.plprogram$url;
          backdrop = itemThumbImgUrl;
        }
      } else if (itemThumb.hasOwnProperty("da-1080x1920")) {
        itemThumbImg = itemThumb["da-1080x1920"];
        if (itemThumbImg.hasOwnProperty("plprogram$url")) {
          itemThumbImgUrl = itemThumbImg.plprogram$url;
          backdrop = itemThumbImgUrl;
        }
      } else if (itemThumb.hasOwnProperty("orig-720x1280")) {
        itemThumbImg = itemThumb["orig-720x1280"];
        if (itemThumbImg.hasOwnProperty("plprogram$url")) {
          itemThumbImgUrl = itemThumbImg.plprogram$url;
          backdrop = itemThumbImgUrl;
        }
      } else if (itemThumb.hasOwnProperty("da-720x1280")) {
        itemThumbImg = itemThumb["da-720x1280"];
        if (itemThumbImg.hasOwnProperty("plprogram$url")) {
          itemThumbImgUrl = itemThumbImg.plprogram$url;
          backdrop = itemThumbImgUrl;
        }
      }
    }
  }

  return { coverWide, coverTall, backdrop };
};
