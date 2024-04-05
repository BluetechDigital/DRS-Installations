// Imports
import {
	initial,
	stagger,
	fadeInUp,
	arrayLoopStaggerChildren,
} from "../animations/animations";
import Link from "next/link";
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {IOurServices} from "@/types/components/index";

// Styling
import styles from "../styles/components/OurServices.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";
import OurServicesCard from "./Cards/OurServicesCard";

const OurServices: FC<IOurServices> = ({
	title,
	subtitle,
	paragraph,
	buttonLink,
	servicesGrid,
}) => {
	return (
		<>
			<div
				className={
					styles.ourServices +
					" relative py-12 px-4 bg-white bg-center bg-no-repeat bg-cover"
				}
				style={{
					backgroundImage: `linear-gradient(
								0deg,
								rgb(255, 255, 255, 1),
								rgba(255, 255, 255, 0.95),
								rgba(255, 255, 255, 0.90),
								rgba(255, 255, 255, 0.85)
							),url("/svg/background/grid-background-06.svg")`,
				}}
			>
				<div className="relative z-10 lg:container m-auto flex flex-col items-center gap-6">
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full"
					>
						<div>
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
								className="my-3 max-w-xl mx-auto lg:mx-0 text-black uppercase font-tonnelier leading-[2.25rem] text-center lg:text-left text-lg sm:text-3xl"
							>
								{title}
							</motion.h3>
						</div>
						<div className="">
							<Paragraph
								content={paragraph}
								tailwindStyling="max-w-full lg:max-w-xl text-black text-base text-center lg:text-left"
							/>
							<Link
								href={`${buttonLink?.url}`}
								aria-label={`${buttonLink?.title}`}
								target={buttonLink?.target}
								className={`hidden w-fit mx-auto lg:mx-0 mt-2 py-4 px-6 cursor-pointer rounded-full bg-primary-default hover:bg-primary-dark transition-all ease-in-out duration-500 font-semibold  uppercase text-lightGrey text-base text-center font-tonnelier ${
									buttonLink?.url ? "lg:block" : "lg:hidden"
								}`}
							>
								{buttonLink?.title}
							</Link>
						</div>
					</motion.div>
					<div className="grid grid-cols-1 lg:grid-cols-3 py-6 px-0 gap-6 w-full">
						{servicesGrid?.length > 0 ? (
							servicesGrid?.map((item: any, keys: number) => (
								<Fragment key={keys}>
									<motion.div
										custom={keys}
										initial={initial}
										whileInView="animate"
										viewport={{once: true}}
										variants={arrayLoopStaggerChildren}
									>
										<OurServicesCard
											link={item?.card?.link}
											image={item?.card?.image}
											title={item?.card?.title}
											paragraph={item?.card?.paragraph}
										/>
									</motion.div>
								</Fragment>
							))
						) : (
							<></>
						)}
					</div>
				</div>
				<Image
					width={550}
					height={550}
					alt="Black security shield icon"
					src="/svg/security-shield.svg"
					className="hidden xl:block absolute top-[65%] right-[-100px] opacity-10 cursor-pointer w-fit h-[40px] xl:h-[250px] object-contain object-center"
				/>
			</div>
		</>
	);
};

export default OurServices;
