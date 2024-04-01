// Imports
import {
	fadeIn,
	initial,
	stagger,
	fadeInUp,
	initialTwo,
} from "@/animations/animations";
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {IErrorPage} from "@/types/components/index";

// Components
import Paragraph from "@/components/Elements/Paragraph";

const ErrorPage: FC<IErrorPage> = ({
	title,
	paragraph,
	buttonLink,
	backgroundImage,
}) => {
	return (
		<section
			className="relative h-[100vh] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center"
			style={{
				backgroundImage: `url("${backgroundImage}")`,
			}}
		>
			<div className="relative z-50 px-10 my-auto overflow-hidden py-44">
				<div className="md:container p-0 mx-auto">
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="md:container relative flex flex-col items-baseline justify-center px-4 m-auto"
					>
						<div className="max-w-3xl mx-auto">
							<motion.h1
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className="flex flex-col sm:block text-center mb-3 text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-bold leading-[2rem] sm:leading-[3rem] lg:leading-[4rem]"
							>
								{title}
							</motion.h1>
						</div>
						<div className="max-w-xl mx-auto">
							<Paragraph
								content={paragraph}
								tailwindStyling="mb-6 py-6 text-white leading-[1.75rem] text-base sm:text-medium text-center"
							/>
						</div>
					</motion.div>
					<div className="flex flex-col items-center justify-center mx-auto md:max-w-max">
						<motion.button
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							type="button"
						>
							<Link
								href={`${buttonLink?.url}`}
								target={buttonLink?.target}
								className={buttonLink?.url ? "block" : "hidden"}
							>
								<div className="py-6 pl-4 pr-10 cursor-pointer bg-primary-default hover:bg-primary-dark transition-all ease-in-out duration-500">
									<span className="relative flex items-center justify-center pl-4 text-lightGrey text-tiny text-center">
										{buttonLink?.title}
										<Image
											width={550}
											height={550}
											alt="Black Arrow Icon"
											src="/svg/navigation-menu-dropdown-arrow-white.svg"
											className="my-auto ml-2 absolute top-[-25px] right-[-40px] rotate-[-135deg] cursor-pointer w-[35px] h-[35px] object-contain object-center"
										/>
									</span>
								</div>
							</Link>
						</motion.button>
					</div>
				</div>
			</div>
			<div className="absolute top-0 h-screen bottom-0 left-0 w-full opacity-90 bg-gradient-to-b from-pureBlack from-5% via-pureBlack via-10% to-pureBlack- to-100%" />
		</section>
	);
};

export default ErrorPage;
