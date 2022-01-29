import React from 'react';

export default function Filtrado(props) {
  return (
  <div>
    <form>
		  <input
			name="breed"
			placeholder="🔎 Search Name"
			type="text"
			value={props.search_name}
			onChange={props.onsearch_nameChange}
		  ></input>
		  <input
			name="temperament"
			placeholder="🔎 Search Temperament"
			type="text"
			value={props.search_temperament}
			onChange={props.onsearch_temperament}
		  ></input>
		  <select
			name="Order"
			defaultValue="Choose a order:"
			onChange={props.onorderselectChange}
		  >
			<option disabled>Choose a order:</option>
			<optgroup label="Alfabetico">
			  <option value="A_Ascendente">Ascendente</option>
			  <option value="A_Descendente">Descendente</option>
			</optgroup>
			<optgroup label="Por peso">
			  <option value="P_Ascendente">Ascendente</option>
			  <option value="P_Descendente">Descendente</option>
			</optgroup>
		  </select>
		  <label>Only Created</label>
		  <input
			type="checkbox"
			onChange={props.onchangecheckbox}
			/* checked={this.checked} */ name="breed created"
		  ></input>
		</form>
  </div>
  )}
