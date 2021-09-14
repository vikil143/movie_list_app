import React from "react";
import MovieList from "./MovieList";
import { data } from "./data";

export default function Movies() {
  // api logic comes here
  return (
    <div>
      <MovieList list={data} />
    </div>
  );
}
