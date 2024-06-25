import React, { useState } from 'react'
import { TextField } from '@mui/material'
import './Filter.css'

interface FilterProps {
  onFilterChange: (amount: number) => void
}

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [value, setValue] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const amount = event.target.value
    setValue(amount)
    debounceFilterChange(Number(amount))
  }

  const debounceFilterChange = debounce((amount: number) => {
    onFilterChange(amount)
  }, 300)

  return (
    <div className="credit-filter__wrapper">
      <TextField className="credit-filter__input"
        label="Сумма кредита"
        variant="outlined"
        type="number"
        value={value}
        onChange={handleChange}
        sx={{ width: '300px' }}
      />
    </div>
  )
}

// улучшение производительности, путём предотвращения чрезмерного количества вызовова функций
function debounce<T extends (...args: any[]) => void>(func: T, wait: number) {
  let timeout: ReturnType<typeof setTimeout>
  return function(this: ThisParameterType<T>, ...args: Parameters<T>) {
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(this, args), wait)
  }
}

export default Filter
