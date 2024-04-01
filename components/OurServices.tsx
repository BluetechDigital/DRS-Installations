// Imports
import {
	initial,
	stagger,
	fadeInUp,
	arrayLoopStaggerChildren,
} from "../animations/animations";
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
	servicesGrid,
}) => {
	return (
		<>
			<div className={styles.ourServices + " py-12 px-4 bg-white"}>
				<div className="md:container m-auto flex flex-col items-center gap-6 lg:gap-16">
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
								className="max-w-sm mx-auto lg:mx-0 text-center lg:text-left text-base text-primary-default"
							>
								{subtitle}
							</motion.h4>
							<motion.h3
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="my-3 max-w-xl mx-auto lg:mx-0 uppercase text-black text-center lg:text-left font-semibold text-lg lg:text-xl"
							>
								{title}
							</motion.h3>
						</div>
						<Paragraph
							content={paragraph}
							tailwindStyling="max-w-full lg:max-w-xl text-black text-base text-center lg:text-left"
						/>
					</motion.div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-6 px-0 md:px-4 lg:-m-4 gap-16 lg:gap-6">
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
			</div>
		</>
	);
};

export default OurServices;
