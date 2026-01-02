import type { productType } from "./products-container";

function Product({ product }: { product: productType }) {
	return (
		<div className="border-2 border-[#fff8] p-10 w-full text-[#fff8] flex flex-col items-center justify-between gap-3">
			<img src={product.image} />
			<p className="text-amber-500">★★★★★</p>
			<h2>{product.title}</h2>
			<p>{product.price}</p>
			<button className="bg-[#191c26] text-center w-full p-3 text-[#fff8]">
				Add To Cart
			</button>
		</div>
	);
}

export default Product;
