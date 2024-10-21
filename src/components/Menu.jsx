import React from 'react';

const Menu = ({ categories, onCategorySelect }) => {
  return (
    <div>
      <h2>Categorías</h2>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '20px' }}>
        {categories.map(category => (
          <li key={category}>
            {/* Al seleccionar una cetegoría se llama a onCategorySelect */}
            <button className='btn primary' onClick={() => onCategorySelect(category)}>{category}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
