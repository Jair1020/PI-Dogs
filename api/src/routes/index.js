const { Router } = require('express');
const {get_api, get_bd} = require ('./request');
const { Temperaments, Dogs} = require ('../db')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get ('/', async (req , res)=>{
  
})

router.get ('/dogs', async (req , res)=>{
  const dogs_api= await get_api ();
  const dogs_bd = await get_bd ()
  const dogs = [...dogs_bd,...dogs_api];
  const {name}= req.query;
  if (name){
    const breed = dogs.filter (d=> d.name.toLowerCase().includes (name.toLowerCase()))
    return res.json (breed)
  }

  res.json (dogs)
})

router.get ('/dogs/:idRaza', async (req, res)=>{
  const {idRaza}= req.params;
  const dogs_api= await get_api ();
  const dogs_bd = await get_bd ()
  const dogs = [...dogs_api,...dogs_bd];
  const breed= dogs.find (d=>d.id == (idRaza))

  res.json (breed)
})

router.get ('/temperament' , async (req,res)=>{
  const dogs_api= await get_api ();
  const temperament_bd = await Temperaments.findAll ();
  console.log (temperament_bd)

  if (temperament_bd.length){
    return res.json (temperament_bd)
  }

  const temperament=  dogs_api.reduce ((acc,e)=>{
    if (e.temperaments){ 
    let tem=  e.temperaments.replace(/\s+/g, '').split (',')
    tem.forEach(element => {
      if (!acc.includes (element)) acc.push (element)
    })}
    return acc
    },[])
    const promiss_tem= temperament.map (e=>{
      return Temperaments.create ({
        name: e
      }) 
    })  
    Promise.all (promiss_tem)
    .then (resp => console.log ('temperament saved'))
    
    return res.json (temperament)

})

router.post ('/dog', async (req, res)=>{
  const {name, height, weight, life_span, temperaments, image } = req.body;
  const beer= await Dogs.create ({
    name,
    weight,
    height,
    life_span,
    image
  }) 
  temperaments?.map (async (e)=>{
    const temperament= await Temperaments.findOne ({
      where:{
        name: e
      }, 
    })
    temperament && beer.setTemperaments (temperament)
  })

  return res.json ('Successfully created')




})




module.exports = router;
