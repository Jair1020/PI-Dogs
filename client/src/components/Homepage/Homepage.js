import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getalldogs, gettemperamets } from "../../Redux/actions";
import NavBar from "../Nav_bar/NavBar";
import Filtrado from "../FilterComp/filtrado";
import Tabla from "../TableComp/tabla";
import { filteredDogs } from "../../functions/functions";
import Style from "./Homepage.module.css";
import Pagination from "../PaginationComp/Pagination";
import Loader from "../Loader/Loader";

export default function Homepage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage, setDogsPerPage] = useState (8)
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

  let filter = filteredDogs(
    dogs,
    checkbox,
    orderselect,
    search_name,
    search_temperament,
  );

  let pages= []
  for (let i=1; i<=Math.ceil(filter.length/dogsPerPage); i++){
    pages.push (i);
  }
  const indexLastDog= currentPage*dogsPerPage;
  const indexFirstDog = indexLastDog-dogsPerPage;
  const currentDogs= filter.slice (indexFirstDog, indexLastDog)

  const nextPage = () => {
      if (currentPage < Math.ceil((filter.length)/dogsPerPage)) setCurrentPage(currentPage+1);
  };
	
  const PreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const handlePage= (event)=>{
    setCurrentPage (Number (event.target.id))
  }
  const onsearch_nameChange = (event) => {
    setCurrentPage(1);
    setsearch_name(event.target.value);
  };
  const onsearch_temperament = (event) => {
    setCurrentPage(1);
    setsearch_temperament(event.target.value);
  };

  const onorderselectChange = (event) => {
    setCurrentPage(1);
    setorderselect(event.target.value);
  };

  const onchangecheckbox = (event) => {
    setCurrentPage(1);
    setCheckbox(event.target.checked);
  };
  console.log (currentPage)
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
        <Pagination
           pages={pages}
           handlePage={handlePage}
           nextPage={nextPage}
           PreviousPage= {PreviousPage} 
           currentPage={currentPage}     
           />
      </div>
      <div className={Style.tabla}>
      {currentDogs.length?<Tabla filtered={currentDogs}/>:<Loader/> }
      </div>
    </div>
  );
}
