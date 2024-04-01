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
import {ISkillsExperiences} from "@/types/components/index";

// Components
import Paragraph from "./Elements/Paragraph";

const SkillsExperiences: FC<ISkillsExperiences> = ({
	title,
	image,
	paragraph,
	skillsExperiencesGrid,
}) => {
	return (
		<>
			<section className="relative overflow-hidden py-8 px-4 ">
				<div className="md:container px-0 mx-auto">
					<div className="flex flex-wrap border-b border-primary-dark my-4">
						<div className="w-full lg:w-1/2 p-4">
							<motion.h3
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="my-3 max-w-xl mx-auto lg:mx-0 uppercase text-black text-center lg:text-left font-semibold text-lg lg:text-xl"
							>
								{title}
							</motion.h3>
							<Paragraph
								content={paragraph}
								tailwindStyling="max-w-full lg:max-w-xl leading-7 text-black text-base text-center lg:text-left"
							/>
						</div>
						<div className="w-full lg:w-1/2 p-4">
							<Image
								alt={image?.altText}
								src={image?.sourceUrl}
								width={image?.mediaDetails.width}
								height={image?.mediaDetails.height}
								className={`${
									image?.sourceUrl
										? "mx-auto xl:mx-0 px-16 lg:px-28 w-full h-[150px] lg:h-[200px] object-contain object-center"
										: "hidden"
								}`}
							/>
						</div>
					</div>
					<div className=" p-4 w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center justify-center">
						{skillsExperiencesGrid?.length > 0 ? (
							skillsExperiencesGrid?.map((item: any, keys: number) => (
								<Fragment key={keys}>
									<motion.div
										custom={keys}
										initial={initial}
										whileInView="animate"
										viewport={{once: true}}
										variants={arrayLoopStaggerChildren}
										className="flex items-center h-fit"
									>
										<span>
											<svg
												version="1.1"
												fill="#11acff"
												viewBox="0 0 32 32"
												className="block mr-5 w-4 h-4 md:w-7 md:h-7"
												xmlns="http://www.w3.org/2000/svg"
											>
												<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
												<g
													id="SVGRepo_tracerCarrier"
													strokeLinecap="round"
													strokeLinejoin="round"
												></g>
												<g id="SVGRepo_iconCarrier">
													<path d="M28.998 8.531l-2.134-2.134c-0.394-0.393-1.030-0.393-1.423 0l-12.795 12.795-6.086-6.13c-0.393-0.393-1.029-0.393-1.423 0l-2.134 2.134c-0.393 0.394-0.393 1.030 0 1.423l8.924 8.984c0.393 0.393 1.030 0.393 1.423 0l15.648-15.649c0.393-0.392 0.393-1.030 0-1.423z"></path>{" "}
												</g>
											</svg>
										</span>
										<Paragraph
											content={item?.text}
											tailwindStyling="text-black text-tiny xl:text-tiny text-left"
										/>
									</motion.div>
								</Fragment>
							))
						) : (
							<></>
						)}
					</div>
				</div>
			</section>
		</>
	);
};

export default SkillsExperiences;
