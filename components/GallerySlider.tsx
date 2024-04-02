// Imports
import Link from "next/link";
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {IGallerySlider} from "@/types/components/index";
import {fadeIn, initialTwo} from "../animations/animations";

// Swiper.js Slider
import "swiper/css";
import "swiper/css/navigation";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";

// Styling
import styles from "../styles/components/GallerySlider.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";

const GallerySlider: FC<IGallerySlider> = ({gallerySlider}) => {
	return (
		<>
			<div
				className={styles.gallerySlider + " relative z-50 flex flex-col h-fit"}
			>
				{/* q8ZuN94DSzAv*5lTOnFxx4WX */}
				<div className="lg:relative flex flex-col lg:flex-row">
					<div className="relative overflow-hidden">
						<Swiper
							loop={true}
							navigation={true}
							spaceBetween={30}
							centeredSlides={true}
							modules={[Autoplay, Navigation]}
							autoplay={{
								delay: 10000,
								disableOnInteraction: false,
							}}
						>
							{gallerySlider?.length > 0 ? (
								gallerySlider?.map((item: any, keys: number) => (
									<Fragment key={keys}>
										<SwiperSlide>
											<div className="w-full p-4">
												<div
													className="pt-24 pb-20 w-full h-[50vh] flex flex-col items-center justify-center relative bg-center bg-no-repeat bg-cover"
													style={{
														backgroundImage: `linear-gradient(
																0deg,
																rgb(0, 0, 0, 0.20),
																rgba(0, 0, 0, 0.20),
																rgba(0, 0, 0, 0.20)
															),url("${item?.backgroundImage?.sourceUrl}")`,
													}}
												>
													<div className="max-w-sm lg:max-w-3xl mx-auto lg:mx-0 relative z-10 flex flex-col items-center lg:items-start px-8 sm:px-24">
														<motion.h1
															initial={initialTwo}
															whileInView={fadeIn}
															viewport={{once: true}}
															className="text-center uppercase text-lg md:text-xl lg:text-3xl xl:text-5xl tracking-[0.10rem] text-white font-semibold xl:leading-[2.5rem]"
														>
															{item?.title}
														</motion.h1>
														<Paragraph
															content={item?.paragraph}
															tailwindStyling="py-2 text-white leading-[1.75rem] text-base text-center"
														/>
														<Link
															href={`${item?.buttonLink?.url}`}
															target={item?.buttonLink?.target}
															className={`${
																item?.buttonLink?.url
																	? "block mt-8 mx-auto"
																	: "hidden"
															}`}
														>
															<motion.div
																initial={initialTwo}
																whileInView={fadeIn}
																viewport={{once: true}}
																className={`py-4 pl-4 pr-10 w-full mx-auto cursor-pointer bg-primary-default hover:bg-primary-dark transition-all ease-in-out duration-500`}
															>
																<h3 className="font-semibold tracking-[0.10rem] uppercase pl-4 text-lightGrey text-tiny text-center lg:text-left">
																	{item?.buttonLink?.title}
																	<Image
																		width={550}
																		height={550}
																		alt="Black Arrow Icon"
																		src="/svg/navigation-menu-dropdown-arrow-white.svg"
																		className="my-auto ml-2 absolute top-[-20px] right-[-40px] rotate-[-135deg] cursor-pointer w-[35px] h-[35px] object-contain object-center"
																	/>
																</h3>
															</motion.div>
														</Link>
													</div>
												</div>
											</div>
										</SwiperSlide>
									</Fragment>
								))
							) : (
								<></>
							)}
						</Swiper>
					</div>
				</div>
			</div>
		</>
	);
};

export default GallerySlider;
