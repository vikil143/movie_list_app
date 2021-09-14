import React from "react";
import MovieCard from "../../components/MovieCard";

interface Movie {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  rating: string;
}

interface Props {
  list: Array<Movie>;
}

export default function MovieList({ list }: Props) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {list.map((item, i) => (
        <MovieCard
          title={item.title}
          subtitle={item.subtitle}
          image={item.image}
          description={item.description}
          rating={item.rating}
          key={i}
        />
      ))}
    </div>
  );
}
