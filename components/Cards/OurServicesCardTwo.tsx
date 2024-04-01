// Imports
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {IOurServicesCardTwo} from "@/types/components";
import {initial, stagger, fadeInUp} from "@/animations/animations";

// Styling
import styles from "../../styles/components/OurServices.module.scss";

// Components
import Paragraph from "../Elements/Paragraph";

const OurServicesCardTwo: FC<IOurServicesCardTwo> = ({
	image,
	title,
	paragraph,
}) => {
	return (
		<>
			<div className="flex flex-col p-4">
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
						paragraph?.length > 175
							? paragraph?.substring(0, 175) + "..."
							: paragraph
					}
					tailwindStyling="text-black text-tiny text-center"
				/>
			</div>
		</>
	);
};

export default OurServicesCardTwo;
