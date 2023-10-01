import './Filters.css'
import { UseFilters } from '../hooks/UseFilters'

export function Filters () {
  const {filters, setFilters} = UseFilters()

  const handleChangeMinPrice = (e) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: e.target.value
    }))
  }

  const handleChangeCategory = (e) => {
    setFilters(prevState => ({
      ...prevState,
      category: e.target.value
    }))
  }

  return (
    <section className="filters">
      <div>
        <label htmlFor="price">Price</label>
        <input type="range" id="price" min='0' max='1000' onChange={handleChangeMinPrice} value={filters.minPrice} />
        <span>{filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor="category">Category</label>
        <select id="category" onChange={handleChangeCategory} >
          <option value="all">All</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Smartphones</option>
        </select>
      </div>
    </section>
  )
}