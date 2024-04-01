// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {ITitleParagraph} from "@/types/components";
import {fadeInUp, initial} from "../animations/animations";

// Components
import Paragraph from "./Elements/Paragraph";

const TitleParagraph: FC<ITitleParagraph> = ({
	title,
	paragraph,
	displayParagraph,
}) => {
	return (
		<div className="bg-white container p-0 mx-auto flex flex-col px-4">
			<motion.div
				initial={initial}
				whileInView={fadeInUp}
				viewport={{once: true}}
				className="py-10 px-4"
			>
				<motion.h3
					initial={initial}
					whileInView={fadeInUp}
					viewport={{once: true}}
					className={
						title
							? "my-3 max-w-xl mx-auto uppercase text-black text-center font-semibold text-lg md:text-xl"
							: "hidden"
					}
				>
					{title}
				</motion.h3>
				<Paragraph
					content={paragraph}
					tailwindStyling={
						paragraph
							? `mb-10 mx-auto text-black leading-[1.75rem] text-base text-center ${
									displayParagraph
										? "lg:text-center lg:max-w-3xl"
										: "lg:text-left lg:max-w-6xl"
							  }`
							: "hidden"
					}
				/>
			</motion.div>
		</div>
	);
};

export default TitleParagraph;
