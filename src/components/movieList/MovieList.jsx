import React from "react";
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

      <div>
        {error && <div>Something went wrong</div>}

        <Swiper
          spaceBetween={30}
          slidesPerView={3.5}
          breakpoints={{
            // when window width is >= 640px
            1600: {
              slidesPerView: 5.5
            },
            1400: {
              slidesPerView: 4.5
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3.5
            },
            0:{
              slidesPerView: 2.6
            }
          }}
        >
          {isPending && <div>loading...</div>}
          {items.length > 0 &&
            items.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <MovieItem item={item} />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

export default MovieList;
