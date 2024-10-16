import { useEffect, useState } from 'react'

import './App.css'
import Producto from './Producto'

function App() {
  const [products, setProducts] = useState([])

  useEffect(()=>{
    async function fetchBack() {
      const response = await fetch("https://fakestoreapi.com/products/")
      const data= await response.json()
      setProducts(data)
    }
    fetchBack()
  },[])

  return (
    <div>
      <h2>Productos</h2>
      {products.map((product)=>(<Producto key={product.id} product={product}/>))}
    </div>
  )
}

export default App
