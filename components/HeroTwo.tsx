// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {IHeroTwo} from "@/types/components/index";
import {fadeIn, initialTwo} from "../animations/animations";

// Components
import Paragraph from "./Elements/Paragraph";

const HeroTwo: FC<IHeroTwo> = ({title, paragraph, backgroundImage}) => {
	return (
		<>
			<div className="relative z-50 w-full p-0 pt-[65px]">
				<div
					className="pt-24 pb-20 w-full h-[35vh] flex flex-col items-center lg:items-baseline justify-center relative bg-center bg-no-repeat bg-cover"
					style={{
						backgroundImage: `linear-gradient(
								0deg,
								rgb(0, 0, 0, 0.20),
								rgba(0, 0, 0, 0.20),
								rgba(0, 0, 0, 0.20)
							),url("${backgroundImage?.sourceUrl}")`,
						clipPath: `ellipse(100% 55% at 50% 45%)`,
					}}
				>
					<div className="max-w-lg lg:max-w-2xl mx-auto relative z-10 flex flex-col items-center px-8 sm:px-24">
						<motion.h1
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className="text-center uppercase text-lg md:text-xl xl:text-3xl text-white font-semibold xl:leading-[2.5rem]"
						>
							{title}
						</motion.h1>
						<Paragraph
							content={paragraph}
							tailwindStyling="py-2 text-white leading-[1.3rem] text-base text-center"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default HeroTwo;
