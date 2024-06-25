import React, { useState } from 'react'
import { Button, Menu, MenuItem, Box } from '@mui/material'
import './Sort.css'

interface SortProps {
  onSortChange: (direction: 'asc' | 'desc') => void
}

const Sort: React.FC<SortProps> = ({ onSortChange }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  
  const handleClose = () => {
    setAnchorEl(null)
  }
  
  const handleSortChange = (direction: 'asc' | 'desc') => {
    onSortChange(direction)
    handleClose()
  }

  return (
    <Box className='sort-container'>
      <Button
        aria-controls="sort-menu"
        aria-haspopup="true"
        onClick={handleClick}
        variant="contained"
        color="primary"
      >
        Сортировать
      </Button>
      <Menu
        id="sort-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleSortChange('asc')}>Сортировать по возрастанию</MenuItem>
        <MenuItem onClick={() => handleSortChange('desc')}>Сортировать по убыванию</MenuItem>
      </Menu>
    </Box>
  )
}

export default Sort
