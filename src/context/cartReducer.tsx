import type { CartState, ProductType } from "../types/types";

export enum CartActionType {
	ADD_ITEM = "ADD_ITEM",
	REMOVE_ITEM = "REMOVE_ITEM",
	INCREAMENT = "INCREAMENT",
	DECREAMENT = "DECREAMENT",
}

export type CartAction =
	| {
			type: CartActionType.ADD_ITEM;
			payload: ProductType;
	  }
	| {
			type: CartActionType.REMOVE_ITEM;
			payload: { id: number };
	  }
	| {
			type: CartActionType.INCREAMENT;
			payload: { id: number };
	  }
	| {
			type: CartActionType.DECREAMENT;
			payload: { id: number };
	  };

export function cartReducer(state: CartState, action: CartAction): CartState {
	switch (action.type) {
		case CartActionType.ADD_ITEM: {
			const exist = state.cartItems.find(
				(item) => item.id === action.payload.id
			);

			if (exist) {
				return {
					cartItems: state.cartItems.map((item) =>
						item.id === action.payload.id
							? { ...item, quantity: item.quantity + 1 }
							: item
					),
				};
			}

			return {
				cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
			};
		}

		case CartActionType.REMOVE_ITEM: {
			return {
				cartItems: state.cartItems.filter(
					(item) => item.id !== action.payload.id
				),
			};
		}

		case CartActionType.INCREAMENT: {
			return {
				cartItems: state.cartItems.map((item) =>
					item.id === action.payload.id
						? { ...item, quantity: item.quantity + 1 }
						: item
				),
			};
		}

		case CartActionType.DECREAMENT: {
			return {
				cartItems: state.cartItems
					.map((item) =>
						item.id === action.payload.id
							? { ...item, quantity: Math.max(0, item.quantity - 1) }
							: item
					)
					.filter((item) => item.quantity > 0),
			};
		}

		default:
			return state;
	}
}
