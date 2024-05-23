import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useEffect, useState } from 'react';

// This function represents a single food item option for the dropdown. It takes a prop named 'food'.
function FoodOption({ food }) {
  return (
    <option value={food.id}>{food.name} - ${food.price} - Spice Level: {food.spice_level}</option>
  );
}

// This function represents the entire menu page.
function ApiCall({ setFoods }) {
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/menuitems/`)
      .then(response => {
        setFoods(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log('error', error);
      });
  }, [setFoods]);

  return null;
}

function ContactPage2() {
  const [foods, setFoods] = useState([]);
  
  const apps = foods.filter(food => food.category === 'app');
  const entrees = foods.filter(food => food.category === 'entree');

  return (
    <div className="container border border-dark d-flex justify-content-center" id="maincontainer">
      <ApiCall setFoods={setFoods} />
      
      <div className="text-center">
        <div>
          <h1>Place your Order</h1>
        </div>
        <Form>
          <Form.Group className="mb-1" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-1" controlId="formBasicPhoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" placeholder="Your Phone Number" />
          </Form.Group>

          <Form.Group className="mb-1" controlId="formAppSelect">
            <Form.Label>Appetizers</Form.Label>
            <Form.Control as="select">
              <option>Select an Appetizer</option>
              {apps.map(food => <FoodOption key={food.id} food={food} />)}
            </Form.Control>
          </Form.Group>

          <Form.Group className="mb-1" controlId="formEntreeSelect">
            <Form.Label>Entrees</Form.Label>
            <Form.Control as="select">
              <option>Select an Entree</option>
              {entrees.map(food => <FoodOption key={food.id} food={food} />)}
            </Form.Control>
          </Form.Group>
          <Button variant="dark" type="submit">
            Place Order
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default ContactPage2;
