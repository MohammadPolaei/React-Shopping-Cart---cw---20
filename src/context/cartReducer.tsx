import type { CartState, ProductType } from "../types/types";

export enum CartActionType {
	ADD_ITEM = "ADD_ITEM",
	REMOVE_ITEM = "REMOVE_ITEM",
	INCREAMENT = "INCREAMENT",
	DECREAMENT = "DECREAMENT",
}

type CartAction =
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

function cartReducer(state: CartState, action: CartAction) {
	switch (action.type) {
		case CartActionType.ADD_ITEM:
			const exist = state.cartItems.find(
				(item) => item.id === action.payload.id
			);
			return;
		case CartActionType.REMOVE_ITEM:
		case CartActionType.INCREAMENT:
		case CartActionType.DECREAMENT:

		default:
			return state;
	}
}
