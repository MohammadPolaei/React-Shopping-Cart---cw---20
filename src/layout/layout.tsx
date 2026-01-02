import type { ReactNode } from "react";
import Footer from "./footer/footer";
import Header from "./header/header";

type IProps = { children: ReactNode };

function AppLayout({ children }: IProps) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}
export default AppLayout;
