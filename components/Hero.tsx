// Imports
import {
	fadeIn,
	initial,
	stagger,
	initialTwo,
	slideInRightFinish,
	slideInRightInitial,
} from "../animations/animations";
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {IHero} from "@/types/components/index";

// Styling
import styles from "../styles/components/Hero.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";
import RenderStars from "./Elements/RenderStars";

const Hero: FC<IHero> = ({
	title,
	paragraph,
	buttonLink,
	ctaParagraph,
	buttonLinkTwo,
	backgroundImage,
}) => {
	return (
		<>
			<div className={styles.hero + " hero relative z-50 flex flex-col h-fit"}>
				<div className="lg:relative pt-[65px] md:pt-[112px] lg:pt-[112px] flex flex-col lg:flex-row">
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="w-full h-screen sm:h-[75vh] flex flex-col items-center lg:items-baseline justify-center relative bg-center bg-no-repeat bg-cover"
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
						<div className="relative z-10 flex flex-col items-center lg:items-start gap-4 px-4 sm:px-8 lg:px-24">
							<motion.div
								initial={initial}
								variants={stagger}
								whileInView="animate"
								viewport={{once: true}}
								className="max-w-full lg:max-w-xl mx-auto lg:mx-0 "
							>
								<motion.h1
									initial={initialTwo}
									whileInView={fadeIn}
									viewport={{once: true}}
									className="text-center lg:text-left uppercase text-medium sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl text-white font-semibold leading-tight xl:leading-[2.5rem]"
								>
									{title}
								</motion.h1>
								<Paragraph
									content={paragraph}
									tailwindStyling="py-2 text-white leading-[1.5rem] md:leading-[1.75rem] text-base text-center lg:text-left"
								/>
								<motion.div
									initial={initial}
									variants={stagger}
									whileInView="animate"
									viewport={{once: true}}
									className="w-fit max-w-lg lg:max-w-full mx-auto lg:mx-0 py-3 px-4 rounded-2xl bg-lightGreyTwo/30 grid sm:grid-cols-2 md:grid-cols-3 items-center justify-center lg:justify-start gap-6"
								>
									<div className="flex items-center justify-center lg:justify-start gap-3">
										<Image
											className="my-auto lg:mx-0 rounded-full w-10 h-10 object-cover object-center"
											alt={`Facebook reviews logo`}
											src="/img/facebook-logo-blue-circle-large-white.webp"
											width={500}
											height={500}
										/>
										<div className="flex flex-col gap-1">
											<div className="flex items-center justify-start gap-1">
												<RenderStars rating={5} />
											</div>
											<h3 className="font-medium text-tiny font-openSauceSansRegular text-white">
												5.0 Rating
											</h3>
										</div>
									</div>
									<div className="flex items-center justify-center lg:justify-start gap-3">
										<Image
											className="bg-white my-auto lg:mx-0 rounded-full p-1 w-10 h-10 object-cover object-center"
											alt={`Google reviews logo`}
											src="/svg/google-tile-logo.svg"
											width={500}
											height={500}
										/>
										<div className="flex flex-col gap-1">
											<div className="flex items-center justify-start gap-1">
												<RenderStars rating={5} />
											</div>
											<h3 className="font-medium text-tiny font-openSauceSansRegular text-white">
												5.0 Rating
											</h3>
										</div>
									</div>
									<div className="flex items-center justify-center lg:justify-start gap-0 basis-1/2">
										<Image
											className="my-auto lg:mx-0 p-1 w-full h-10 object-cover object-center"
											alt={`Trustpilot reviews logo`}
											src="/svg/trustpilot-logo-white.svg"
											width={500}
											height={500}
										/>
									</div>
								</motion.div>
							</motion.div>
							<div className="flex flex-col md:flex-row gap-2 sm:gap-4 max-w-sm lg:max-w-4xl mx-auto lg:mx-0">
								<Link
									href={`${buttonLink?.url}`}
									target={buttonLink?.target}
									aria-label={`${buttonLink?.title}`}
									className={`w-fit mx-auto lg:mx-0 py-4 px-6 cursor-pointer rounded-full bg-primary-default hover:bg-primary-dark transition-all ease-in-out duration-500 font-semibold  uppercase text-lightGrey text-base text-center font-RethinkSansExtraBold`}
								>
									{buttonLink?.title}
								</Link>
							</div>
						</div>
						<motion.div
							viewport={{once: true}}
							initial={slideInRightInitial}
							whileInView={slideInRightFinish}
							className="ctaBanner w-full lg:w-fit lg:max-w-sm xl:max-w-xs py-2 px-4 lg:pb-10 xl:pb-16 lg:p-6 bg-accent-default text-left xl:text-center absolute right-0 top-0"
						>
							<Link
								href={`${buttonLinkTwo?.url}`}
								target={buttonLinkTwo?.target}
								aria-label={`${ctaParagraph} Form button link`}
								className="flex items-center justify-between gap-4 font-semibold font-RethinkSansExtraBold uppercase leading-tight text-white text-tiny md:text-base lg:text-medium"
							>
								<span>{ctaParagraph}</span>
								<span className="ctaSVG xl:hidden flex items-center justify-end px-2 h-12 w-fit lg:h-16 rounded-full bg-white hover:bg-primary-default transition-all duration-200 ease-in-out">
									<svg
										version="1.1"
										fill="none"
										viewBox="0 0 32 32"
										className="w-8 h-8 rotate-[-45deg]"
										xmlns="http://www.w3.org/2000/svg"
									>
										<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
										<g
											id="SVGRepo_tracerCarrier"
											strokeLinecap="round"
											strokeLinejoin="round"
										></g>
										<g id="SVGRepo_iconCarrier">
											<title>arrow-right-circle</title>
											<desc>Created with Sketch Beta.</desc> <defs> </defs>
											<g
												id="Page-1"
												stroke="none"
												strokeWidth="1"
												fill="none"
												fillRule="evenodd"
											>
												<g
													id="Icon-Set"
													transform="translate(-308.000000, -1087.000000)"
													fill="#11acff"
												>
													<path
														d="M324,1117 C316.268,1117 310,1110.73 310,1103 C310,1095.27 316.268,1089 324,1089 C331.732,1089 338,1095.27 338,1103 C338,1110.73 331.732,1117 324,1117 L324,1117 Z M324,1087 C315.163,1087 308,1094.16 308,1103 C308,1111.84 315.163,1119 324,1119 C332.837,1119 340,1111.84 340,1103 C340,1094.16 332.837,1087 324,1087 L324,1087 Z M330.535,1102.12 L324.879,1096.46 C324.488,1096.07 323.855,1096.07 323.465,1096.46 C323.074,1096.86 323.074,1097.49 323.465,1097.88 L327.586,1102 L317,1102 C316.447,1102 316,1102.45 316,1103 C316,1103.55 316.447,1104 317,1104 L327.586,1104 L323.465,1108.12 C323.074,1108.51 323.074,1109.15 323.465,1109.54 C323.855,1109.93 324.488,1109.93 324.879,1109.54 L330.535,1103.88 C330.775,1103.64 330.85,1103.31 330.795,1103 C330.85,1102.69 330.775,1102.36 330.535,1102.12 L330.535,1102.12 Z"
														id="arrow-right-circle"
													></path>
												</g>
											</g>
										</g>
									</svg>
								</span>
							</Link>
							<Link
								href={`${buttonLinkTwo?.url}`}
								target={buttonLinkTwo?.target}
								aria-label={`${buttonLinkTwo?.title}`}
								className={`hidden xl:flex w-fit mx-auto mt-2 py-4 px-6 cursor-pointer rounded-full bg-white hover:bg-accent-two transition-all ease-in-out duration-500 font-semibold  uppercase text-black hover:text-white text-base text-center font-RethinkSansExtraBold`}
							>
								{buttonLinkTwo?.title}
							</Link>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default Hero;
