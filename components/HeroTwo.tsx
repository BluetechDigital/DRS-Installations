// Imports
import {fadeIn, initialTwo} from "../animations/animations";
import {FC} from "react";
import {motion} from "framer-motion";
import {IHeroTwo} from "@/types/components/index";

// Styling
import styles from "../styles/components/Hero.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";

const HeroTwo: FC<IHeroTwo> = ({title, paragraph, backgroundImage}) => {
	return (
		<>
			<div className={styles.heroTwo + ` relative z-50 w-full p-4 pt-[90px]`}>
				<div
					className="pt-24 pb-20 w-full h-[35vh] flex flex-col items-center lg:items-baseline justify-center relative bg-center bg-no-repeat bg-cover"
					style={{
						backgroundImage: `linear-gradient(
								0deg,
								rgb(0, 0, 0, 0.20),
								rgba(0, 0, 0, 0.20),
								rgba(0, 0, 0, 0.20)
							),url("${backgroundImage?.sourceUrl}")`,
					}}
				>
					<div className="max-w-sm lg:max-w-2xl mx-auto lg:mx-0 relative z-10 flex flex-col items-center lg:items-start px-8 sm:px-24">
						<motion.h1
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className="text-center lg:text-left uppercase text-lg md:text-xl xl:text-3xl text-white font-semibold xl:leading-[2.5rem]"
						>
							{title}
						</motion.h1>
						<Paragraph
							content={paragraph}
							tailwindStyling="py-2 text-white leading-[1.75rem] text-base text-center lg:text-left"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default HeroTwo;
