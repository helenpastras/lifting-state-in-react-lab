
const ingredientIcons = {
  'Kaiser Bun': '🍞',
  'Sesame Bun': '🍞',
  'Gluten Free Bun': '🍞',
  'Lettuce Wrap': '🥬',
  'Beef Patty': '🍖',
  'Soy Patty': '🌱',
  'Black Bean Patty': '🫘',
  'Chicken Patty': '🍗',
  'Lettuce': '🥬',
  'Tomato': '🍅',
  'Bacon': '🥓',
  'Onion': '🧅',
  'Cheddar Cheese': '🧀',
  'Swiss Cheese': '🧀',
};

const Ingredient = ({ ingredient, onClick, buttonLabel }) => {
  const icon = ingredientIcons[ingredient.name] || '';

  const isLightColor = ['lightyellow', '#FDE18B', '#F1E1A8', 'burlywood', 'sandybrown', 'peru'].includes(ingredient.color);
  const textColor = isLightColor ? 'black' : 'white';

  return (
    <li style={{ backgroundColor: ingredient.color, color: textColor }}>
      {icon} {ingredient.name}
      {ingredient.count > 1 && <span style={{ marginLeft: '8px' }}>x{ingredient.count}</span>}
      <button onClick={onClick}>{buttonLabel}</button>
    </li>
  );
};

export default Ingredient;