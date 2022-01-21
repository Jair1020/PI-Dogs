import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { getalldogs, gettemperamets } from "../../Redux/actions";
import Breed_card from "../Breed_card/Breed_card";
import Nav_bar from "../Nav_bar/Nav_bar";

export default function Homepage() {
  const [currentPage, setCurrentPage] = useState(0);
  const [search_name, setsearch_name] = useState("");
  const [search_temperament, setsearch_temperament] = useState ("");

  const dispatch = useDispatch();

  useEffect(() => {
	dispatch(getalldogs())
    dispatch (gettemperamets())
  },[]);
  const dogs = useSelector((state) => state.dogs);
  /* const temperaments = useSelector((state) => state.temperaments) */
  console.log(dogs);
  var filtered= [];

  const filteredDogs = () => {
    filtered = dogs
    if (search_name.length===0 && search_temperament===0 ) return filtered.slice(currentPage, currentPage + 5);

    if (search_name.length!==0) filtered= filtered.filter (e=> e.name.toLowerCase().includes(search_name.toLowerCase()))
    
    if (search_temperament!==0) filtered= filtered.filter (e=>e.temperaments?.toLowerCase().includes (search_temperament.toLowerCase()));



    return filtered.slice (currentPage, currentPage + 5)
  };

  const nextPage = () => {
    if (search_name.length===0){
	    if (currentPage <= dogs.length - 5) setCurrentPage(currentPage + 5);
    }else {
        if (currentPage <= filtered.length - 5) setCurrentPage(currentPage + 5);
        console.log (filtered)
    }

  };
  const PreviousPage = () => {
	if (currentPage > 0) setCurrentPage(currentPage - 5);
  };

  const onsearch_nameChange = (event) => {
	setCurrentPage(0);
	setsearch_name(event.target.value)
 
    ;
  };
  const onsearch_temperament = (event) => {
    setCurrentPage(0);
	setsearch_temperament(event.target.value)

  }

  const HandleSubmit = (e) => {};

  return (
	<div>
	  <div>
		<Nav_bar />
	  </div>

	  <div>
		<form onSubmit={HandleSubmit}>
		  <input
			name="breed"
			placeholder="Search Breed"
			type="text"
			value={search_name}
			onChange={onsearch_nameChange}
		  ></input>
		  <input
			name="temperament"
			placeholder="Search Temperament"
			type="text"
			value={search_temperament}
			onChange={onsearch_temperament}
		  ></input>
		  <input
			type="checkbox"
			/* checked={this.checked} */ name="breed created"
		  ></input>
		  <button type="submit"> Search </button>
		</form>
		<div>
		  <h1>Breeds</h1>
		  <hr />
		  <button onClick={PreviousPage}>previous</button>
		  &nbsp;
		  <button onClick={nextPage}>next</button>
		  <table>
			<thead>
			  <tr>
				<th style={{ height: 20 }}>Name</th>
				<th style={{ height: 20 }}>Weight (kgs) </th>
				<th style={{ height: 20 }}>Temperaments</th>
				<th style={{ height: 20 }}>Image</th>
			  </tr>
			</thead>
			<tbody /* style={font-size: 20} */>
			  {filteredDogs().map(
				({ id, name, weight, temperaments, image }) => (
				  <tr key={id}>
					<td style={{ width: 250 }}>{name}</td>
					<td>{weight}</td>
					<td style={{ width: 450 }}>{temperaments}</td>
					<td>
					  <img
						style={{ height: 100, width: 200 }}
						src={image}
						alt={name}
					  />
					</td>
				  </tr>
				)
			  )}
			</tbody>
		  </table>
		</div>
	  </div>
	</div>
  );
}
