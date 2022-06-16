import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

import MovieItem from "../../components/movieItem/MovieItem";

import "./AllGenreItems.scss";

const AllGenreItems = () => {
  const { genre } = useParams();
  let start = 1;
  let end = 50;
  const url = `https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas?form=json&range=${start}-${end}&fields=id,title,plprogram$thumbnails&byTags=genre:${genre}`;
  const { data, error, isPending } = useFetch(url);
  const { entries: items } = data;

  /*
  useEffect(() => {
    if (items.length > 0) {
      console.log(items);
    }
  }, [items]);
  */

  return (
    <div className="allGenreItems">
      <h1>{genre}</h1>
      <div className="allGenreItems__items">
        {isPending && <div>Loading items...</div>}
        {error && <div>Something went wrong</div>}
        {items.length > 0 &&
          items.map((item) => (
            <div className="allGenreItems__items-item" key={item.id}>
              <MovieItem item={item} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllGenreItems;
