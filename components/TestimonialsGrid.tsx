// Imports
import {FC} from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";
import {ITestimonialsGrid} from "@/types/components/index";
import {fadeInUp, initial, stagger} from "../animations/animations";

// Styling
import styles from "../styles/components/Testimonials.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";
import Pagination from "./Elements/Pagination";
import RenderStars from "./Elements/RenderStars";

const TestimonialsGrid: FC<ITestimonialsGrid> = ({
	title,
	subtitle,
	paragraph,
}) => {
	const globalContext = useGlobalContext();

	return (
		<>
			<div
				className={
					styles.testimonials +
					` relative py-16 px-4 bg-white bg-cover bg-no-repeat bg-center`
				}
				style={{
					backgroundImage: `url("/svg/background/layeblue-peaks-haikei-white-lightgrey.svg")`,
				}}
			>
				<div className="lg:container relative m-auto flex flex-col items-center gap-6 sm:gap-12 lg:gap-16">
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className={
							title && subtitle
								? "w-full flex flex-col lg:flex-row items-center justify-between py-4 gap-3"
								: "hidden"
						}
					>
						<div>
							<motion.h4
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="max-w-sm mx-auto xl:mx-0 text-center xl:text-left text-base text-primary-default"
							>
								{subtitle}
							</motion.h4>
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
								tailwindStyling="lg:max-w-3xl mx-auto text-black leading-[1.75rem] text-paragraph text-center"
							/>
						</div>
						<motion.div
							initial={initial}
							variants={stagger}
							whileInView="animate"
							viewport={{once: true}}
							className="w-full lg:w-1/4 mx-auto lg:mx-0 py-3 px-4 grid sm:grid-cols-2 items-center justify-center sm:justify-start gap-6"
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
									<h3 className="font-medium text-tiny font-openSauceSansRegular text-black">
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
									<h3 className="font-medium text-tiny font-openSauceSansRegular text-black">
										5.0 Rating
									</h3>
								</div>
							</div>
							<div className="flex items-center justify-center lg:justify-start gap-0">
								<Image
									className="bg-white my-auto lg:mx-0 rounded-full p-1 w-full h-10 object-cover object-center"
									alt={`Trustpilot reviews logo`}
									src="/svg/trustpilot-logo-black.svg"
									width={500}
									height={500}
								/>
							</div>
						</motion.div>
					</motion.div>
					<Pagination
						contentType="TestimonialsCard"
						numberOfItemsRenderedPerPage={12}
						contentArray={globalContext?.testimonials}
						tailwindStyling={`grid px-0 lg:px-16 lg:-m-4 gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3`}
					/>
				</div>
			</div>
		</>
	);
};

export default TestimonialsGrid;
