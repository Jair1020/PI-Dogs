import React from "react";
import s from "./CardDog.module.css";
import { Link } from "react-router-dom";

export default function CardDog({ id, name, weight, temperaments, image }) {
  return (
    <div className={s.cards} >
      <Link className={s.link} to={`/Dogs/${id}`}>
        <img src={image} alt={name} />
        <h3>{name}</h3>

      <div className={s.cards2}>
        <h4  className={s.temperaments}>Temperaments</h4>
        <span className={s.tem} >
          {temperaments}
        </span>
        <h4 className={s.weight} >Weight(Kgs):</h4>
        <span>{weight}</span>
        
      </div>
      </Link>
    </div>
  );
}
