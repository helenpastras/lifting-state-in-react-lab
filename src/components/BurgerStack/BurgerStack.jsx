// src/components/BurgerStack/BurgerStack.jsx
import Ingredient from "../Ingredient";

const BurgerStack = ({ stack, removeFromBurger }) => {
  return (
    <ul>
      {stack.length === 0 ? (
        <p>No Ingredients. Start adding to build your burger!</p>
      ) : (
        stack.map((ingredient, index) => (
          <Ingredient
            key={index}
            ingredient={ingredient}
            onClick={() => removeFromBurger(index)}
            buttonLabel="X"
          />
        ))
      )}
    </ul>
  );
};


export default BurgerStack;
