import React from "react";
import "./card-list.style.css";
import { Card } from "../card/card.component";

export const CardList = (Props) => {
  return (
    <div className="card-list">
      {Props.monsters.map((monster) => (
        //  <h1 key={monster.id}> {monster.name}</h1>
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
