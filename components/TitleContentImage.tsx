// Imports
import {
	initial,
	fadeInUp,
	slideInLeftInitial,
	slideInRightFinish,
	slideInRightInitial,
} from "../animations/animations";
import {FC} from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import {ITitleContentImage} from "@/types/components";

// Components
import TitleContentImageCard from "./Cards/TitleContentImageCard";

const TitleContentImage: FC<ITitleContentImage> = ({
	title,
	image,
	subtitle,
	textTitle,
	paragraph,
	buttonLink,
	bulletPoints,
	displayContentOption,
	displayBackgroundWave,
	displayBackgroundColor,
	displayWaveColorOptions,
}) => {
	let backgroundSVG;
	let backgroundColor;

	switch (displayBackgroundColor) {
		case "White":
			backgroundColor = "bg-white";
			break;
		case "Grey":
			backgroundColor = "bg-lightGreyTwo";
			break;
		default:
			backgroundColor = "bg-white";
			break;
	}

	switch (displayWaveColorOptions) {
		case "WhiteToWhite":
			backgroundSVG = "background-white-blue-white-divider";
			break;
		case "WhiteToGrey":
			backgroundSVG = "background-white-blue-grey-divider";
			break;
		case "GreyToWhite":
			backgroundSVG = "background-grey-blue-white-divider";
			break;
		case "GreyToGrey":
			backgroundSVG = "background-grey-blue-grey-divider";
			break;
		default:
			backgroundSVG = "background-grey-blue-whites-divider";
			break;
	}

	return (
		<>
			<div
				className={`titleContentImage pt-12 pb-2 lg:pb-0 ${backgroundColor}`}
			>
				<div
					className={
						title ? "relative z-10 lg:container mx-auto block p-4" : "hidden"
					}
				>
					<motion.h4
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="text-center lg:text-left text-base text-primary-default"
					>
						{subtitle}
					</motion.h4>
					<motion.h3
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="my-2 lg:max-w-3xl leading-snug lg:leading-[3rem] uppercase font-tonnelier text-black text-center lg:text-left font-semibold text-lg sm:text-xl lg:text-6xl"
					>
						{title}
					</motion.h3>
				</div>
				<div
					className={`relative z-10 flex ${
						displayContentOption == "Right" ? "flex-col-reverse" : "flex-col"
					} gap-4 lg:gap-x-16 p-0 mx-auto items-center justify-center lg:flex-row`}
				>
					<motion.div
						viewport={{once: true}}
						initial={slideInLeftInitial}
						whileInView={slideInRightFinish}
						className={`${
							displayContentOption == "Right"
								? "bg-center bg-no-repeat bg-cover w-full lg:w-1/2 h-[350px] lg:h-[500px] lg:rounded-r-2xl"
								: "hidden"
						}`}
						style={{
							backgroundImage: `url(${image?.sourceUrl})`,
						}}
					/>

					{displayContentOption == "Left" ? (
						<>
							<motion.div
								viewport={{once: true}}
								initial={slideInLeftInitial}
								whileInView={slideInRightFinish}
								className={`${
									displayContentOption == "Left"
										? "lg:items-end"
										: "lg:items-start"
								} lg:w-1/2 h-full xl:pl-28 2xl:pl-48`}
							>
								<TitleContentImageCard
									title={title}
									subtitle={subtitle}
									textTitle={textTitle}
									paragraph={paragraph}
									buttonLink={buttonLink}
									bulletPoints={bulletPoints}
								/>
							</motion.div>
						</>
					) : (
						<>
							<motion.div
								viewport={{once: true}}
								initial={slideInRightInitial}
								whileInView={slideInRightFinish}
								className={`${
									displayContentOption == "Right"
										? "lg:items-end"
										: "lg:items-start"
								} lg:w-1/2 h-full xl:pr-28 2xl:pr-32`}
							>
								<TitleContentImageCard
									title={title}
									subtitle={subtitle}
									textTitle={textTitle}
									paragraph={paragraph}
									buttonLink={buttonLink}
									bulletPoints={bulletPoints}
								/>
							</motion.div>
						</>
					)}

					<motion.div
						viewport={{once: true}}
						initial={slideInRightInitial}
						whileInView={slideInRightFinish}
						className={`${
							displayContentOption == "Left"
								? "bg-center bg-no-repeat bg-cover w-full lg:w-1/2 h-[350px] lg:h-[500px] lg:rounded-l-2xl"
								: "hidden"
						}`}
						style={{
							backgroundImage: `url(${image?.sourceUrl})`,
						}}
					/>
				</div>
			</div>
			<Image
				width={550}
				height={550}
				alt="Background Wave Divider"
				src={`/svg/background/${backgroundSVG}.svg`}
				className={
					displayBackgroundWave
						? "w-full h-full mt-0 lg:mt-[-50px] object-contain object-center"
						: "hidden"
				}
			/>
		</>
	);
};

export default TitleContentImage;
