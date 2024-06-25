import React from 'react'
import { TextField } from '@mui/material'
import './/Filter.css';


interface FilterProps {
  onFilterChange: (amount: number) => void
}

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange(Number(event.target.value))
  }

  return (
    <div className="wrapper-credit-filter">
    <TextField className="credit-filter"
      label="Сумма кредита"
      variant="outlined"
      type="number"
      onChange={handleChange}
      sx={{ width: '300px' }}
    />
    </div>
  )
}

export default Filter
