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
			<div className={styles.ourServices + " relative py-8 px-4 bg-white"}>
				<div className="lg:container relative m-auto flex flex-col items-center gap-6">
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
					<div className="w-full relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-6 px-0 md:px-4 gap-6 items-start justify-center">
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
											currentIteration={keys}
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
						aria-label={`${buttonLink?.title}`}
						target={buttonLink?.target}
						className={`hidden mb-8 mr-8 py-4 px-6 cursor-pointer rounded-full bg-primary-default hover:bg-primary-dark transition-all ease-in-out duration-500 font-semibold  uppercase text-lightGrey text-base text-center font-RethinkSansExtraBold ${
							buttonLink?.url ? "lg:block" : "lg:hidden"
						}`}
					>
						{buttonLink?.title}
					</Link>
				</div>
			</div>
		</>
	);
};

export default OurServicesGridTwo;
