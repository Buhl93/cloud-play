import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    setIsPending(true);

    axios
      .get(url)
      .then((response) => {
        setIsPending(false);
        setData(response.data);
      })
      .catch((error) => {
        setIsPending(false);
        setError(true);
        console.log(error);
      });
  }, [url]);

  return { data, error, isPending };
};
