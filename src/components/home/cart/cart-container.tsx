import { useCart } from "../../../context/cartContext";
import { CartActionType } from "../../../context/cartReducer";
import CartItem from "./cart";

function CartContainer() {
	const { state, dispatch } = useCart();

	const totalItems = state.cartItems.reduce(
		(sum, item) => sum + item.quantity,
		0
	);
	const totalPrice = state.cartItems.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0
	);

	return (
		<div className="fixed right-0 top-17 w-1/2 bg-[#111319] shadow-2xl pb-20 px-5 h-full flex flex-col justify-between">
			<div className="bg-[#191c26] text-center p-10">Cart({totalItems})</div>
			<div className="flex-1 overflow-y-auto">
				{state.cartItems.length === 0 ? (
					<div className="text-[#fff8] text-center py-10">cart is empty</div>
				) : (
					<div className="space-y-4">
						{state.cartItems.map((item) => (
							<CartItem
								key={item.id}
								item={item}
								onIncrement={() =>
									dispatch({
										type: CartActionType.INCREAMENT,
										payload: { id: item.id },
									})
								}
								onDecrement={() =>
									dispatch({
										type: CartActionType.DECREAMENT,
										payload: { id: item.id },
									})
								}
								onRemove={() =>
									dispatch({
										type: CartActionType.REMOVE_ITEM,
										payload: { id: item.id },
									})
								}
							/>
						))}
					</div>
				)}
			</div>
			<div className="flex flex-row justify-between w-full items-center">
				<p className="text-[#fff8]">Total : ${totalPrice.toFixed(2)}</p>
				<button className="bg-[#616675] p-5 text-black hover:bg-[#717885] transition-colors">
					Checkout
				</button>
			</div>
		</div>
	);
}

export default CartContainer;
