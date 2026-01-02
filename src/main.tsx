import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import AppLayout from "./layout/layout.tsx";
import { CartProvider } from "./context/cartContext";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<CartProvider>
			<AppLayout>
				<App />
			</AppLayout>
		</CartProvider>
	</StrictMode>
);
