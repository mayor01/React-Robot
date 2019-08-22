import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((robota, i) => {
        return (
          <Card
            key={i}
            id={robota.id}
            name={robota.name}
            email={robota.email}
          />
        );
      })}
    </div>
  );
};
export default CardList;
