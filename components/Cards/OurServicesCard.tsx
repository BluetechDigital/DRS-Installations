// Imports
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {IOurServicesCard} from "@/types/components";
import {initial, fadeInUp} from "@/animations/animations";

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
						className="bg-primary-darker group-hover:bg-primary-darker relative px-4 py-6 w-full lg:py-12 h-[350px] bg-center bg-no-repeat bg-cover"
						style={{
							backgroundImage: `url("${image?.sourceUrl}")`,
						}}
					>
						<div
							className={link?.url ? "absolute -bottom-0 right-0" : "hidden"}
						>
							<div className="w-fit p-2 bg-lightGreyTwo hover:bg-lightGrey">
								{link?.title}
								<svg
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="cursor-pointer w-full h-[35px] rotate-[-45deg] object-contain object-center"
								>
									<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
									<g
										id="SVGRepo_tracerCarrier"
										stroke-linecap="round"
										stroke-linejoin="round"
									></g>
									<g id="SVGRepo_iconCarrier">
										{" "}
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M17.6492 11.2501L12.7904 6.53852L13.8346 5.46167L20.5774 12.0001L13.8346 18.5385L12.7904 17.4617L17.6492 12.7501H3V11.2501H17.6492Z"
											fill="#099bdb"
										></path>{" "}
									</g>
								</svg>
							</div>
						</div>
					</motion.div>
				</Link>
				<div className="px-4 py-6">
					<motion.h3
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="text-center text-black uppercase font-tonnelier text-medium my-3 font-semibold"
					>
						{title}
					</motion.h3>
					<Paragraph
						content={
							paragraph?.length > 235
								? paragraph?.substring(0, 235) + "..."
								: paragraph
						}
						tailwindStyling="text-black text-base sm:text-base text-center"
					/>
				</div>
			</div>
		</>
	);
};

export default OurServicesCard;
