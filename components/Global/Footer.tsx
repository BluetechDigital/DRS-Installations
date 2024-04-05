// Imports
import {
	stagger,
	initial,
	fadeInUp,
	arrayLoopStaggerChildren,
} from "@/animations/animations";
import Link from "next/link";
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";

// Styling
import styles from "@/styles/components/Footer.module.scss";

// Components
import Paragraph from "@/components/Elements/Paragraph";

const Footer: FC = () => {
	const globalContext = useGlobalContext();

	return (
		<>
			<footer
				className="footer p-0 overflow-hidden bg-cover bg-center bg-no-repeat"
				style={{
					backgroundImage: `url(/svg/background/layered-waves-haikei-lightgrey-blue-right.svg)`,
				}}
			>
				<div className="md:container p-4 mx-auto">
					<div className="flex flex-col lg:flex-row items-center lg:items-start justify-between py-4 gap-16 lg:gap-4">
						<motion.div
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="flex flex-col items-center justify-center lg:items-start gap-2"
						>
							<Link href="/">
								<Image
									priority
									width={500}
									height={500}
									alt="DRS Installations Ltd Logo"
									src="/img/logos/drs-installations-logo.png"
									className="object-contain object-center mx-auto lg:mx-0 w-fit h-[75px]"
								/>
							</Link>
							<Paragraph
								content={globalContext?.themesOptionsContent?.textarea}
								tailwindStyling={
									globalContext?.themesOptionsContent?.textarea
										? "px-4 lg:px-0 max-w-full lg:max-w-lg text-base text-black text-center lg:text-left"
										: "hidden"
								}
							/>
							<Paragraph
								content={globalContext?.themesOptionsContent?.businessHours}
								tailwindStyling={
									globalContext?.themesOptionsContent?.businessHours
										? "block px-4 lg:px-0 max-w-full lg:max-w-xl text-base text-black text-center lg:text-left"
										: "hidden"
								}
							/>
						</motion.div>
						<div className="flex flex-col md:flex-row items-center lg:items-start justify-center gap-6 xl:gap-20">
							<div className="flex flex-col px-0">
								<h3 className="mb-5 text-lg font-semibold tracking-normal text-center text-black uppercase lg:text-left">
									About
								</h3>
								<motion.ul
									initial={initial}
									variants={stagger}
									whileInView="animate"
									viewport={{once: true}}
									className="flex flex-col w-auto gap-2 py-2 px-0 items-center justify-center lg:items-start"
								>
									{globalContext?.footerMenuLinks?.length > 0 ? (
										globalContext?.footerMenuLinks?.map(
											(item: any, keys: number) => (
												<Fragment key={keys}>
													<motion.li
														custom={keys}
														initial={initial}
														whileInView="animate"
														viewport={{once: true}}
														variants={arrayLoopStaggerChildren}
													>
														<Link
															href={`${item?.node?.url}`}
															target={`${item?.node?.target}`}
															aria-label={`${item?.node?.label}`}
															className="text-black transition-all duration-200 ease-in-out text-base hover:text-primary-default hover:border-b-2"
														>
															{item?.node?.label}
														</Link>
													</motion.li>
												</Fragment>
											)
										)
									) : (
										<></>
									)}
								</motion.ul>
							</div>
							<div className="flex flex-col px-0">
								<h3 className="mb-5 text-lg font-semibold tracking-normal text-center text-black lg:text-lightGreyTwo uppercase lg:text-left">
									Info
								</h3>
								<div className="flex flex-col items-center lg:items-baseline justify-between">
									<motion.div
										initial={initial}
										variants={stagger}
										whileInView="animate"
										viewport={{once: true}}
										className="flex flex-col items-center justify-between w-auto gap-2 py-4 lg:items-baseline"
									>
										<div
											className={
												globalContext?.themesOptionsContent?.email
													? "flex items-center justify-center gap-2"
													: "hidden"
											}
										>
											<div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-two sm:mr-1">
												<svg
													width="20"
													height="20"
													viewBox="0 0 20 20"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M2.5 6.66669L9.0755 11.0504C9.63533 11.4236 10.3647 11.4236 10.9245 11.0504L17.5 6.66669M4.16667 15.8334H15.8333C16.7538 15.8334 17.5 15.0872 17.5 14.1667V5.83335C17.5 4.91288 16.7538 4.16669 15.8333 4.16669H4.16667C3.24619 4.16669 2.5 4.91288 2.5 5.83335V14.1667C2.5 15.0872 3.24619 15.8334 4.16667 15.8334Z"
														stroke="#ffffff"
														strokeWidth="1.5"
														strokeLinecap="round"
														strokeLinejoin="round"
													></path>
												</svg>
											</div>
											<Link
												className="font-medium text-base tracking-wide text-black lg:text-lightGreyTwo hover:text-primary-two lg:hover:text-primary-darkerTwo hover:border-b-2"
												href={`mailto:${globalContext?.themesOptionsContent?.email}`}
												aria-label={`${globalContext?.themesOptionsContent?.email}`}
											>
												{globalContext?.themesOptionsContent?.email}
											</Link>
										</div>
										<div
											className={
												globalContext?.themesOptionsContent?.emailTwo
													? "flex items-center justify-center gap-2"
													: "hidden"
											}
										>
											<div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-two sm:mr-1">
												<svg
													width="20"
													height="20"
													fill="none"
													viewBox="0 0 20 20"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M2.5 6.66669L9.0755 11.0504C9.63533 11.4236 10.3647 11.4236 10.9245 11.0504L17.5 6.66669M4.16667 15.8334H15.8333C16.7538 15.8334 17.5 15.0872 17.5 14.1667V5.83335C17.5 4.91288 16.7538 4.16669 15.8333 4.16669H4.16667C3.24619 4.16669 2.5 4.91288 2.5 5.83335V14.1667C2.5 15.0872 3.24619 15.8334 4.16667 15.8334Z"
														stroke="#ffffff"
														strokeWidth="1.5"
														strokeLinecap="round"
														strokeLinejoin="round"
													></path>
												</svg>
											</div>
											<Link
												className="font-medium text-base tracking-wide text-black lg:text-lightGreyTwo hover:text-primary-two lg:hover:text-primary-darkerTwo hover:border-b-2"
												href={`mailto:${globalContext?.themesOptionsContent?.emailTwo}`}
											>
												{globalContext?.themesOptionsContent?.emailTwo}
											</Link>
										</div>
										<div
											className={
												globalContext?.themesOptionsContent?.phoneNumber
													? "flex items-center justify-center gap-2"
													: "hidden"
											}
										>
											<div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-two sm:mr-1">
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
											<Link
												className="font-medium text-base tracking-wide text-black lg:text-lightGreyTwo hover:text-primary-two lg:hover:text-primary-darkerTwo hover:border-b-2"
												href={`tel:${globalContext?.themesOptionsContent?.phoneNumber}`}
												aria-label={`${globalContext?.themesOptionsContent?.phoneNumber}`}
											>
												{globalContext?.themesOptionsContent?.phoneNumber}
											</Link>
										</div>
										<div
											className={
												globalContext?.themesOptionsContent?.phoneNumberTwo
													? "flex items-center justify-center gap-2"
													: "hidden"
											}
										>
											<div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-two sm:mr-1">
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
											<Link
												className="font-medium text-base tracking-wide text-black lg:text-lightGreyTwo hover:text-primary-two lg:hover:text-primary-darkerTwo hover:border-b-2"
												href={`tel:${globalContext?.themesOptionsContent?.phoneNumberTwo}`}
											>
												{globalContext?.themesOptionsContent?.phoneNumberTwo}
											</Link>
										</div>
									</motion.div>
									<div className="hidden lg:flex items-center justify-center my-4 gap-4 text-center">
										<Link
											href={`${globalContext?.themesOptionsContent?.facebookLink?.url}`}
											aria-label={`Facebook Social Media Link ${globalContext?.themesOptionsContent?.facebookLink?.title}`}
											target={
												globalContext?.themesOptionsContent?.facebookLink
													?.target
											}
											className={
												globalContext?.themesOptionsContent?.facebookLink?.url
													? "inline-block px-1 hover:opacity-70"
													: "hidden"
											}
										>
											<svg
												height="100%"
												className="w-5 h-5"
												style={{
													fill: "#ffffff",
													fillRule: "evenodd",
													clipRule: "evenodd",
													strokeLinejoin: "round",
													strokeMiterlimit: "2",
												}}
												version="1.1"
												viewBox="0 0 512 512"
												width="100%"
											>
												<path
													d="M512,257.555c0,-141.385 -114.615,-256 -256,-256c-141.385,0 -256,114.615 -256,256c0,127.777 93.616,233.685 216,252.89l0,-178.89l-65,0l0,-74l65,0l0,-56.4c0,-64.16 38.219,-99.6 96.695,-99.6c28.009,0 57.305,5 57.305,5l0,63l-32.281,0c-31.801,0 -41.719,19.733 -41.719,39.978l0,48.022l71,0l-11.35,74l-59.65,0l0,178.89c122.385,-19.205 216,-125.113 216,-252.89Z"
													style={{fillRule: "nonzero"}}
												/>
											</svg>
										</Link>
										<Link
											href={`${globalContext?.themesOptionsContent?.twitterLink?.url}`}
											aria-label={`Twitter Social Media Link ${globalContext?.themesOptionsContent?.twitterLink?.title}`}
											target={
												globalContext?.themesOptionsContent?.twitterLink?.target
											}
											className={
												globalContext?.themesOptionsContent?.twitterLink?.url
													? "inline-block px-1 hover:opacity-70"
													: "hidden"
											}
										>
											<svg
												height="100%"
												className="w-5 h-5"
												style={{
													fill: "#ffffff",
													fillRule: "evenodd",
													clipRule: "evenodd",
													strokeLinejoin: "round",
													strokeMiterlimit: "2",
												}}
												version="1.1"
												viewBox="0 0 512 512"
												width="100%"
											>
												<path
													d="M161.014,464.013c193.208,0 298.885,-160.071 298.885,-298.885c0,-4.546 0,-9.072 -0.307,-13.578c20.558,-14.871 38.305,-33.282 52.408,-54.374c-19.171,8.495 -39.51,14.065 -60.334,16.527c21.924,-13.124 38.343,-33.782 46.182,-58.102c-20.619,12.235 -43.18,20.859 -66.703,25.498c-19.862,-21.121 -47.602,-33.112 -76.593,-33.112c-57.682,0 -105.145,47.464 -105.145,105.144c0,8.002 0.914,15.979 2.722,23.773c-84.418,-4.231 -163.18,-44.161 -216.494,-109.752c-27.724,47.726 -13.379,109.576 32.522,140.226c-16.715,-0.495 -33.071,-5.005 -47.677,-13.148l0,1.331c0.014,49.814 35.447,93.111 84.275,102.974c-15.464,4.217 -31.693,4.833 -47.431,1.802c13.727,42.685 53.311,72.108 98.14,72.95c-37.19,29.227 -83.157,45.103 -130.458,45.056c-8.358,-0.016 -16.708,-0.522 -25.006,-1.516c48.034,30.825 103.94,47.18 161.014,47.104"
													style={{fillRule: "nonzero"}}
												/>
											</svg>
										</Link>
										<Link
											href={`${globalContext?.themesOptionsContent?.linkedinLink?.url}`}
											aria-label={`Linkedin Social Media Link ${globalContext?.themesOptionsContent?.linkedinLink?.title}`}
											target={
												globalContext?.themesOptionsContent?.linkedinLink
													?.target
											}
											className={
												globalContext?.themesOptionsContent?.linkedinLink?.url
													? "inline-block px-1 hover:opacity-70"
													: "hidden"
											}
										>
											<svg
												fill="#ffffff"
												version="1.1"
												id="Layer_1"
												className="w-5 h-5"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="-143 145 512 512"
											>
												<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
												<g
													id="SVGRepo_tracerCarrier"
													strokeLinecap="round"
													strokeLinejoin="round"
												></g>
												<g id="SVGRepo_iconCarrier">
													{" "}
													<g>
														{" "}
														<path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M272.8,560.7 c-20.8,20.8-44.9,37.1-71.8,48.4c-27.8,11.8-57.4,17.7-88,17.7c-30.5,0-60.1-6-88-17.7c-26.9-11.4-51.1-27.7-71.8-48.4 c-20.8-20.8-37.1-44.9-48.4-71.8C-107,461.1-113,431.5-113,401s6-60.1,17.7-88c11.4-26.9,27.7-51.1,48.4-71.8 c20.9-20.8,45-37.1,71.9-48.5C52.9,181,82.5,175,113,175s60.1,6,88,17.7c26.9,11.4,51.1,27.7,71.8,48.4 c20.8,20.8,37.1,44.9,48.4,71.8c11.8,27.8,17.7,57.4,17.7,88c0,30.5-6,60.1-17.7,88C309.8,515.8,293.5,540,272.8,560.7z"></path>{" "}
														<rect
															x="-8.5"
															y="348.4"
															width="49.9"
															height="159.7"
														></rect>{" "}
														<path d="M15.4,273c-18.4,0-30.5,11.9-30.5,27.7c0,15.5,11.7,27.7,29.8,27.7h0.4c18.8,0,30.5-12.3,30.4-27.7 C45.1,284.9,33.8,273,15.4,273z"></path>{" "}
														<path d="M177.7,346.9c-28.6,0-46.5,15.6-49.8,26.6v-25.1H71.8c0.7,13.3,0,159.7,0,159.7h56.1v-86.3c0-4.9-0.2-9.7,1.2-13.1 c3.8-9.6,12.1-19.6,27-19.6c19.5,0,28.3,14.8,28.3,36.4v82.6H241v-88.8C241,369.9,213.2,346.9,177.7,346.9z"></path>{" "}
													</g>{" "}
												</g>
											</svg>
										</Link>
										<Link
											href={`${globalContext?.themesOptionsContent?.instagramLink?.url}`}
											aria-label={`Instagram Social Media Link ${globalContext?.themesOptionsContent?.instagramLink?.title}`}
											target={
												globalContext?.themesOptionsContent?.instagramLink
													?.target
											}
											className={
												globalContext?.themesOptionsContent?.instagramLink?.url
													? "inline-block px-1 hover:opacity-70"
													: "hidden"
											}
										>
											<svg
												viewBox="0 0 24 24"
												className="w-5 h-5"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
												<g
													id="SVGRepo_tracerCarrier"
													strokeLinecap="round"
													strokeLinejoin="round"
												></g>
												<g id="SVGRepo_iconCarrier">
													<path
														fillRule="evenodd"
														clipRule="evenodd"
														d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
														fill="#ffffff"
													></path>{" "}
													<path
														d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
														fill="#ffffff"
													></path>{" "}
													<path
														fillRule="evenodd"
														clipRule="evenodd"
														d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
														fill="#ffffff"
													></path>
												</g>
											</svg>
										</Link>
									</div>
									<div className="flex lg:hidden items-center justify-center my-4 gap-4 text-center">
										<Link
											href={`${globalContext?.themesOptionsContent?.facebookLink?.url}`}
											aria-label={`Facebook Social Media Link ${globalContext?.themesOptionsContent?.facebookLink?.title}`}
											target={
												globalContext?.themesOptionsContent?.facebookLink
													?.target
											}
											className={
												globalContext?.themesOptionsContent?.facebookLink?.url
													? "inline-block px-1 hover:opacity-70"
													: "hidden"
											}
										>
											<svg
												height="100%"
												className="w-5 h-5"
												style={{
													fill: "#111",
													fillRule: "evenodd",
													clipRule: "evenodd",
													strokeLinejoin: "round",
													strokeMiterlimit: "2",
												}}
												version="1.1"
												viewBox="0 0 512 512"
												width="100%"
											>
												<path
													d="M512,257.555c0,-141.385 -114.615,-256 -256,-256c-141.385,0 -256,114.615 -256,256c0,127.777 93.616,233.685 216,252.89l0,-178.89l-65,0l0,-74l65,0l0,-56.4c0,-64.16 38.219,-99.6 96.695,-99.6c28.009,0 57.305,5 57.305,5l0,63l-32.281,0c-31.801,0 -41.719,19.733 -41.719,39.978l0,48.022l71,0l-11.35,74l-59.65,0l0,178.89c122.385,-19.205 216,-125.113 216,-252.89Z"
													style={{fillRule: "nonzero"}}
												/>
											</svg>
										</Link>
										<Link
											href={`${globalContext?.themesOptionsContent?.twitterLink?.url}`}
											aria-label={`Twitter Social Media Link ${globalContext?.themesOptionsContent?.twitterLink?.title}`}
											target={
												globalContext?.themesOptionsContent?.twitterLink?.target
											}
											className={
												globalContext?.themesOptionsContent?.twitterLink?.url
													? "inline-block px-1 hover:opacity-70"
													: "hidden"
											}
										>
											<svg
												height="100%"
												className="w-5 h-5"
												style={{
													fill: "#111",
													fillRule: "evenodd",
													clipRule: "evenodd",
													strokeLinejoin: "round",
													strokeMiterlimit: "2",
												}}
												version="1.1"
												viewBox="0 0 512 512"
												width="100%"
											>
												<path
													d="M161.014,464.013c193.208,0 298.885,-160.071 298.885,-298.885c0,-4.546 0,-9.072 -0.307,-13.578c20.558,-14.871 38.305,-33.282 52.408,-54.374c-19.171,8.495 -39.51,14.065 -60.334,16.527c21.924,-13.124 38.343,-33.782 46.182,-58.102c-20.619,12.235 -43.18,20.859 -66.703,25.498c-19.862,-21.121 -47.602,-33.112 -76.593,-33.112c-57.682,0 -105.145,47.464 -105.145,105.144c0,8.002 0.914,15.979 2.722,23.773c-84.418,-4.231 -163.18,-44.161 -216.494,-109.752c-27.724,47.726 -13.379,109.576 32.522,140.226c-16.715,-0.495 -33.071,-5.005 -47.677,-13.148l0,1.331c0.014,49.814 35.447,93.111 84.275,102.974c-15.464,4.217 -31.693,4.833 -47.431,1.802c13.727,42.685 53.311,72.108 98.14,72.95c-37.19,29.227 -83.157,45.103 -130.458,45.056c-8.358,-0.016 -16.708,-0.522 -25.006,-1.516c48.034,30.825 103.94,47.18 161.014,47.104"
													style={{fillRule: "nonzero"}}
												/>
											</svg>
										</Link>
										<Link
											href={`${globalContext?.themesOptionsContent?.linkedinLink?.url}`}
											aria-label={`Linkedin Social Media Link ${globalContext?.themesOptionsContent?.linkedinLink?.title}`}
											target={
												globalContext?.themesOptionsContent?.linkedinLink
													?.target
											}
											className={
												globalContext?.themesOptionsContent?.linkedinLink?.url
													? "inline-block px-1 hover:opacity-70"
													: "hidden"
											}
										>
											<svg
												fill="#111"
												version="1.1"
												id="Layer_1"
												className="w-5 h-5"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="-143 145 512 512"
											>
												<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
												<g
													id="SVGRepo_tracerCarrier"
													strokeLinecap="round"
													strokeLinejoin="round"
												></g>
												<g id="SVGRepo_iconCarrier">
													{" "}
													<g>
														{" "}
														<path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M272.8,560.7 c-20.8,20.8-44.9,37.1-71.8,48.4c-27.8,11.8-57.4,17.7-88,17.7c-30.5,0-60.1-6-88-17.7c-26.9-11.4-51.1-27.7-71.8-48.4 c-20.8-20.8-37.1-44.9-48.4-71.8C-107,461.1-113,431.5-113,401s6-60.1,17.7-88c11.4-26.9,27.7-51.1,48.4-71.8 c20.9-20.8,45-37.1,71.9-48.5C52.9,181,82.5,175,113,175s60.1,6,88,17.7c26.9,11.4,51.1,27.7,71.8,48.4 c20.8,20.8,37.1,44.9,48.4,71.8c11.8,27.8,17.7,57.4,17.7,88c0,30.5-6,60.1-17.7,88C309.8,515.8,293.5,540,272.8,560.7z"></path>{" "}
														<rect
															x="-8.5"
															y="348.4"
															width="49.9"
															height="159.7"
														></rect>{" "}
														<path d="M15.4,273c-18.4,0-30.5,11.9-30.5,27.7c0,15.5,11.7,27.7,29.8,27.7h0.4c18.8,0,30.5-12.3,30.4-27.7 C45.1,284.9,33.8,273,15.4,273z"></path>{" "}
														<path d="M177.7,346.9c-28.6,0-46.5,15.6-49.8,26.6v-25.1H71.8c0.7,13.3,0,159.7,0,159.7h56.1v-86.3c0-4.9-0.2-9.7,1.2-13.1 c3.8-9.6,12.1-19.6,27-19.6c19.5,0,28.3,14.8,28.3,36.4v82.6H241v-88.8C241,369.9,213.2,346.9,177.7,346.9z"></path>{" "}
													</g>{" "}
												</g>
											</svg>
										</Link>
										<Link
											href={`${globalContext?.themesOptionsContent?.instagramLink?.url}`}
											aria-label={`Instagram Social Media Link ${globalContext?.themesOptionsContent?.instagramLink?.title}`}
											target={
												globalContext?.themesOptionsContent?.instagramLink
													?.target
											}
											className={
												globalContext?.themesOptionsContent?.instagramLink?.url
													? "inline-block px-1 hover:opacity-70"
													: "hidden"
											}
										>
											<svg
												viewBox="0 0 24 24"
												className="w-5 h-5"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
												<g
													id="SVGRepo_tracerCarrier"
													strokeLinecap="round"
													strokeLinejoin="round"
												></g>
												<g id="SVGRepo_iconCarrier">
													<path
														fillRule="evenodd"
														clipRule="evenodd"
														d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
														fill="#111"
													></path>{" "}
													<path
														d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
														fill="#111"
													></path>{" "}
													<path
														fillRule="evenodd"
														clipRule="evenodd"
														d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
														fill="#111"
													></path>
												</g>
											</svg>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="py-4 my-0">
					<div className="md:container px-4 mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">
						<motion.div
							initial={initial}
							variants={stagger}
							whileInView="animate"
							viewport={{once: true}}
							className="w-auto py-2"
						>
							<Paragraph
								content={globalContext?.themesOptionsContent?.copyrightText}
								tailwindStyling="max-w-full lg:max-w-lg text-black text-tiny text-center lg:text-left"
							/>
							<Link
								className="lg:inline-block items-center justify-center mt-2 px-1 text-black hover:text-primary-default hover:border-b-2"
								href={`https://bluetech-digital.co.uk`}
								target="_blank"
								aria-label="Bluetech Digital Ltd Website Link"
							>
								<span className="flex items-center justify-center lg:justify-left gap-2">
									<Image
										priority
										width={500}
										height={500}
										alt="BluetechDigital Logo"
										src="/img/logos/BluetechDigital-Logo-color.png"
										className="object-contain object-center w-[25px] h-[25px]"
									/>
									<Paragraph
										content={`Website by BluetechDigital`}
										tailwindStyling="w-fit lg:w-full text-tiny text-center lg:text-left"
									/>
								</span>
							</Link>
						</motion.div>
						<ul className="flex flex-col sm:flex-row w-auto gap-4 lg:gap-2 sm:gap-16 p-6">
							{globalContext?.copyrightLinks?.length > 0 ? (
								globalContext?.copyrightLinks?.map(
									(item: any, keys: number) => (
										<Fragment key={keys}>
											<motion.li
												custom={keys}
												initial={initial}
												whileInView="animate"
												viewport={{once: true}}
												variants={arrayLoopStaggerChildren}
											>
												<Link
													href={`${item?.node?.url}`}
													target={`${item?.node?.target}`}
													aria-label={`${item?.node?.label}`}
													className="text-black lg:text-lightGreyTwo transition-all duration-200 ease-in-out text-tiny hover:text-primary-darkerTwo hover:border-b-2"
												>
													{item?.node?.label}
												</Link>
											</motion.li>
										</Fragment>
									)
								)
							) : (
								<></>
							)}
						</ul>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
