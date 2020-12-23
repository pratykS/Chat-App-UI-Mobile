import React from "react";
import "./favourites.css";
import { Avatar } from "../avatar/avatar";
const FavouritesComponent = (props) => {
  const { favourites } = props;

  // console.log(favourites);

  return (
    <section className="favorites-container">
      <ul>
        {favourites.map((f, i) => {
          return (
            <li key={i}>
              <Avatar image={f.picture} name={f.name} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export const Favourites = FavouritesComponent;
