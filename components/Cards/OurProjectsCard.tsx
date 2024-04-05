// Imports
import {
	fadeIn,
	initial,
	stagger,
	fadeInUp,
	initialTwo,
} from "../../animations/animations";
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import dateFormat from "dateformat";
import {IOurProjectsCard} from "@/types/components/index";

// Components
import Paragraph from "@/components/Elements/Paragraph";

const OurProjectsCard: FC<IOurProjectsCard> = ({
	slug,
	date,
	title,
	excerpt,
	featuredImage,
}) => {
	return (
		<>
			<div className="flex flex-col">
				<Link
					target=""
					href={slug ? `projects/${slug}` : `/`}
					className="group overflow-hidden bg-white"
				>
					<motion.div
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="bg-primary-darker group-hover:bg-primary-darker relative px-4 py-6 lg:py-12 h-[250px] bg-center bg-no-repeat bg-cover transition-all duration-500 ease-in-out"
						style={{
							backgroundImage: `url("${featuredImage?.node?.sourceUrl}")`,
						}}
					>
						<motion.div
							initial={initial}
							variants={stagger}
							whileInView="animate"
							viewport={{once: true}}
							className={slug ? "absolute -bottom-2 right-2" : "hidden"}
						>
							<div className="flex justify-end gap-4 mb-4">
								<h3 className="flex items-center justify-center font-semibold  text-white text-tiny uppercase pl-4 w-fit h-12 bg-primary-default hover:bg-primary-dark">
									Read More
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
				<div className="px-4 py-6 flex flex-col">
					<span className="mb-2 text-darkGrey text-sm text-center lg:text-left">
						{dateFormat(date, "dddd, mmmm d, yyyy")}
					</span>
					<Link target="" href={slug ? `projects/${slug}` : `/`}>
						<motion.h3
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="text-center lg:text-left text-black hover:text-primary-default uppercase text-paragraph my-3 font-semibold"
						>
							{title}
						</motion.h3>
					</Link>
					<Paragraph
						content={
							excerpt?.length > 235
								? excerpt?.substring(0, 235) + "..."
								: excerpt
						}
						tailwindStyling="text-black text-base sm:text-tiny text-center lg:text-left"
					/>
				</div>
			</div>
		</>
	);
};

export default OurProjectsCard;
