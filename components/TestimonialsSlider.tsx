// Imports
import Image from "next/image";
import React, {FC, Fragment} from "react";
import {useGlobalContext} from "@/context/global";

// Swiper.js Slider
import "swiper/css";
import "swiper/css/navigation";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";

// Styling
import styles from "../styles/components/Testimonials.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";

const TestimonialsSlider: FC = () => {
	const globalContext = useGlobalContext();

	return (
		<>
			<div
				className={
					styles.testimonialsSlider + ` px-0 py-8 overflow-x-hidden bg-white`
				}
			>
				<div className="md:container px-4 mx-auto">
					<div className="flex items-center">
						<Swiper
							navigation={true}
							spaceBetween={30}
							centeredSlides={true}
							modules={[Autoplay, Navigation]}
							autoplay={{
								delay: 6000,
								disableOnInteraction: false,
							}}
							className="mySwiper"
						>
							{globalContext?.testimonials?.length > 0 ? (
								globalContext?.testimonials?.map((item: any, keys: number) => (
									<Fragment key={keys}>
										<SwiperSlide>
											<div className="max-w-4xl mx-auto pb-28 lg:pb-0">
												<div className="lg:flex items-center justify-center">
													<div className="mb-8 lg:mb-0 lg:mr-24">
														<Image
															className={
																item?.node?.testimonialReview?.image?.sourceUrl
																	? "bg-lightGreyTwo mx-auto lg:mx-0 rounded-full w-20 h-20 mb-6 object-cover object-center"
																	: "hidden"
															}
															alt={`${item?.node?.testimonialReview?.image?.altText}`}
															src={
																item?.node?.testimonialReview?.image?.sourceUrl
																	? item?.node?.testimonialReview?.image
																			?.sourceUrl
																	: `/img/logos/default-avatar-profile.jpg`
															}
															width={
																item?.node?.testimonialReview?.image
																	?.mediaDetails?.width
																	? item?.node?.testimonialReview?.image
																			?.mediaDetails?.width
																	: 500
															}
															height={
																item?.node?.testimonialReview?.image
																	?.mediaDetails?.height
																	? item?.node?.testimonialReview?.image
																			?.mediaDetails?.height
																	: 500
															}
														/>
														<h3
															className={`text-primary-default text-lg lg:text-xl text-center lg:text-left font-semibold mb-1`}
														>
															{item?.node?.testimonialReview?.name}
														</h3>
														<h4
															className={
																item?.node?.testimonialReview?.position
																	? "text-base text-darkGrey text-center lg:text-left"
																	: "hidden"
															}
														>
															{item?.node?.testimonialReview?.position}
														</h4>
													</div>
													<Paragraph
														content={
															item?.node?.testimonialReview?.paragraph?.length >
															200
																? item?.node?.testimonialReview?.paragraph?.substring(
																		0,
																		200
																  ) + "..."
																: item?.node?.testimonialReview?.paragraph
														}
														tailwindStyling="max-w-full px-6 lg:px-0 sm:max-w-lg lg:max-w-md xl:max-w-xl mx-auto lg:mx-0 leading-7 text-base text-darkGrey text-center lg:text-left"
													/>
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

export default TestimonialsSlider;
