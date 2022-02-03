


 export const filteredDogs = (dogs,checkbox,orderselect,search_name,search_temperament) => {
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
	  return filtered;

	if (search_name.length !== 0)
	  filtered = filtered.filter((e) =>
		e.name.toUpperCase().includes(search_name.toUpperCase())
	  );

	if (search_temperament.length !== 0)
	  filtered = filtered.filter((e) =>
		e.temperaments?.toLowerCase().includes(search_temperament.toLowerCase())
	  );

	return filtered;
  };

	export const validate = (form,dogs) => {
		let error = {};
	
		if (!form.name) error.name = 'Name is required'
		else if (!/^[a-zA-Z ]+$/.test(form.name)) {
		 error.name = 'Only letters ';
		}
		else if (dogs.find((e)=>e.name==form.name )) error.name='The name already exists '
		if (!form.heightMin && !form.heightMax) error.height = 'Height is required'
	  else if (form.heightMin<0 || form.heightMax<0 ) error.height= 'Height can not be negative'
		else if (form.heightMax-form.heightMin<0) error.height = 'Maximum value has to be greater than the minimum'
	
		if (!form.weightMin && !form.weightMax) error.weight = 'Weight is required'
		else if (form.weightMax-form.weightMin<0) error.weight = 'Maximum value has to be greater than the minimum'
		else if (form.weightMin<0 || form.weightMax<0 ) error.weight= 'weight can not be negative'
		if (!form.life_spanMin && !form.life_spanMax) error.life_span = 'Life span is required'
		else if (form.life_spanMax-form.life_spanMin<0) error.life_span = 'Maximum value has to be greater than the minimum'
		else if (form.life_spanMin<0 || form.life_spanMax<0 ) error.life_span= 'Life span can not be negative'
		
		return error
	}
