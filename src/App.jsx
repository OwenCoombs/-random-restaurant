import { Link } from "react-router-dom"
import logo from "./assets/logo.svg"
import axios from 'axios';
import { useEffect, useState } from "react";

// This function represents a single food item. It takes a prop named 'food'.
function Food({ food }) {
  return (
    
    <div>
      {/* This line displays the title of the food item. */}
      <h2 id="name1">{food.title}</h2>
      {/* This line displays the price of the food item. */}
      <p>{food.price}</p> 
      {/* This line displays the spice level of the food item. */}
      <p>Spice Level: {food.spicy_level}</p>
    </div>
  );
}

// This function represents the entire menu page.
function App() {
  // These useState hooks state variables for foods and drinks, and their corresponding functions.
  const [foods, setFoods] = useState([]);
  
  
  // This useEffect hook fetches data from an API when the function runs.
  useEffect(() => {
    axios.get(`https://raw.githubusercontent.com/bootcamp-students/random-restaurant-json/main/foodList.json`)
      .then(response => {
        // It updates the foods state variable with the fetched data.
        setFoods(response.data);
        
        
      })
      .catch(error => {
        console.log('error', error);
      });
  }, []);

  //filters out only Italian cuisine from the foods state variable.
  const italianFoods = foods.filter(food => food.cuisine_type === "Italian");
  //filters out only appetizers from the foods state variable.
  const apps = foods.filter(food => food.category === "Appetizer");

  // Menu page styling
  return (
    <div>
      <div className="container border border-dark" id="maincontainer">
        <div className="text-center mt-5">
          {/* Header section with restaurant information. */}
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
          {/* Section for displaying appetizers. */}
          <h2 id="pastas">Appetizers</h2>
          {/* Mapping through apps array and displaying Food component for each item. */}
          {apps.map(food => <Food key={food.id} food={food} />)}
          {/* Section for displaying entrees. */}
          <h2 id="pastas">Entrees</h2>
          {/* Mapping through italianFoods array and displaying Food component for each item. */}
          {italianFoods.map(food => <Food key={food.id} food={food} />)}
        </div>
      </div>
    </div>
  );
}


export default App;


// using the map() function to iterate over an array called apps. 
// Within the map() function, it's using an arrow function with a parameter 
// named food. For each element in the apps array, it's rendering a component 
// called <Food> with a key attribute set to food.id and a prop food set to the current element being iterated over.