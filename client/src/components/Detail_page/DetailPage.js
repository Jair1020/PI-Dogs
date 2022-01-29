import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getdogid } from "../../Redux/actions";
import Style from "./DetailPage.module.css";
import NavBar from "../Nav_bar/NavBar";

export default function Detail_page() {
  const { DogsId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getdogid(DogsId));
  }, []);
  const dog = useSelector((state) => state.dog);
  console.log(DogsId);

  return (
    <div className={Style.contenedor}>
      <div className= {Style.NavBar} >
        <NavBar />
      </div>
      <div className={Style.card}>
        <h1>{dog.name}</h1>
        <div className={Style.datos}>
          <div>
            <h3>Minimum weight</h3>
            {dog.weight ? <p>{dog.weight.split("-")[0] + "kgs"}</p> : null}
          </div>
          <div>
            <h3>Maximum weight</h3>
            {dog.weight ? <p>{dog.weight.split("-")[1] + ` kgs`}</p> : null}
          </div>
        </div>
        <div className={Style.datos}>
          <div>
            <h3>Minimun height</h3>
            {dog.height ? <p>{dog.height.split("-")[0] + "cms"}</p> : null}
          </div>
          <div>
            <h3>Maximum height</h3>
            {dog.height ? <p>{dog.height.split("-")[1] + ` cms`}</p> : null}
          </div>
        </div>
        <div className={Style.datos}>
          <div>
            <h3>Minimum life expectancy</h3>
            {dog.life_span ? (
              <p>{dog.life_span.split("-")[0] + "years"}</p>
            ) : null}
          </div>
          <div>
            <h3>Maximum life expectancy</h3>
            {dog.life_span ? <p>{dog.life_span.split("-")[1]}</p> : null}
          </div>
        </div>
        <div className={Style.datos}>
          {dog.temperaments ? <h4>{dog.temperaments}</h4> : null}
        </div>
        <div>
          {dog.image ? (
            <img className={Style.img} src={dog.image} alt="dog" />
          ) : null}
        </div>
      </div>
    </div>
  );
}
