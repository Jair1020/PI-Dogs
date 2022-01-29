


 export const filteredDogs = (dogs,checkbox,orderselect,search_name,search_temperament,currentPage) => {
  let filtered = dogs;
	if (checkbox) filtered = filtered.filter((e) => e.id.length > 3);
	if (orderselect === "A_Ascendente")
	  filtered = filtered.sort((a, b) => {
		if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
		if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
		return 0;
	  });
	if (orderselect === "A_Descendente") filtered = [...dogs].reverse();

	if (orderselect === "P_Ascendente")
	  filtered = filtered.sort(
		(a, b) =>
		  parseInt(a.weight.split("-")[1]) - parseInt(b.weight.split("-")[1])
	  );

	if (orderselect === "P_Descendente")
	  filtered = filtered.sort(
		(a, b) =>
		  parseInt(b.weight.split("-")[1]) - parseInt(a.weight.split("-")[1])
	  );

	if (search_name.length === 0 && search_temperament.length === 0)
	  return [filtered.slice(currentPage, currentPage + 8),filtered];

	if (search_name.length !== 0)
	  filtered = filtered.filter((e) =>
		e.name.toUpperCase().includes(search_name.toUpperCase())
	  );

	if (search_temperament.length !== 0)
	  filtered = filtered.filter((e) =>
		e.temperaments?.toLowerCase().includes(search_temperament.toLowerCase())
	  );

	return [filtered.slice(currentPage, currentPage + 8), filtered];
  };

	export const validate = (form) => {
		let error = {};
	
		if (!form.name) error.name = 'Name is required'
		else if (!/^[a-zA-Z ]+$/.test(form.name)) {
		 error.name = 'Only letters ';
		}
		if (!form.heightMin && !form.heightMax) error.height = 'Height is required'
		else if (form.heightMax-form.heightMin<0) error.height = 'Maximum value has to be greater than the minimum'
	
		if (!form.weightMin && !form.weightMax) error.weight = 'Weight is required'
		else if (form.weightMax-form.weightMin<0) error.weight = 'Maximum value has to be greater than the minimum'
	
		if (!form.life_spanMin && !form.life_spanMax) error.life_span = 'life_span is required'
		else if (form.life_spanMax-form.life_spanMin<0) error.life_span = 'Maximum value has to be greater than the minimum'
		
		return error
	}
