export interface CreditProductType {
  name: string
  amount: number
  logo: string
}

export interface DataType {
  filter: {
    amount: number | null
  }
  products: CreditProductType[]
}
