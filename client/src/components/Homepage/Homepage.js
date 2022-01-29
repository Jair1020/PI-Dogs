import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getalldogs, gettemperamets } from "../../Redux/actions";
import NavBar from "../Nav_bar/NavBar";
import Filtrado from "../FilterComp/filtrado";
import Tabla from "../TableComp/tabla";
import { filteredDogs } from "../../functions/functions";
import Style from "./Homepage.module.css";

export default function Homepage() {
  const [currentPage, setCurrentPage] = useState(0);
  const [search_name, setsearch_name] = useState("");
  const [search_temperament, setsearch_temperament] = useState("");
  const [orderselect, setorderselect] = useState();
  const [checkbox, setCheckbox] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getalldogs());
    dispatch(gettemperamets());
  }, []);

  const dogs = useSelector((state) => state.dogs);

  let [filtered, filter] = filteredDogs(
    dogs,
    checkbox,
    orderselect,
    search_name,
    search_temperament,
    currentPage
  );

  const nextPage = () => {
      if (currentPage <= filter.length - 8) setCurrentPage(currentPage + 8);
  };
	
  const PreviousPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 8);
  };

  const onsearch_nameChange = (event) => {
    setCurrentPage(0);
    setsearch_name(event.target.value);
  };
  const onsearch_temperament = (event) => {
    setCurrentPage(0);
    setsearch_temperament(event.target.value);
  };

  const onorderselectChange = (event) => {
    setCurrentPage(0);
    setorderselect(event.target.value);
  };

  const onchangecheckbox = (event) => {
    setCurrentPage(0);
    setCheckbox(event.target.checked);
  };

  return (
    <div className={Style.contenedor}>
      <div className={Style.NavBar}>
        <NavBar />
      </div>
      <div className={Style.filtrado}>
        <Filtrado
          search_name={search_name}
          onsearch_nameChange={onsearch_nameChange}
          search_temperament={search_temperament}
          onsearch_temperament={onsearch_temperament}
          onorderselectChange={onorderselectChange}
          onchangecheckbox={onchangecheckbox}
        />
      </div>
      <div className={Style.title}>
        <h1>Breeds</h1>
      </div>
      <div className={Style.pag}>
        <button className={Style.previous} onClick={PreviousPage}>
				⬅ Previous
        </button>
        &nbsp;
        <button className={Style.next} onClick={nextPage}>
          Next ➡
        </button>
      </div>
      <div className={Style.tabla}>
        <Tabla filtered={filtered} />
      </div>
    </div>
  );
}
