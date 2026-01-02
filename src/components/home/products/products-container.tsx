import { productsData } from "../../../constants/mock-data/products";
import Product from "../products/products";

export type productType = {
	id: number;
	image: string;
	title: string;
	price: number;
};

function ProductsContainer() {
	return (
		<div className="grid grid-cols-4 gap-3 w-full py-25">
			{productsData.map((item) => {
				return <Product key={item.id} product={item} />;
			})}
		</div>
	);
}

export default ProductsContainer;
