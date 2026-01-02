import { useState } from "react";
import CartContainer from "../../components/home/cart/cart-container";
import { useCart } from "../../context/cartContext";

function Header() {
	const [cartOpen, setCartOpen] = useState(false);
	const { state } = useCart();

	const totalItems = state.cartItems.reduce(
		(sum, item) => sum + item.quantity,
		0
	);

	function handleClick() {
		setCartOpen(!cartOpen);
	}

	return (
		<div className="bg-[#191c26] w-full flex flex-row justify-between items-center text-[#fff8] p-4 fixed z-50">
			<h1>React Shopping Cart</h1>
			<button
				className="text-3xl text-white cursor-pointer relative"
				onClick={handleClick}
			>
				🛒
				{totalItems > 0 && (
					<span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
						{totalItems}
					</span>
				)}
			</button>
			{cartOpen && <CartContainer />}
		</div>
	);
}

export default Header;
