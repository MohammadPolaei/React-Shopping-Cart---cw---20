import type { ProductCartType } from "../../../types/types";

type CartItemProps = {
	item: ProductCartType;
	onIncrement: () => void;
	onDecrement: () => void;
	onRemove: () => void;
};

function CartItem({ item, onIncrement, onDecrement, onRemove }: CartItemProps) {
	return (
		<div className="flex items-center justify-between p-4 border-b border-[#fff8] text-[#fff8] bg-[#191c26] rounded mb-2">
			<div className="flex items-center gap-4 flex-1">
				<img
					src={item.image}
					alt={item.title}
					className="w-16 h-16 object-cover rounded"
				/>
				<div className="flex-1">
					<h3 className="font-semibold text-white">{item.title}</h3>
					<p className="text-amber-500">${item.price}</p>
				</div>
			</div>
			<div className="flex items-center gap-4">
				<div className="flex items-center gap-2">
					<button
						onClick={onDecrement}
						className="bg-[#616675] w-8 h-8 flex items-center justify-center text-white hover:bg-[#717885] transition-colors rounded"
					>
						-
					</button>
					<span className="text-white w-8 text-center">{item.quantity}</span>
					<button
						onClick={onIncrement}
						className="bg-[#616675] w-8 h-8 flex items-center justify-center text-white hover:bg-[#717885] transition-colors rounded"
					>
						+
					</button>
				</div>
				<p className="text-amber-500 w-20 text-right">
					${(item.price * item.quantity).toFixed(2)}
				</p>
				<button
					onClick={onRemove}
					className="bg-red-600 w-8 h-8 flex items-center justify-center text-white hover:bg-red-700 transition-colors rounded"
				>
					×
				</button>
			</div>
		</div>
	);
}

export default CartItem;

