// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {IOurLocation} from "@/types/components/index";
import {fadeInUp, initial, stagger} from "../animations/animations";

// Components
import Paragraph from "./Elements/Paragraph";

const OurLocation: FC<IOurLocation> = ({title, paragraph}) => {
	return (
		<>
			<div className="bg-white">
				<div className="md:container x-0 mx-auto">
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className={`${
							title && paragraph
								? "flex flex-col items-center py-12 sm:py-16 px-4"
								: "hidden"
						}`}
					>
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
							tailwindStyling="lg:max-w-3xl mx-auto text-black text-base text-center"
						/>
					</motion.div>
				</div>
				<div>
					<iframe
						width="100%"
						height="350"
						loading="lazy"
						style={{border: "0"}}
						allowFullScreen={true}
						referrerPolicy="no-referrer-when-downgrade"
						src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d20162.514047084078!2d-1.22016954706058!3d50.82534278150633!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487465cf539a4317%3A0x5998fce561e66f71!2sHusky%20Carpentry%20Limited!5e0!3m2!1sen!2suk!4v1709510339613!5m2!1sen!2suk"
					></iframe>
				</div>
			</div>
		</>
	);
};

export default OurLocation;
