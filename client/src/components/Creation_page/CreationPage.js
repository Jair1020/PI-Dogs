import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createdog, getalldogs, gettemperamets } from "../../Redux/actions";
import NavBar from "../Nav_bar/NavBar";
import Style from './CreationPage.module.css'
import { validate } from "../../functions/functions";




export default function CreationPage() {
  const formempty = {
    name: "",
    weightMin: "",
    weightMax: "",
    heightMin: "",
    heightMax: "",
    life_spanMin: "",
    life_spanMax: "",
    temperaments: [],
    imageurl: "",
  } 
  const [img, setimg] = useState("");
  const [form, setForm] = useState({...formempty});
  const [error, setError]= useState ({life_span:' '})

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(gettemperamets())
    dispatch (getalldogs())
  
  }, []);
  let temperaments= useSelector((state) => state.temperaments)
  let dogs= useSelector ((state)=>state.dogs)


  const onChangeForm = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
    setError (validate ({...form, [event.target.name]: event.target.value,},dogs))
  };

  const handleOnclick = (event) => {
    event.preventDefault();
    console.log(form.imageurl);
    setimg(form.imageurl);
  };


  const onChangetem = (event) => {
    let arrt = [...form.temperaments];
    if (!arrt.includes(event.target.value)) arrt.push(event.target.value);
    else {
      var i = arrt.indexOf(event.target.value);
      arrt.splice(i, 1);
    }
    setForm({
      ...form,
      temperaments: arrt,
    });
  };
  const HandleonSubmit = (e)=>{
    e.preventDefault ()
    const create= {
      name: form.name,
      weight: `${form.weightMin}-${form.weightMax}`,
      height: `${form.heightMin}-${form.heightMax}`,
      life_span: `${form.life_spanMin}-${form.life_spanMax}`,
      temperaments: form.temperaments,
      image: form.imageurl
    }
    dispatch (createdog(create))
    setForm({...formempty})
    alert ('Dog created')
}
  return (
    <div className={Style.contenedor} >
      <div className={Style.NavBar}  >
        <NavBar/>
      </div> 

      <form className={Style.form} onSubmit={HandleonSubmit} >
        <h2>CREATE NEW BREED</h2>
        <div className={Style.filas} > 
          <label className={Style.label}>Name</label>
          <input name="name" type="text" placeholder="Enter name" onChange={onChangeForm} value={form.name} ></input>
          {form.name && error.name && (<span className={Style.err} >*{error.name}</span>)}
        </div>
        <div className={Style.filas}>
          <label className={Style.label}>Height (cm) </label>
          <input name="heightMin" type="number" placeholder="Min Height" onChange={onChangeForm} value={form.heightMin} ></input>
          <label> - </label>
          <input name="heightMax"  type="number" placeholder="Max Height" onChange={onChangeForm} value={form.heightMax} ></input>
          {form.heightMax && error.height && (<span className={Style.err}>*{error.height}</span>)}
        </div>
        <div className={Style.filas}>
          <label className={Style.label}>Weight (kgs) </label>
          <input name="weightMin" type="number" placeholder="Min Weight" onChange={onChangeForm} value={form.weightMin} ></input>
          <label> - </label>
          <input name="weightMax" type="number" placeholder="Max Weight" onChange={onChangeForm} value={form.weightMax} ></input>
          {form.weightMax && error.weight && (<span className={Style.err}>*{error.weight}</span>)}
        </div>
        <div className={Style.filas} >
          <label className={Style.label}>Life span (years) </label>
          <input name="life_spanMin" type="number" placeholder="Min span" onChange={onChangeForm} value={form.life_spanMin} ></input>
          <label> - </label>
          <input name="life_spanMax" type="number" placeholder="Max span"onChange={onChangeForm} value={form.life_spanMax} ></input>
          {form.life_spanMax && error.life_span && (<span className={Style.err}>*{error.life_span}</span>)}
        </div>

        <div>
          <label className={Style.label}>Temperaments</label>
           <select
            name="Temperaments"
            defaultValue="-----"
            onChange={onChangetem}
          >
            <option disabled>-----</option>
            {temperaments.length? temperaments.map((e) => (
              <option key={e.name} value={e.name}>
                {e.name}
              </option>
            )):null}
          </select>
          {form.temperaments?.map((e) => (
            <label key={e}>{e + ', '} </label>
          ))}
        </div>
        <div>
          <label className={Style.label}>Enter url Image</label>
          <input
            name="imageurl"
            type={"url"}
            placeholder="Url"
            onChange={onChangeForm}
          ></input>
          <button name="img" onClick={handleOnclick}>
            Show Image
          </button>
        </div>

        <div >
          {img.length ? (
            <img  className={Style.img} src={`${form.imageurl}`} alt="img" />
          ) : (
            <label>Image</label>
          )}
        </div>
        <div>
          {
            (error.name || error.height || error.weight || error.life_span)?<input disabled type={'submit'} value='Create' ></input>:   
          <input type={'submit'} value='Create' ></input>
          }
        </div>
      </form>
    </div>
  );
}
