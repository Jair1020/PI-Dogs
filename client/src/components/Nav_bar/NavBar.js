import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../../Images/dog.png'
import img2 from '../../Images/dog_bailando.gif'
import Style from './NavBar.module.css'

export default function Nav_bar() {
  return (

    <div className={Style.contenedor} >
      <NavLink  to='/'><img className={Style.img}  src={img} alt='Ladingpage'/></NavLink>
       &nbsp;
      <NavLink to='/homepage' className={({ isActive }) =>isActive?Style.homepageon:Style.homepageoff}>Home</NavLink>
      &nbsp;
      <NavLink className={({ isActive }) =>isActive?Style.createon:Style.createoff}to='/Dog/create'>Create</NavLink>
      <img className={Style.img2} src={img2} alt='img'/>
    </div>
  )  
}
