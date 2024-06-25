import React, { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';

interface SortProps {
  onSortChange: (direction: 'asc' | 'desc') => void;
}

const Sort: React.FC<SortProps> = ({ onSortChange }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const handleSortChange = (direction: 'asc' | 'desc') => {
    onSortChange(direction);
    handleClose();
  };

  return (
    <div className='sort-container'>
      <Button
        aria-controls="sort-menu"
        aria-haspopup="true"
        onClick={handleClick}
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
    </div>
  );
};

export default Sort;
