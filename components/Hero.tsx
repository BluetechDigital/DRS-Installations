// Imports
import {FC} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {IHero} from "@/types/components/index";
import {fadeIn, initialTwo} from "../animations/animations";

// Styling
import styles from "../styles/components/Hero.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";

const Hero: FC<IHero> = ({title, buttonLink, paragraph, backgroundImage}) => {
	return (
		<>
			<div className={styles.hero + " relative z-50 flex flex-col h-fit"}>
				<div className="lg:relative pt-[49px] lg:pt-[49px] flex flex-col lg:flex-row">
					<div className="w-full py-4">
						<div
							className="pt-24 pb-44 sm:pb-20 w-full h-[75vh] sm:h-[75vh] lg:h-[75vh] flex flex-col items-center lg:items-baseline justify-center relative bg-center bg-no-repeat bg-cover"
							style={{
								backgroundImage: `linear-gradient(
												0deg,
												rgb(0, 0, 0, 0.20),
												rgba(0, 0, 0, 0.20),
												rgba(0, 0, 0, 0.20)
											),url("${backgroundImage?.sourceUrl}")`,
								// clipPath: `ellipse(100% 55% at 50% 45%)`,
							}}
						>
							<div className="relative z-10 flex flex-col items-center lg:items-start gap-4 px-4 sm:px-8 lg:px-24">
								<div className="max-w-sm lg:max-w-xl mx-auto lg:mx-0 ">
									<motion.h1
										initial={initialTwo}
										whileInView={fadeIn}
										viewport={{once: true}}
										className="text-center lg:text-left uppercase text-medium sm:text-lg md:text-xl lg:text-3xl xl:text-5xl tracking-[0.10rem] text-white font-semibold xl:leading-[2.5rem]"
									>
										{title}
									</motion.h1>
									<Paragraph
										content={paragraph}
										tailwindStyling="py-2 text-white leading-[1.35rem] sm:leading-[1.75rem] text-base text-center lg:text-left"
									/>
								</div>
								<div className="flex flex-col md:flex-row gap-2 sm:gap-4 max-w-sm lg:max-w-4xl mx-auto lg:mx-0">
									<Link
										href={`${buttonLink?.url}`}
										target={buttonLink?.target}
										aria-label={`${buttonLink?.title}`}
										className={`hidden w-fit mx-auto lg:mx-0 py-4 px-6 cursor-pointer rounded-lg bg-primary-default hover:bg-primary-dark transition-all ease-in-out duration-500 font-semibold tracking-[0.10rem] uppercase text-lightGrey text-base text-center font-tonnelier ${
											buttonLink?.url ? "lg:block" : "lg:hidden"
										}`}
									>
										{buttonLink?.title}
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
