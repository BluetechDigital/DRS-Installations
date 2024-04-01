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
import {IOurServicesGridTwo} from "@/types/components/index";

// Styling
import styles from "../styles/components/OurServices.module.scss";

// Components
import OurServicesCardTwo from "./Cards/OurServicesCardTwo";

const OurServicesGridTwo: FC<IOurServicesGridTwo> = ({
	title,
	buttonLink,
	servicesGrid,
}) => {
	return (
		<>
			<div
				className={
					styles.ourServices +
					" relative py-8 px-4 bg-white bg-cover bg-center bg-no-repeat"
				}
				style={{
					backgroundImage: `url("/svg/background/polygon-scatter-haikei-lightgrey-two.svg")`,
				}}
			>
				<div className="md:container relative m-auto flex flex-col items-center gap-6">
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="flex flex-col items-center"
					>
						<motion.h3
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="my-3 max-w-xl mx-auto lg:mx-0 uppercase text-black text-center lg:text-left font-semibold text-lg lg:text-xl"
						>
							{title}
						</motion.h3>
					</motion.div>
					<div className="w-full relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-6 px-0 md:px-4 gap-6 items-start justify-center">
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
										<OurServicesCardTwo
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
					<Link
						href={`${buttonLink?.url}`}
						target={buttonLink?.target}
						className={`${buttonLink?.url ? "block" : "hidden"}`}
					>
						<div
							className={`py-4 pl-4 pr-10 w-fit mx-auto lg:mx-0 cursor-pointer bg-primary-default hover:bg-primary-dark transition-all ease-in-out duration-500`}
						>
							<h3 className="relative flex items-center justify-center font-semibold tracking-[0.10rem] uppercase pl-4 text-lightGrey text-tiny text-center">
								{buttonLink?.title}
								<Image
									width={550}
									height={550}
									alt="Black Arrow Icon"
									src="/svg/navigation-menu-dropdown-arrow-white.svg"
									className="my-auto ml-2 absolute top-[-20px] right-[-40px] rotate-[-135deg] cursor-pointer w-[35px] h-[35px] object-contain object-center"
								/>
							</h3>
						</div>
					</Link>
				</div>
			</div>
		</>
	);
};

export default OurServicesGridTwo;
