import React from "react";

import MovieList from "../../components/movieList/MovieList";
import Headline from "../../components/headline/Headline";


const Home = () => {
  return (
    <>
      <Headline headline="action" />
      <MovieList genre="action" />
      <Headline headline="comedy" />
      <MovieList genre="comedy" />
      <Headline headline="thriller" />
      <MovieList genre="thriller" />
      <Headline headline="war" />
      <MovieList genre="war" />
      <Headline headline="romance" />
      <MovieList genre="romance" />
      <Headline headline="drama" />
      <MovieList genre="drama" />
      <Headline headline="crime" />
      <MovieList genre="crime" />
      <Headline headline="documentary" />
      <MovieList genre="documentary" />
      <Headline headline="horror" />
      <MovieList genre="horror" />
    </>
  );
};

export default Home;
