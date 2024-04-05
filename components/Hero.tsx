// Imports
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {IHero} from "@/types/components/index";
import {fadeIn, initialTwo} from "../animations/animations";

// Components
import Paragraph from "./Elements/Paragraph";
import RenderStars from "./Elements/RenderStars";

const Hero: FC<IHero> = ({title, buttonLink, paragraph, backgroundImage}) => {
	return (
		<>
			<div className="hero relative z-50 flex flex-col h-fit">
				<div className="lg:relative pt-[65px] lg:pt-[112px] flex flex-col lg:flex-row">
					<motion.div
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						className="w-full h-[75vh] flex flex-col items-center lg:items-baseline justify-center relative bg-center bg-no-repeat bg-cover"
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
							<div className="max-w-sm lg:max-w-xl mx-auto lg:mx-0 ">
								<motion.h1
									initial={initialTwo}
									whileInView={fadeIn}
									viewport={{once: true}}
									className="text-center lg:text-left uppercase text-medium sm:text-2xl md:text-2xl lg:text-3xl xl:text-5xl tracking-[0.10rem] text-white font-semibold leading-tight xl:leading-[2.5rem]"
								>
									{title}
								</motion.h1>
								<Paragraph
									content={paragraph}
									tailwindStyling="py-2 text-white leading-[1.5rem] md:leading-[1.75rem] text-base text-center lg:text-left"
								/>
								<div className="w-fit mx-auto lg:mx-0 py-3 px-4 bg-lightGreyTwo/30 grid sm:grid-cols-2 items-center justify-start gap-6">
									<div className="flex items-center justify-start gap-3">
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
									<div className="flex items-center justify-start gap-3">
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
								</div>
							</div>
							<div className="flex flex-col md:flex-row gap-2 sm:gap-4 max-w-sm lg:max-w-4xl mx-auto lg:mx-0">
								<Link
									href={`${buttonLink?.url}`}
									target={buttonLink?.target}
									aria-label={`${buttonLink?.title}`}
									className={`w-fit mx-auto lg:mx-0 py-4 px-6 cursor-pointer rounded-lg bg-primary-default hover:bg-primary-dark transition-all ease-in-out duration-500 font-semibold tracking-[0.10rem] uppercase text-lightGrey text-base text-center font-tonnelier`}
								>
									{buttonLink?.title}
								</Link>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default Hero;
