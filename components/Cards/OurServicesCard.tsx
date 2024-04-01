// Imports
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {IOurServicesCard} from "@/types/components";
import {initial, stagger, fadeInUp} from "@/animations/animations";

// Styling
import styles from "../../styles/components/OurServices.module.scss";

// Components
import Paragraph from "../Elements/Paragraph";

const OurServicesCard: FC<IOurServicesCard> = ({
	link,
	image,
	title,
	paragraph,
}) => {
	return (
		<>
			<div className="flex flex-col">
				<Link
					href={`${link?.url}`}
					target={link?.target}
					className={styles.card + " group overflow-hidden bg-white"}
				>
					<motion.div
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="bg-primary-darker group-hover:bg-primary-darker relative px-4 py-6 lg:py-12 h-[250px] bg-center bg-no-repeat bg-cover transition-all duration-500 ease-in-out"
						style={{
							backgroundImage: `url("${image?.sourceUrl}")`,
						}}
					>
						<motion.div
							initial={initial}
							variants={stagger}
							whileInView="animate"
							viewport={{once: true}}
							className={link?.url ? "absolute -bottom-2 right-2" : "hidden"}
						>
							<div className="flex justify-end gap-4 mb-4">
								<h3 className="flex items-center justify-center font-semibold tracking-[0.10rem] text-white text-tiny uppercase pl-4 w-fit h-12 bg-primary-default hover:bg-primary-dark">
									{link?.title}
									<Image
										width={550}
										height={550}
										alt="Black Arrow Icon"
										src="/svg/navigation-menu-dropdown-arrow-white.svg"
										className="my-auto ml-2 mb-6 rotate-[-135deg] cursor-pointer w-[35px] h-[35px] object-contain object-center"
									/>
								</h3>
							</div>
						</motion.div>
					</motion.div>
				</Link>
				<div className="px-4 py-6">
					<motion.h3
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="text-center text-black uppercase text-paragraph my-3 font-semibold"
					>
						{title}
					</motion.h3>
					<Paragraph
						content={
							paragraph?.length > 235
								? paragraph?.substring(0, 235) + "..."
								: paragraph
						}
						tailwindStyling="text-black text-base sm:text-tiny text-center"
					/>
				</div>
			</div>
		</>
	);
};

export default OurServicesCard;
