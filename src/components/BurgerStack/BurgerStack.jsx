// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = ({ stack, removeFromBurger }) => (
  <ul>
    {stack.map((ingredient, index) => (
      <li
        key={index}
        style={{ backgroundColor: ingredient.color }}
      >
        {ingredient.name}
        <button onClick={() => removeFromBurger(index)}>X</button>
      </li>
    ))}
  </ul>
);

export default BurgerStack;
