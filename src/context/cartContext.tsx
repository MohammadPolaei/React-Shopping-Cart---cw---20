/* eslint-disable react-refresh/only-export-components */
import type { Dispatch } from "react";
import { createContext, useContext, useReducer, type ReactNode } from "react";
import type { CartState } from "../types/types";
import { cartReducer, type CartAction } from "./cartReducer";

type CartContextType = {
	state: CartState;
	dispatch: Dispatch<CartAction>;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

const initialState: CartState = {
	cartItems: [],
};

export function CartProvider({ children }: { children: ReactNode }) {
	const [state, dispatch] = useReducer(cartReducer, initialState);

	return (
		<CartContext.Provider
			value={{
				state,
				dispatch,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}

export function useCart() {
	const context = useContext(CartContext);
	if (context === undefined) {
		throw new Error("useCart must be used within a CartProvider");
	}
	return context;
}
