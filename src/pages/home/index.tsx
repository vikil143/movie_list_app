import React from "react";
import Header from "../../components/Header";
import Movies from "./Movies";
import "./home.css";

export default function Home() {
  return (
    <div>
      <Header title="Movie List App" />
      <Movies />
    </div>
  );
}
