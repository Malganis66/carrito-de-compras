import { useContext } from "react"
import { FiltersContext } from '../context/Filters'

export function UseFilters () {
  const {filters, setFilters} = useContext(FiltersContext)

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === 'All' || product.category === filters.category)
      )
    })
  }
  return {filters, filterProducts, setFilters}
}