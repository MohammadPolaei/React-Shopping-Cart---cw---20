export interface ProductType {
	id: number;
	image: string;
	title: string;
	price: number;
}

export interface ProductCartType extends ProductType {
	quantity: number;
}

export type CartState = {
	cartItems: ProductCartType[];
};
