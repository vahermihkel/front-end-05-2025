export type Product = {
  id: number
  title: string
  price: number
  description: string
  category: string
  active: boolean
  image: string
  rating: Rating
}

export type Rating = {
  rate: number
  count: number
}