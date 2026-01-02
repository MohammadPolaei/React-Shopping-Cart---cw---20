import { useCart } from "../../../context/cartContext";
import { CartActionType } from "../../../context/cartReducer";
import type { ProductType } from "../../../types/types";

function Product({ product }: { product: ProductType }) {
	const { dispatch } = useCart();

	const handleAddToCart = () => {
		dispatch({ type: CartActionType.ADD_ITEM, payload: product });
	};

	return (
		<div className="border-2 border-[#fff8] p-10 w-full text-[#fff8] flex flex-col items-center justify-between gap-3">
			<img src={product.image} alt={product.title} />
			<p className="text-amber-500">★★★★★</p>
			<h2>{product.title}</h2>
			<p>${product.price}</p>
			<button
				onClick={handleAddToCart}
				className="bg-[#191c26] text-center w-full p-3 text-[#fff8] hover:bg-[#252938] transition-colors cursor-pointer"
			>
				Add To Cart
			</button>
		</div>
	);
}

export default Product;
