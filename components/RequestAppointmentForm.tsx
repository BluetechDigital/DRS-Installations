"use client";

// Imports
import {
	fadeIn,
	initial,
	stagger,
	fadeInUp,
	initialTwo,
} from "@/animations/animations";
import Link from "next/link";
import {motion} from "framer-motion";
import {useRouter} from "next/router";
import React, {useState, FC} from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {useGlobalContext} from "@/context/global";
import {sendContactForm} from "@/lib/contactForm";
import {useFormik, Formik, Field, Form} from "formik";
import {IRequestAppointmentForm} from "@/types/components";

// Styling
import styles from "@/styles/components/RequestAppointmentForm.module.scss";

// Components
import Title from "./Elements/Title";
import Paragraph from "./Elements/Paragraph";

const RequestAppointmentForm: FC<IRequestAppointmentForm> = ({
	title,
	subtitle,
	paragraph,
	buttonLink,
}) => {
	const router = useRouter();
	const globalContext = useGlobalContext();

	// Loading, Send & Error Message States
	const [loading, setLoading] = useState(false);
	const [messageSent, setMessageSent] = useState(false);
	const [errorMessage, setErrorMessage] = useState(false);

	// A custom validation function. This must return an object
	// which keys are symmetrical to our values/initialValues
	const validate: any = (values: any) => {
		const errors: any = {};
		if (!values?.fullName) {
			errors.fullName = "Required*";
		} else if (values?.fullName.length >= 26) {
			errors.fullName = "Must be 25 characters or less";
		}

		if (!values?.phoneNumber) {
			errors.phoneNumber = "Required*";
		} else if (values?.phoneNumber.length < 1) {
			errors.phoneNumber = "Please inform us about the topic.";
		}

		if (!values?.subject) {
			errors.subject = "Required*";
		} else if (values?.subject.length <= 0) {
			errors.subject = "Please inform us about the topic.";
		}

		if (!values?.message) {
			errors.message = "Required*";
		} else if (values?.message.length <= 0) {
			errors.message = "Please tell us about your Inquiry.";
		}

		return errors;
	};

	// Google ReCaptcha Validation
	const [reCaptchaResult, setReCaptchaResult] = useState(null);
	const googleReCaptchaValidate = (value: any) => {
		return value;
	};

	const handleReCaptchaChange = (response: any) => {
		const result = googleReCaptchaValidate(response);
		setReCaptchaResult(result);
	};

	/* Contact Form Fields
	And Initial Values */
	const formik: any = useFormik({
		initialValues: {
			fullName: "",
			phoneNumber: "",
			subject: "",
			message: "",
		},
		validate,
		onSubmit: async (values: any) => {
			if (reCaptchaResult) {
				try {
					console.log(values);
					await sendContactForm(values);
				} catch (error) {
					setErrorMessage(true);
					throw new Error(
						"Error Message: Something went wrong with Sending your Message. Please try again."
					);
				}
			} else {
				throw new Error(
					"Error Message: Something went wrong with your Google Recaptcha validation. Please try again."
				);
			}
		},
	});

	// Form Submission
	const onFormSubmit = (event: any) => {
		event.preventDefault();
		setErrorMessage(false);
		if (reCaptchaResult) {
			try {
				setLoading(true);
				/* Send Form Content */
				formik.handleSubmit();
				setLoading(false);
				setMessageSent(true);
				setTimeout(() => {
					router.reload();
				}, 3000);
			} catch (error) {
				setErrorMessage(true);
				throw new Error(
					"Error Message: Something went wrong with Sending your Message. Please try again."
				);
			}
		} else {
			throw new Error(
				"Error Message: Something went wrong with your Google Recaptcha validation. Please try again."
			);
		}
	};

	return (
		<>
			<div
				id="requestAppointmentForm"
				className={
					styles.requestAppointmentForm +
					" px-4 py-10 bg-white requestAppointmentForm bg-cover bg-no-repeat bg-center"
				}
				style={{
					backgroundImage: `url("/svg/background/layered-waves-haikei-lightgrey-three.svg")`,
				}}
			>
				<div className="lg:container mx-auto px-0 flex flex-col lg:flex-row items-baseline justify-between gap-8">
					<div className="flex flex-col items-center justify-center lg:items-baseline w-full">
						<motion.div
							initial={initial}
							variants={stagger}
							whileInView="animate"
							viewport={{once: true}}
							className="mb-4"
						>
							<motion.h4
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="text-center lg:text-left text-base text-primary-default"
							>
								{subtitle}
							</motion.h4>
							<Title
								content={title}
								tailwindStyling="title my-3 max-w-xl mx-auto lg:mx-0 text-black uppercase font-tonnelier leading-[2.25rem] text-center lg:text-left text-lg sm:text-3xl"
							/>
							<Paragraph
								content={paragraph}
								tailwindStyling="max-w-xl mx-auto xl:mx-0 text-black text-base text-center lg:text-left"
							/>
						</motion.div>
						<div className="flex flex-col lg:flex-row gap-8 items-center justify-center lg:gap-12 lg:justify-start">
							<Link
								href={`${buttonLink?.url}`}
								aria-label={`${buttonLink?.title}`}
								target={buttonLink?.target}
								className={`hidden py-4 px-6 w-1/3 cursor-pointer rounded-full bg-primary-default hover:bg-primary-dark transition-all ease-in-out duration-500 font-semibold  uppercase text-lightGrey text-base text-center font-tonnelier ${
									buttonLink?.url ? "lg:block" : "lg:hidden"
								}`}
							>
								{buttonLink?.title}
							</Link>
							<motion.div
								initial={initial}
								variants={stagger}
								whileInView="animate"
								viewport={{once: true}}
								className="flex items-center"
							>
								<div className="flex flex-shrink-0 mr-5  items-center justify-center p-1 w-10 h-10 rounded-full bg-primary-default">
									<svg
										viewBox="0 0 24 24"
										fill="none"
										className="w-5 h-5"
										xmlns="http://www.w3.org/2000/svg"
									>
										<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
										<g
											id="SVGRepo_tracerCarrier"
											strokeLinecap="round"
											strokeLinejoin="round"
										></g>
										<g id="SVGRepo_iconCarrier">
											{" "}
											<path
												d="M14.5 6.5C15.2372 6.64382 15.9689 6.96892 16.5 7.5C17.0311 8.03108 17.3562 8.76284 17.5 9.5M15 3C16.5315 3.17014 17.9097 3.91107 19 5C20.0903 6.08893 20.8279 7.46869 21 9M20.9995 16.4767V19.1864C21.0037 20.2223 20.0723 21.0873 19.0265 20.9929C10.0001 21 3.00006 13.935 3.00713 4.96919C2.91294 3.92895 3.77364 3.00106 4.80817 3.00009H7.52331C7.96253 2.99577 8.38835 3.151 8.72138 3.43684C9.66819 4.24949 10.2772 7.00777 10.0429 8.10428C9.85994 8.96036 8.99696 9.55929 8.41026 10.1448C9.69864 12.4062 11.5747 14.2785 13.8405 15.5644C14.4272 14.9788 15.0274 14.1176 15.8851 13.935C16.9855 13.7008 19.7615 14.3106 20.5709 15.264C20.858 15.6021 21.0105 16.0337 20.9995 16.4767Z"
												stroke="#ffffff"
												strokeWidth="1.5"
												strokeLinecap="round"
												strokeLinejoin="round"
											></path>{" "}
										</g>
									</svg>
								</div>
								<motion.div
									initial={initial}
									variants={stagger}
									whileInView="animate"
									viewport={{once: true}}
									className="max-w-xl mx-auto sm:mx-0"
								>
									<Link
										className="flex items-center gap-3 text-tiny sm:text-base text-center sm:text-left"
										href={`tel:${globalContext?.themesOptionsContent?.phoneNumber}`}
										aria-label={`${globalContext?.themesOptionsContent?.phoneNumber}`}
									>
										<span className="font-semibold uppercase font-tonnelier">
											Office:{" "}
										</span>
										<span className="text-black hover:text-primary-default hover:border-b-2">
											{globalContext?.themesOptionsContent?.phoneNumber}
										</span>
									</Link>
									<Link
										className="flex items-center gap-3 text-tiny sm:text-base text-center sm:text-left"
										href={`tel:${globalContext?.themesOptionsContent?.phoneNumberTwo}`}
									>
										<span className="font-semibold uppercase font-tonnelier">
											David:{" "}
										</span>
										<span className="text-black hover:text-primary-default hover:border-b-2">
											{globalContext?.themesOptionsContent?.phoneNumberTwo}
										</span>
									</Link>
									<Link
										className="flex items-center gap-3 text-tiny sm:text-base text-center sm:text-left"
										href={`tel:${globalContext?.themesOptionsContent?.phoneNumberThree}`}
									>
										<span className="font-semibold uppercase font-tonnelier">
											Tony:{" "}
										</span>
										<span className="text-black hover:text-primary-default hover:border-b-2">
											{globalContext?.themesOptionsContent?.phoneNumberThree}
										</span>
									</Link>
								</motion.div>
							</motion.div>
						</div>
					</div>
					<Formik
						onSubmit={formik?.onSubmit}
						initialValues={formik?.initialValues}
					>
						<Form className="py-6 px-12 xl:mr-8 w-full rounded-lg bg-primary-default max-w-full lg:max-w-md xl:max-w-xl">
							{loading ? (
								<motion.div
									initial={initialTwo}
									whileInView={fadeIn}
									viewport={{once: true}}
									className="flex items-center justify-center my-4 mb-8 gap-x-2"
								>
									<h3 className="text-xl font-semibold uppercase font-tonnelier text-white">
										Sending Message...
									</h3>
								</motion.div>
							) : messageSent ? (
								<motion.div
									initial={initialTwo}
									whileInView={fadeIn}
									viewport={{once: true}}
									className="flex items-center justify-center my-4 mb-8 gap-x-2"
								>
									<h3 className="text-xl font-semibold text-center uppercase font-tonnelier text-white">
										Message Sent!
									</h3>
								</motion.div>
							) : errorMessage ? (
								<motion.div
									initial={initialTwo}
									whileInView={fadeIn}
									viewport={{once: true}}
									className="flex items-center justify-center my-4 mb-8 gap-x-2"
								>
									<h3 className="text-xl font-semibold text-center uppercase font-tonnelier text-white">
										Error Message: Something went wrong with sending your
										message. Please try again.
									</h3>
								</motion.div>
							) : (
								<motion.div
									initial={initialTwo}
									whileInView={fadeIn}
									viewport={{once: true}}
									className="mb-6"
								>
									<motion.h3
										initial={initial}
										whileInView={fadeInUp}
										viewport={{once: true}}
										className="my-3 max-w-xl mx-auto xl:mx-0 uppercase font-tonnelier text-white text-center lg:text-left font-semibold text-lg md:text-lg"
									>
										We Promise to Fast-track your safety
									</motion.h3>
								</motion.div>
							)}

							<motion.div
								initial={initial}
								variants={stagger}
								whileInView="animate"
								viewport={{once: true}}
								className="flex flex-col gap-4"
							>
								<div className="flex flex-col md:flex-row gap-4">
									<motion.div
										initial={initial}
										whileInView={fadeInUp}
										viewport={{once: true}}
										className="w-full"
									>
										{formik?.touched?.fullName && formik?.errors?.fullName ? (
											<div>
												<p className="py-1 text-left text-tiny md:text-base text-white">
													{formik?.errors?.fullName}
												</p>
											</div>
										) : null}
										<Field
											id="fullName"
											name="fullName"
											placeholder="Full Name"
											onBlur={formik?.handleBlur}
											onChange={formik?.handleChange}
											value={formik?.values?.fullName}
											className="px-4 py-3 w-full text-tiny md:text-base text-black placeholder-black bg-white bg-opacity-90 outline-none border-[1px] border-primary-default active:border-primary-darker focus:border-primary-darker focus:ring-[1px] focus:ring-primary-darker"
										/>
									</motion.div>
									<motion.div
										initial={initial}
										whileInView={fadeInUp}
										viewport={{once: true}}
										className="w-full"
									>
										{formik?.touched?.phoneNumber &&
										formik?.errors?.phoneNumber ? (
											<div>
												<p className="py-1 text-left text-tiny md:text-base text-white">
													{formik?.errors?.phoneNumber}
												</p>
											</div>
										) : null}
										<Field
											id="phoneNumber"
											name="phoneNumber"
											type="number"
											placeholder="Phone Number"
											onBlur={formik?.handleBlur}
											onChange={formik?.handleChange}
											value={formik?.values?.phoneNumber}
											className="px-4 py-3 w-full text-tiny md:text-base text-black placeholder-black bg-white bg-opacity-90 outline-none border-[1px] border-primary-default active:border-primary-darker focus:border-primary-darker focus:ring-[1px] focus:ring-primary-darker"
										/>
									</motion.div>
								</div>
								<motion.div
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className="w-full"
								>
									{formik?.touched?.subject && formik?.errors?.subject ? (
										<div>
											<p className="py-1 text-left text-tiny md:text-base text-white">
												{formik?.errors?.subject}
											</p>
										</div>
									) : null}
									<Field
										id="subject"
										name="subject"
										type="text"
										placeholder="Subject"
										onBlur={formik?.handleBlur}
										onChange={formik?.handleChange}
										value={formik?.values?.subject}
										className="px-4 py-3 w-full text-tiny md:text-base text-black placeholder-black bg-white bg-opacity-90 outline-none border-[1px] border-primary-default active:border-primary-darker focus:border-primary-darker focus:ring-[1px] focus:ring-primary-darker"
									/>
								</motion.div>
								<motion.div
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
								>
									{formik?.touched?.message && formik?.errors?.message ? (
										<div>
											<p className="py-1 text-left text-tiny md:text-base text-white">
												{formik?.errors?.message}
											</p>
										</div>
									) : null}
									<textarea
										rows={5}
										id="message"
										name="message"
										placeholder="Your message"
										onBlur={formik?.handleBlur}
										onChange={formik?.handleChange}
										value={formik?.values?.message}
										className="p-4 w-full h-32 text-tiny md:text-base text-black placeholder-black bg-white bg-opacity-90 outline-none border-[1px] border-primary-default active:border-primary-darker focus:border-primary-darker resize-none focus:ring-[1px] focus:ring-primary-darker"
									/>
								</motion.div>
								<motion.div
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className={
										formik?.touched?.fullName ||
										formik?.touched?.lastName ||
										formik?.touched?.email
											? "block"
											: "hidden"
									}
								>
									<ReCAPTCHA
										sitekey={`6LfF-pwpAAAAAGNKKz5Ae7Cbh18aLprnrq3r-ZEe`}
										onChange={handleReCaptchaChange}
									/>
								</motion.div>
								<motion.button
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									onClick={onFormSubmit}
									disabled={
										!formik?.values?.fullName ||
										!formik?.values?.lastName ||
										!formik?.values?.email ||
										!formik?.values?.phoneNumber ||
										!formik?.values?.selectedServices ||
										!formik?.values?.subject ||
										!formik?.values?.message ||
										reCaptchaResult === null ||
										reCaptchaResult === undefined
									}
									className="w-fit mx-auto lg:mx-0 text-white font-semibold tracking-wide disabled:bg-opacity-20 disabled:cursor-not-allowed"
									type="submit"
								>
									<span
										className={
											messageSent
												? `${styles.messageSent}`
												: `${styles.submitButton}`
										}
									>
										<span className="tracking-widest text-white uppercase font-tonnelier text-sm">
											{loading
												? "Sending Message..."
												: messageSent
												? "Message Sent!"
												: errorMessage
												? "Sending Error!"
												: "Request A Quote"}
										</span>
									</span>
								</motion.button>
							</motion.div>
						</Form>
					</Formik>
				</div>
			</div>
		</>
	);
};

export default RequestAppointmentForm;
