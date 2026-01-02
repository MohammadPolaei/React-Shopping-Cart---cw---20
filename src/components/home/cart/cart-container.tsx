function CartContainer() {
	return (
		<div className="fixed right-0 top-17 w-1/2 bg-[#111319] shadow-2xl pb-20 px-5 h-full flex flex-col justify-between">
			<div className="bg-[#191c26] text-center p-10">Cart(0)</div>
			<div>cart is empty</div>
			<div className="flex flex-row justify-between w-full items-center">
				<p>Total : $0</p>
				<button className="bg-[#616675] p-5 text-black">Checkout</button>
			</div>
		</div>
	);
}

export default CartContainer;
