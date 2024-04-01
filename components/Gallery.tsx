// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {IGallery} from "@/types/components";
import fadeInUp, {initial, stagger} from "@/animations/animations";

// Styling
import styles from "../styles/components/Gallery.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";
import Pagination from "./Elements/Pagination";

const Gallery: FC<IGallery> = ({
	title,
	gallery,
	paragraph,
	itemsDisplayedPerPage,
}) => {
	return (
		<>
			<div
				className={
					styles.gallery +
					` ${
						title && paragraph ? "pt-4" : "pt-16"
					} p-4 bg-white md:container mx-auto`
				}
			>
				<motion.div
					initial={initial}
					variants={stagger}
					whileInView="animate"
					viewport={{once: true}}
					className={
						title
							? "max-w-2xl mx-auto mb-16 text-center flex flex-col items-center lg:max-w-5xl"
							: "hidden"
					}
				>
					<motion.h3
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="my-3 max-w-xl mx-auto xl:mx-0 uppercase text-black text-center font-semibold text-lg md:text-xl"
					>
						{title}
					</motion.h3>
					<Paragraph
						content={paragraph}
						tailwindStyling="max-w-3xl mx-auto text-black text-base"
					/>
				</motion.div>
				<Pagination
					contentType="Gallery"
					contentArray={gallery}
					numberOfItemsRenderedPerPage={12}
					tailwindStyling={`${
						gallery?.length > 0
							? `grid gap-4 grid-cols-2 ${
									parseInt(itemsDisplayedPerPage) === 12
										? "lg:grid-cols-4"
										: "lg:grid-cols-4 xl:grid-cols-5"
							  }`
							: "flex items-center justify-center"
					}`}
				/>
			</div>
		</>
	);
};

export default Gallery;
