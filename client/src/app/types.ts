export interface Product {
	sku: number
	name: string
	description: string
	price: number
}

export interface ItemQuantity {
	product: Product
	quantity: number
}