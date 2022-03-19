import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createdog, getalldogs, gettemperamets } from "../../Redux/actions";
import NavBar from "../Nav_bar/NavBar";
import Style from "./CreationPage.module.css";
import { validate } from "../../functions/functions";
import axios from "axios";
import perfil from "../../Images/Dog_sus.png";

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
    imageurl: perfil,
  };
  const [img, setimg] = useState("");
  const [form, setForm] = useState({ ...formempty });
  const [error, setError] = useState({ life_span: " " });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(gettemperamets());
    dispatch(getalldogs());
  }, []);
  let temperaments = useSelector((state) => state.temperaments);
  let dogs = useSelector((state) => state.dogs);

  const onChangeForm = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
    setError(
      validate({ ...form, [event.target.name]: event.target.value }, dogs)
    );
  };

  const upload = async (img) => {
    const files = img;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "Beautify");
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/jair1020/image/upload",
      data
    );
    const file = res.data;
    setForm({ ...form, imageurl: file.secure_url });
    console.log(res);
  };

  const uploadImage = (e) => {
    e.preventDefault();
    const files = e.target.files;
    upload(files);
  };

  const onDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    upload(files);
  };
  const dragOver = (e) => {
    e.preventDefault();
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
  const HandleonSubmit = (e) => {
    e.preventDefault();
    const create = {
      name: form.name,
      weight: `${form.weightMin}-${form.weightMax}`,
      height: `${form.heightMin}-${form.heightMax}`,
      life_span: `${form.life_spanMin}-${form.life_spanMax}`,
      temperaments: form.temperaments,
      image: form.imageurl,
    };
    dispatch(createdog(create));
    setForm({ ...formempty });
    alert("Dog created");
  };
  return (
    <div className={Style.contenedor}>
      <div className={Style.NavBar}>
        <NavBar />
      </div>
      
      <form className={Style.container} onSubmit={HandleonSubmit}>
        
        <div onDragOver={dragOver} className={Style.profilepicture}>
        <h2>NEW BREED</h2>
          <div>
            <img
              className={Style.img}
              src={form.imageurl}
              onDrop={(e) => onDrop(e)}
            ></img>

            <label className={Style.label} for="img">
              Choose or drag a image
            </label>
            <input
              id="img"
              className={Style.input}
              type="file"
              onChange={(e) => uploadImage(e)}
            />
          </div>
        </div>
        <div className={Style.form} >
          <div className={Style.filas}>
            <label className={Style.label2}>Name</label>
            <input
              name="name"
              type="text"
              placeholder="Enter name"
              onChange={onChangeForm}
              value={form.name}
            ></input>
            {form.name && error.name && (
              <span className={Style.err}>*{error.name}</span>
            )}
          </div>
          <div className={Style.filas}>
            <label className={Style.label2}>Height (cm) </label>
            <input
              name="heightMin"
              type="number"
              placeholder="Min Height"
              onChange={onChangeForm}
              value={form.heightMin}
            ></input>
            <label> - </label>
            <input
              name="heightMax"
              type="number"
              placeholder="Max Height"
              onChange={onChangeForm}
              value={form.heightMax}
            ></input>
            {form.heightMax && error.height && (
              <span className={Style.err}>*{error.height}</span>
            )}
          </div>
          <div className={Style.filas}>
            <label className={Style.label2}>Weight (kgs) </label>
            <input
              name="weightMin"
              type="number"
              placeholder="Min Weight"
              onChange={onChangeForm}
              value={form.weightMin}
            ></input>
            <label> - </label>
            <input
              name="weightMax"
              type="number"
              placeholder="Max Weight"
              onChange={onChangeForm}
              value={form.weightMax}
            ></input>
            {form.weightMax && error.weight && (
              <span className={Style.err}>*{error.weight}</span>
            )}
          </div>
          <div className={Style.filas}>
            <label className={Style.label2}>Life span (years) </label>
            <input
              name="life_spanMin"
              type="number"
              placeholder="Min span"
              onChange={onChangeForm}
              value={form.life_spanMin}
            ></input>
            <label> - </label>
            <input
              name="life_spanMax"
              type="number"
              placeholder="Max span"
              onChange={onChangeForm}
              value={form.life_spanMax}
            ></input>
            {form.life_spanMax && error.life_span && (
              <span className={Style.err}>*{error.life_span}</span>
            )}
          </div>

          <div>
            <label className={Style.label2}>Temperaments</label>
            <select
              name="Temperaments"
              defaultValue="-----"
              onChange={onChangetem}
            >
              <option disabled>-----</option>
              {temperaments.length
                ? temperaments.map((e) => (
                    <option key={e.name} value={e.name}>
                      {e.name}
                    </option>
                  ))
                : null}
            </select>
            <div className={Style.conttem} >
            {form.temperaments?.map((e) => (
              <input type='button' onClick={onChangetem} className={Style.labtem}  value={e} key={e}></input>
            ))}
            </div>
          </div>
          <div>
            {error.name || error.height || error.weight || error.life_span ? (
              <label className={Style.err}>{error.name || error.height || error.life_span} </label>
            ) : (
              <input type={"submit"} value="Create"></input>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
