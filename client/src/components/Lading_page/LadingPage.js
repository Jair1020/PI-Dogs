import React from "react";
import { Link } from "react-router-dom";
import Style from "./LadingPage.module.css";
import img from "../../Images/dog.png";
import img2 from "../../Images/dog-relax.png";
/* import img3 from '../../Images/dog_bailando.gif' */

export default function Lading_page() {
  return (
    <div className={Style.contenedor}>
      <div>
      {/* <img className={Style.img1} src={img} alt="imgs" /> */}
      <img className={Style.img2} src={img2} alt="imgs" />
      </div>
      <div className={Style.back}>
      <img  className={Style.img} src= {img} alt="" />
        <div className={Style.contitle} >
          <h1 className={Style.title} >WELCOME TO YOUR DOG PAGE</h1>
        </div>
       
        <div >
          <Link className={Style.Link} id="button" to="/homepage">
            <h2 className={Style.btn} >Homepage</h2>
          </Link>
        </div>
      </div>
      
    </div>
  );
}
