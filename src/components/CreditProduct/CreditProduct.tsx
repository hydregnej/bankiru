import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { CreditProductType } from '../../types';
import './CreditProduct.css';

const CreditProduct: React.FC<CreditProductType> = ({ name, amount, logo }) => {
  return (
    <Card className="credit-product-card">
      <CardContent className="product-container">
        <div className="product-info">
          <img src={logo} alt={`${name} logo`} className="product-logo" />
          <Typography variant="h5" className="product-name">{name}</Typography>
        </div>
        <div className="product-info-amount">
          <Typography color="textSecondary" className="product-amount-name">Сумма</Typography>
          <Typography className="product-amount">{amount} ₽</Typography>
        </div>
      </CardContent>
    </Card>
  );
}

export default CreditProduct;
