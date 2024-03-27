import Card from "@/components/Card";
import React from "react";

const Movies = () => {
  return (
    <main>
      <h1 className="text-4xl mt-10 font-light">Movies</h1>
      <div className="flex">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
};

export default Movies;
