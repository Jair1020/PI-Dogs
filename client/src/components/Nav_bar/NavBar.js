import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../../Images/dog.png'
import Style from './NavBar.module.css'

export default function Nav_bar() {
  return (

    <div className={Style.contenedor} >
      <NavLink  to='/'>
         <img className={Style.img}  src={img} alt='Ladingpage'/>
      </NavLink>
       &nbsp;
      <NavLink   to='/homepage' className={Style.homepage}>Home</NavLink>
      &nbsp;
      <NavLink  className={Style.create}  to='/Dog/create'>Create</NavLink>
    </div>

  )  
  
}
