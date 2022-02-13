const axios = require ('axios');
const {YOUR_API_KEY} = process.env;
const {Dogs , Temperaments}= require ('../db');


const get_api= async ()=>{
try{
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
}catch (err){
   console.log (err)
}
   const get_apid= async (id)=> {
      try{
         req = await axios.get (`https://api.thedogapi.com/v1/breeds/search?q=${id}`)

      }catch (err){
         console.log (err)
      }
   }


}


const get_bd = async ()=>{

   let dogs_db= await Dogs.findAll ({
      include: {
         model: Temperaments,
      }
      
   })

   dogs_db= JSON.parse (JSON.stringify(dogs_db)) 
   let temperaments = dogs_db.map (e=> {
      let obj= {...e, temperaments: e.Temperaments.map (e=>e.name).join()}
      return obj
   })
   return temperaments
}

module.exports = {
get_api,
get_bd,
}