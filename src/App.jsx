import { products as initialProducts } from './mocks/products.json'
import { Products } from './components/Products'
import { useState } from 'react'
import { Header } from './components/Header'
import { UseFilters } from './hooks/UseFilters'

function App() {
  const [products] = useState(initialProducts)
  const { filterProducts } = UseFilters()
  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header />
      <Products products={filteredProducts} />
    </>
  )
}

export default App
