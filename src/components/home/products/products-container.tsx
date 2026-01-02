import { productsData } from "../../../constants/mock-data/products";
import Product from "../products/products";

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
