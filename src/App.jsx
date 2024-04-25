import { Link } from "react-router-dom"
import logo from "./assets/logo.svg"
import axios from 'axios';
import { useEffect, useState } from "react";

// This function component represents a single food item. It takes a prop named 'food'.
function Food({ food }) {
  return (
    // It returns JSX containing the details of the food item.
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

// This function component represents the entire application.
function App() {
  // These useState hooks initialize state variables for foods and drinks, and their corresponding setter functions.
  const [foods, setFoods] = useState([]);
  // const [drinks, setDrinks] = useState([]);
  
  // This useEffect hook fetches data from an API endpoint when the component mounts.
  useEffect(() => {
    axios.get(`https://www.jsonkeeper.com/b/MDXW`)
      .then(response => {
        // It updates the foods state variable with the fetched data.
        setFoods(response.data);
        // It updates the drinks state variable with the fetched data.
        
      })
      .catch(error => {
        console.log('error', error);
      });
  }, []);

  // This line filters out only Italian cuisine from the foods state variable.
  const italianFoods = foods.filter(food => food.cuisine_type === "Italian");
  // This line filters out only appetizers from the foods state variable.
  const apps = foods.filter(food => food.category === "Appetizer");

  // The component renders JSX containing various elements.
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
          {/* Header section for Italian cuisine. */}
          <h1>Italian Cuisine</h1>
        </div>
        {/* Horizontal line separator. */}
        <hr></hr>
        <div className="mt-5">
          {/* Section for displaying appetizers. */}
          <h2 id="pastas">Appetizers</h2>
          {/* Mapping through apps array and rendering Food component for each item. */}
          {apps.map(food => <Food key={food.id} food={food} />)}
          {/* Section for displaying entrees. */}
          <h2 id="pastas">Entrees</h2>
          {/* Mapping through italianFoods array and rendering Food component for each item. */}
          {italianFoods.map(food => <Food key={food.id} food={food} />)}
        </div>
      </div>
    </div>
  );
}

// Exporting the App component as the default export of this module.
export default App;
