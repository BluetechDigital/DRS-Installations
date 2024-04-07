// Imports
import {FC} from "react";
import dynamic from "next/dynamic";

// Components
import Navbar from "../Global/Navbar";
import Footer from "../Global/Footer";
import MetaTag from "@/components/Meta/MetaTag";
import RenderFlexibleContent from "@/components/FlexibleContent/RenderFlexibleContent";

const Layout: FC = () => {
	return (
		<>
			<MetaTag />

			<Navbar />

			<RenderFlexibleContent />

			<Footer />
		</>
	);
};

export default Layout;
