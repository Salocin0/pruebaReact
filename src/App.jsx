// src/App.jsx
import React, { useEffect, useState } from 'react';
import Menu from './components/Menu';
import ProductCard from './components/ProductCard';
import ProductCardWithSale from './components/ProductCardWithSale';

const App = () => {
  const [categories, setCategories] = useState([]);  
  const [products, setProducts] = useState([]);      

  // Carga categorías
  useEffect(() => {
    const fetchCategories = async () => {
      console.log("cargando categorías");
      const response = await fetch('https://fakestoreapi.com/products/categories');
      const data = await response.json();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  // Carga los productos de la categoría seleccionada
  const handleCategorySelect = async (category) => {
    console.log("cargarndo productos");
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    const data = await response.json();
    setProducts(data);
  };

  return (
    <div>
      <h1>Tienda de Productos FakeStore</h1>
      <Menu categories={categories} onCategorySelect={handleCategorySelect} />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {products.map(product => (
          //<ProductCard key={product.id} product={product} />
          <ProductCardWithSale key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default App;
