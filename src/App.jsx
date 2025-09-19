// src/App.jsx

import { useState } from 'react';
import './App.css';
import BurgerStack from './components/BurgerStack/BurgerStack';
import IngredientList from './components/IngredientList/IngredientList';

const App = () => {

  const [stack, setStack] = useState([]);

  const addToBurger = (ingredient) => {
    setStack(prevStack => [...prevStack, ingredient]);
  };

  const removeFromBurger = (index) => {
    setStack(prevStack => prevStack.filter((_, i) => i !== index));


  };

  const availableIngredients = [
    { name: 'Kaiser Bun', color: 'saddlebrown' },
    { name: 'Sesame Bun', color: 'sandybrown' },
    { name: 'Gluten Free Bun', color: 'peru' },
    { name: 'Lettuce Wrap', color: 'olivedrab' },
    { name: 'Beef Patty', color: '#3F250B' },
    { name: 'Soy Patty', color: '#3F250B' },
    { name: 'Black Bean Patty', color: '#3F250B' },
    { name: 'Chicken Patty', color: 'burlywood' },
    { name: 'Lettuce', color: 'lawngreen' },
    { name: 'Tomato', color: 'tomato' },
    { name: 'Bacon', color: 'maroon' },
    { name: 'Onion', color: 'lightyellow' },
    { name: 'Cheddar Cheese', color: '#FDE18B' },
    { name: 'Swiss Cheese', color: '#F1E1A8' },
  ];



  return (
  <main>
  <h1>Burger Stacker</h1>
  <section className="burgerLayout">
    <div className="column">
      <h2>Available Ingredients for Burgers</h2>
      <IngredientList
        ingredients={availableIngredients}
        addToBurger={addToBurger}
        />
    </div>
    <div className="column">
      <h2>Selected Ingredients for Burgers</h2>
      <BurgerStack
        stack={stack}
        removeFromBurger={removeFromBurger}
        />
    </div>
  </section>
</main>
  );
};

export default App;
