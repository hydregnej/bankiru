import React from 'react'
import { Card, CardContent, Typography, Box } from '@mui/material'
import { CreditProductType } from '../../types'
import './CreditProduct.css'

const CreditProduct: React.FC<CreditProductType> = ({ name, amount, logo }) => {
  return (
    <Card className="credit-product__card">
      <CardContent className="credit-product__container">
        <Box className="credit-product__info">
          <img src={logo} alt={`${name} logo`} className="credit-product__logo" />
          <Typography variant="h5" className="credit-product__name">{name}</Typography>
        </Box>
        <Box className="credit-product__info-amount">
          <Typography color="textSecondary" className="credit-product__amount-name">Сумма</Typography>
          <Typography className="credit-product__amount">{amount} ₽</Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default CreditProduct
