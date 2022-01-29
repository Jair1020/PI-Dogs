import React from "react";
import { Link } from "react-router-dom";
import Style from "./tabla.module.css";

export default function Tabla({ filtered }) {
  return (
    <div className={Style.contenedor} >
      <table className={Style.tabla} >
        <thead className={ Style.encabezado} >
          <tr>
            <th>Name</th>
            <th>Weight (kgs) </th>
            <th>Temperaments</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody className={Style.body} >
          {filtered.map(({ id, name, weight, temperaments, image }) => (
            <tr key={id}>
              <td style={{ fontSize: 20 }}>
                <Link className={Style.link} to={`/Dogs/${id}`}>👁 {name}</Link>
              </td>

              <td>{weight}</td>
              <td style={{ width: 450 }}>{temperaments}</td>
              <td>
                <Link className={Style.link} to={`/Dogs/${id}`}>
                  <img className={Style.img} src={image} alt={name} />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
