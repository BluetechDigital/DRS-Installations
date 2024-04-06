// Imports
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {IOurClients} from "@/types/components/index";
import {initial, stagger, fadeInUp} from "../animations/animations";

// Styling
import styles from "../styles/components/OurClients.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";

const OurClients: FC<IOurClients> = ({
	title,
	subtitle,
	paragraph,
	imageGrid,
}) => {
	return (
		<>
			<div className={styles.ourClients + ` py-16 px-4 lg:px-0 bg-white`}>
				<div className="lg:container px-0 mx-auto">
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="flex flex-col items-center"
					>
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
					</motion.div>
					<div className="max-w-6xl mx-auto">
						<motion.div
							initial={initial}
							variants={stagger}
							whileInView="animate"
							viewport={{once: true}}
							className={`grid items-center justify-center grid-cols-2 gap-4 ${
								imageGrid?.length <= 4 ? "lg:grid-cols-4" : "lg:grid-cols-6"
							} lg:items-center lg:justify-between py-12`}
						>
							{imageGrid?.length > 0 ? (
								imageGrid.map((item: any, keys: number) => (
									<Fragment key={keys}>
										<div>
											<Image
												src={item?.image?.sourceUrl}
												alt={`${item?.image?.altText}`}
												width={item?.image?.mediaDetails?.width}
												height={item?.image?.mediaDetails?.height}
												className={
													item?.image?.sourceUrl
														? `block w-[150px] mx-auto h-full sm:w-[150px] lg:w-full lg:h-[125px] object-contain object-center`
														: `hidden`
												}
											/>
										</div>
									</Fragment>
								))
							) : (
								<></>
							)}
						</motion.div>
					</div>
				</div>
			</div>
		</>
	);
};

export default OurClients;
