import { Link } from "react-router-dom"
import logo from "./assets/logo.svg"
import axios from 'axios'
import { useEffect, useState } from "react"


function Food({food}){
  return(
    <div>
      <h2 id="name1">{food.title}</h2>
      <p>{food.price}</p> 
      <p>Spice Level: {food.spicy_level}</p>
    </div>

  )
}
function App() {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    axios.get(`https://www.jsonkeeper.com/b/MDXW`)
      .then(response => {
        setFoods(response.data)
      })
      .catch(error => {
        console.log('error', error)

      })
  },[])

  
  
  return (
    <div>
      <div className="container border border-dark " id="maincontainer">
        <div className="text-center mt-5">
          <h1>Menu</h1>
          <p>Lisco Come L'olio</p>
          <p> 348 E Main St, Lexington, KY</p>
          <p>Monday-Sunday: 4:30pm - 11pm</p>
        </div>
        <div className="text-center mt-5 p-1">
          <h1>Italian Cuisine</h1>
        </div>
        <hr></hr>
        <div className="mt-5">
          <h2 id="pastas">Pastas</h2>
          {foods.map(food => <Food food = {food}/>)}

  
        </div>
      </div>
   </div>
   
  )
}


export default App
