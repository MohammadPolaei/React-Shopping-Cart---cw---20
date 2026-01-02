import { useState } from "react";
import CartContainer from "../../components/home/cart/cart-container";

function Header() {
	const [cartOpen, setCartOpen] = useState(false);
	function handleClick() {
		setCartOpen(!cartOpen);
	}
	return (
		<div className="bg-[#191c26] w-full flex flex-row justify-between items-center text-[#fff8] p-4 fixed">
			<h1>React Shopping Cart</h1>
			<button
				className="text-3xl text-white cursor-pointer"
				onClick={handleClick}
			>
				🛒
			</button>
			{cartOpen && <CartContainer />}
		</div>
	);
}

export default Header;
