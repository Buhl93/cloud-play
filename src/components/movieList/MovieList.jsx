import React, { useState, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import { Swiper, SwiperSlide } from "swiper/react";

import MovieItem from "../movieItem/MovieItem";
import Button from "../button/Button";

import "./MovieList.scss";
import "swiper/scss";

const MovieList = ({ genre }) => {
  const url = `https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas?form=json&lang=da&range=1-20&byTags=genre:${genre}`;
  const { data, error, isPending } = useFetch(url);
  const { entries: items } = data;

  return (
    <div className="movieList">
      <div className="movieList-link">
        <Button link={`/all-items/genre=${genre}`} type="primary">
          {`More ${genre} content`}
        </Button>
      </div>

      <div style={{ display: "flex" }}>
        {isPending && <div>Loading items...</div>}

        {error && <div>Something went wrong</div>}

        {items.length > 0 && (
          <Swiper spaceBetween={30} slidesPerView={3.5}>
            {items.map((item) => {
              return (
                <SwiperSlide>
                  <MovieItem item={item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default MovieList;
