import React, { useState, useEffect } from 'react'
import CreditProduct from './components/CreditProduct/CreditProduct'
import Filter from './components/Filter/Filter'
import Sort from './components/Sort/Sort'
import { CreditProductType, DataType } from './types'
import mockData from '../public/mock.json'

const App: React.FC = () => {
  const data: DataType = mockData
  const [products] = useState<CreditProductType[]>(data.products)
  const [filteredProducts, setFilteredProducts] = useState<CreditProductType[]>(data.products)
  const [filterAmount, setFilterAmount] = useState<number>(0)
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')

  useEffect(() => {
    const savedProducts = localStorage.getItem('savedProducts')
    if (savedProducts) {
      setFilteredProducts(JSON.parse(savedProducts))
    }
  }, [])

  const handleFilterChange = (amount: number) => {
    setFilterAmount(amount)
  }

  const handleSortChange = (direction: 'asc' | 'desc') => {
    setSortDirection(direction)
  }

  useEffect(() => {
    let filtered = products.filter(product => product.amount >= filterAmount)
    const sorted = filtered.sort((a, b) => {
      return sortDirection === 'asc' ? a.amount - b.amount : b.amount - a.amount
    })
    setFilteredProducts(sorted)
  }, [filterAmount, sortDirection, products])

  useEffect(() => {
    localStorage.setItem('savedProducts', JSON.stringify(filteredProducts))
  }, [filteredProducts])

  return (
    <div className="wrapper">
      <main>
        <Filter onFilterChange={handleFilterChange} />
        <Sort onSortChange={handleSortChange} />
        {filteredProducts.map((product) => (
          <CreditProduct key={product.name} {...product} />
        ))}
      </main>
    </div>
  )
}

export default App
