import React, { useState, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

import MovieItem from "../../components/movieItem/MovieItem";

const AllGenreItems = () => {
  const { genre } = useParams();
  const url = `https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas?form=json&lang=da&byTags=genre:${genre}`;
  const { data, error, isPending } = useFetch(url);
  const { entries: items } = data; 

  useEffect(() => {
    if (data.length > 0) {
      console.log(data);
    }
  }, [data]);

  return (
    <div>
      <h1>{genre}</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {isPending && <div>Loading items...</div>}

        {error && <div>Something went wrong</div>}

        {items.length > 0 && items.map((item) => <MovieItem key={item.id} item={item} />)}
      </div>
    </div>
  );
};

export default AllGenreItems;
