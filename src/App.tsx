import React, { useState, useEffect } from 'react';
import CreditProduct from './components/CreditProduct/CreditProduct';
import Filter from './components/Filter/Filter';
import Sort from './components/Sort/Sort';
import { CreditProductType, DataType } from './types';
import mockData from '../public/mock.json';

const App: React.FC = () => {
  const data: DataType = mockData;
  const [products, setProducts] = useState<CreditProductType[]>(data.products);
  const [filteredProducts, setFilteredProducts] = useState<CreditProductType[]>(data.products); // Установка изначальных данных
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  useEffect(() => {
    // Загрузка сохраненных результатов из локального хранилища при монтировании компонента
    const savedProducts = localStorage.getItem('savedProducts');
    if (savedProducts) {
      setFilteredProducts(JSON.parse(savedProducts));
    }
  }, []);

  const handleFilterChange = (amount: number) => {
    const filtered = products.filter(product => product.amount >= amount);
    setFilteredProducts(filtered);
    // Сохранение результатов в локальное хранилище
    localStorage.setItem('savedProducts', JSON.stringify(filtered));
  };

  const handleSortChange = (direction: 'asc' | 'desc') => {
    setSortDirection(direction);
  };

  useEffect(() => {
    const sortedProducts = [...filteredProducts].sort((a, b) => {
      return sortDirection === 'asc' ? a.amount - b.amount : b.amount - a.amount;
    });
    setFilteredProducts(sortedProducts);
  }, [sortDirection]);

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
  );
};

export default App;
