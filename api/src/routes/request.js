const axios = require ('axios');
const e = require('express');
const {YOUR_API_KEY} = process.env;
const {Dogs , Temperaments}= require ('../db');


const get_api= async ()=>{

   const req= await axios.get (`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`)

   const inf= await req.data.map (d=>{
      return {
         id: d.id,
         name: d.name,
         weight: d.weight.metric,
         height: d.height.metric,
         life_span: d.life_span,
         temperaments: d.temperament,
         image: d.image.url, 
      }
   })
   return inf
}


const get_bd = async ()=>{

   return await Dogs.findAll ({
      include: [Temperaments]
   }) 

}

module.exports = {
get_api,
get_bd,
}