// Imports
import {
	fadeIn,
	initial,
	initialTwo,
	slideInRightFinish,
	slideInLeftInitial,
	slideInRightInitial,
	arrayLoopStaggerChildren,
} from "../animations/animations";
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {IAccreditations} from "@/types/components/index";

// Styling
import styles from "../styles/components/Accreditations.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";

const Accreditations: FC<IAccreditations> = ({
	text,
	textTwo,
	paragraph,
	backgroundImage,
	accreditationsGrid,
}) => {
	return (
		<>
			<div
				className={
					styles.accreditations +
					" accreditations flex flex-col-reverse lg:flex-row flex-wrap p-4 lg:py-10 lg:px-0 md:container mx-auto gap-10 lg:gap-0"
				}
			>
				<motion.div
					viewport={{once: true}}
					initial={slideInLeftInitial}
					whileInView={slideInRightFinish}
					className="w-full lg:w-5/12"
				>
					<div
						className="relative overflow-hidden h-[200px] flex flex-col items-center justify-center gap-4 bg-center bg-no-repeat bg-cover"
						style={{
							backgroundImage: `linear-gradient(
								0deg,
								rgba(0, 0, 0,  0.5),
								rgba(0, 0, 0,  0.5),
								rgba(0, 0, 0, 0.5)
							),url("${backgroundImage?.sourceUrl}")`,
						}}
					>
						<div className="max-w-3xl mx-auto lg:mx-0 flex items-center gap-4">
							<motion.h2
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className="text-center uppercase font-semibold font-RethinkSansExtraBold leading-tight text-white text-9xl"
							>
								{text}
							</motion.h2>
							<motion.h3
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className="max-w-[7.5rem] text-left font-medium font-openSauceSansRegular leading-tight text-white text-xl lg:text-3xl xl:text-xl"
							>
								{textTwo}
							</motion.h3>
						</div>
					</div>
				</motion.div>
				<motion.div
					viewport={{once: true}}
					initial={slideInRightInitial}
					whileInView={slideInRightFinish}
					className="w-full lg:w-7/12"
				>
					<div className="flex flex-col justify-between h-full px-0 lg:px-8 gap-6 lg:gap-2">
						<Paragraph
							content={paragraph}
							tailwindStyling="paragraph max-w-full lg:max-w-3xl mx-auto lg:mx-0 text-black uppercase font-semibold font-RethinkSansExtraBold leading-tight text-lg sm:text-xl lg:text-3xl text-center lg:text-left"
						/>
						<div className="grid gap-4 grid-cols-2 lg:grid-cols-4 items-center justify-center">
							{accreditationsGrid?.length > 0 ? (
								accreditationsGrid?.map((item: any, keys: number) => (
									<Fragment key={keys}>
										<motion.div
											custom={keys}
											initial={initial}
											whileInView="animate"
											viewport={{once: true}}
											variants={arrayLoopStaggerChildren}
										>
											<Image
												src={item?.image?.sourceUrl}
												alt={`${item?.image?.altText}`}
												width={item?.image?.mediaDetails?.width}
												height={item?.image?.mediaDetails?.height}
												className={
													item?.image?.sourceUrl
														? `block object-contain object-center w-full h-[50px]`
														: `hidden`
												}
											/>
										</motion.div>
									</Fragment>
								))
							) : (
								<></>
							)}
						</div>
					</div>
				</motion.div>
			</div>
		</>
	);
};

export default Accreditations;
