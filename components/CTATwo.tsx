// Imports
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {ICTATwo} from "@/types/components/index";
import {initial, stagger} from "../animations/animations";

// Styling
import styles from "../styles/components/CTA.module.scss";

// Components
import Title from "./Elements/Title";
import RenderStars from "./Elements/RenderStars";

const CTATwo: FC<ICTATwo> = ({title, buttonLink, backgroundImage}) => {
	return (
		<>
			<div className={styles.ctaTwo + ` ctaTwo p-4 lg:px-0`}>
				<div
					className="lg:container mx-auto px-0 lg:px-8 rounded-2xl bg-center bg-no-repeat bg-cover"
					style={{
						backgroundImage: `linear-gradient(
								0deg,
								rgb(0, 0, 0, 0.4),
								rgba(0, 0, 0, 0.4),
								rgba(0, 0, 0, 0.4)
							),url("${backgroundImage?.sourceUrl}")`,
					}}
				>
					<div className="flex flex-col gap-6 py-6 px-4 bg-cover bg-center bg-no-repeat">
						<motion.div
							initial={initial}
							variants={stagger}
							whileInView="animate"
							viewport={{once: true}}
							className={
								title
									? "w-full flex flex-col lg:flex-row items-center justify-between py-4 gap-10 lg:gap-3"
									: "hidden"
							}
						>
							<div>
								<Title
									content={title}
									tailwindStyling="title my-3 max-w-xl mx-auto lg:mx-0 text-white uppercase font-RethinkSansExtraBold leading-[2.25rem] text-center lg:text-left text-lg sm:text-3xl"
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
							</div>
							<Link
								href={`${buttonLink?.url}`}
								target={buttonLink?.target}
								aria-label={`${buttonLink?.title}`}
								className={`${
									buttonLink?.url ? "block" : "hidden"
								} py-4 px-6 cursor-pointer rounded-full bg-primary-default hover:bg-primary-dark transition-all ease-in-out duration-500 font-semibold  uppercase text-lightGrey text-base text-center font-RethinkSansExtraBold`}
							>
								{buttonLink?.title}
							</Link>
						</motion.div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CTATwo;
