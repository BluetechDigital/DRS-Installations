// Imports
import {FC} from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import {IOurServicesCardTwo} from "@/types/components";
import {initial, fadeInUp} from "@/animations/animations";

// Components
import Paragraph from "../Elements/Paragraph";

const OurServicesCardTwo: FC<IOurServicesCardTwo> = ({
	image,
	title,
	paragraph,
	currentIteration,
}) => {
	let starSrc;

	switch (currentIteration) {
		case 0:
			starSrc = "004-star";
			break;
		case 2:
			starSrc = "033-star";
			break;
		case 4:
			starSrc = "024-star";
			break;
		case 6:
			starSrc = "016-star";
			break;
		case 8:
			starSrc = "037-star";
			break;
		default:
			starSrc = "004-star";
			break;
	}

	return (
		<>
			<div className="relative flex flex-col p-4">
				<Image
					className={
						image?.sourceUrl
							? "bg-lightGreyTwo mx-auto rounded-full w-44 h-44 mb-6 object-cover object-center"
							: "hidden"
					}
					alt={image?.altText}
					src={image?.sourceUrl}
					width={image?.mediaDetails?.width}
					height={image?.mediaDetails?.height}
				/>
				<motion.h3
					initial={initial}
					whileInView={fadeInUp}
					viewport={{once: true}}
					className="text-center text-black uppercase text-base my-3 font-semibold mb-2"
				>
					{title}
				</motion.h3>
				<Paragraph
					content={
						paragraph?.length > 225
							? paragraph?.substring(0, 225) + "..."
							: paragraph
					}
					tailwindStyling="text-black text-tiny text-center"
				/>
				<Image
					width={550}
					height={550}
					alt={`Black Star Icon ${starSrc}`}
					src={`/svg/${starSrc}.svg`}
					className={`${
						currentIteration === null ||
						(currentIteration !== null && currentIteration % 2 !== 0)
							? "hidden"
							: "hidden lg:block absolute top-0 lg:top-[38%] xl:top-[42%] right-0 lg:right-12 xl:right-20 2xl:right-32 cursor-pointer w-[45px] h-[40px] xl:h-[45px] object-contain object-center"
					}`}
				/>
			</div>
		</>
	);
};

export default OurServicesCardTwo;
