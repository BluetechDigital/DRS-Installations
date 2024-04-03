"use client";

// Imports
import {
	fadeIn,
	initial,
	initialTwo,
	arrayLoopStaggerChildren,
} from "@/animations/animations";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {useState, FC, Fragment} from "react";
import {useGlobalContext} from "@/context/global";

// Styling
import styles from "./../../styles/components/Navbar.module.scss";

// Components
import SideMenu from "../Elements/SideMenu";
import NoticeInfoBanner from "../NoticeInfoBanner";

const Navbar: FC = () => {
	const globalContext = useGlobalContext();

	// Display all sublinks & Mobile Links
	const [menuActive, setMenuActive] = useState(false);
	const [navBackgroundSublinksOpen, setNavBackgroundSublinksOpen]: any =
		useState(false);
	const [ourServicesSublinksOpen, setOurServicesSublinksOpen]: any =
		useState(false);

	/* Hides or Displays the Full Nav Menu */
	const toggleMenu = () => {
		setMenuActive(!menuActive);
	};

	/* Display's Navbar background Color
	when Mega sublinks are hover*/
	const displayNavBackgroundColor = () => {
		setNavBackgroundSublinksOpen(!navBackgroundSublinksOpen);
	};

	// Hides or Display Our Services sublinks
	const displayOurServicesSublinks = () => {
		setOurServicesSublinksOpen(!ourServicesSublinksOpen);
	};

	const resetNavbarStyling = () => {
		setNavBackgroundSublinksOpen(false);
		setOurServicesSublinksOpen(false);
	};

	return (
		<>
			<nav className={styles.navbar + ` z-[999] h-fit w-full fixed`}>
				<NoticeInfoBanner />
				<div className="flex p-0 bg-white">
					<div className="w-full container mx-auto px-4 bg-white">
						<Link href="/">
							<Image
								priority
								width={500}
								height={500}
								alt="DRS Installations Ltd Logo"
								src="/img/logos/drs-installations-logo.png"
								className="object-contain object-center w-[100px] h-[65px]"
							/>
						</Link>
					</div>
					<div className="w-full flex items-center justify-center gap-8 2xl:gap-12 xl:gap-24">
						<div className="hidden lg:flex items-center justify-end">
							<div className="hidden xl:flex items-center gap-8">
								<ul className="flex lg:items-center">
									{globalContext?.navbarMenuLinks?.length > 0 ? (
										globalContext?.navbarMenuLinks?.map(
											(item: any, keys: number) => (
												<Fragment key={keys}>
													{item?.node?.url === "/services" ? (
														<motion.li
															custom={keys}
															initial={initial}
															whileInView="animate"
															viewport={{once: true}}
															variants={arrayLoopStaggerChildren}
															className="relative group py-0 px-2"
														>
															<div className="w-full flex flex-row justify-center items-center gap-2 cursor-pointer">
																<Link
																	href={`${item?.node?.url}`}
																	target={item?.node?.target}
																	onClick={resetNavbarStyling}
																>
																	<h3 className="font-semibold text-pureBlack group-hover:text-primary-two text-base text-center uppercase">
																		{item?.node?.label}
																	</h3>
																</Link>
																<Image
																	width={550}
																	height={550}
																	alt="Black Arrow Icon"
																	onClick={displayOurServicesSublinks}
																	src="/svg/navigation-menu-dropdown-arrow-black.svg"
																	className={`${
																		ourServicesSublinksOpen
																			? "rotate-180"
																			: "rotate-0"
																	} cursor-pointer w-[22px] h-[22px] object-contain object-center`}
																/>
															</div>
															{ourServicesSublinksOpen ? (
																<>
																	<div
																		onMouseLeave={resetNavbarStyling}
																		onMouseEnter={displayNavBackgroundColor}
																	>
																		<div className="fixed mt-[1.3rem] w-fit mx-auto left-0 right-0 bg-white flex flex-col items-center justify-center">
																			<ul
																				className={
																					styles.ourServicesSublinks +
																					" p-4 w-fit grid grid-cols-3 gap-4 z-[999]"
																				}
																			>
																				{globalContext?.servicesSublinks
																					?.length > 0 ? (
																					globalContext?.servicesSublinks?.map(
																						(item: any, keys: number) => (
																							<Fragment key={keys}>
																								<motion.li
																									custom={keys}
																									initial={initial}
																									whileInView="animate"
																									viewport={{once: true}}
																									variants={
																										arrayLoopStaggerChildren
																									}
																								>
																									<Link
																										href={`${item?.node?.url}`}
																										className={` ${
																											ourServicesSublinksOpen
																												? "w-full hover:bg-primary-default text-center text-black hover:text-white"
																												: "text-black"
																										} block p-4 font-tonnelier uppercase text-base`}
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
																</>
															) : null}
														</motion.li>
													) : (
														<motion.li
															custom={keys}
															initial={initial}
															whileInView="animate"
															viewport={{once: true}}
															variants={arrayLoopStaggerChildren}
														>
															<Link
																href={`${item?.node?.url}`}
																target={item?.node?.target}
															>
																<h3 className="py-0 px-4 font-semibold text-pureBlack hover:text-primary-two text-base text-center uppercase">
																	{item?.node?.label}
																</h3>
															</Link>
														</motion.li>
													)}
												</Fragment>
											)
										)
									) : (
										<></>
									)}
								</ul>
							</div>
						</div>
					</div>
					<div
						className="w-full px-4 flex items-center justify-end bg-cover bg-center bg-no-repeat hover:opacity-95"
						style={{
							backgroundImage: `url(/svg/background/layered-waves-haikei-blue-right.svg)`,
						}}
					>
						<Link
							href="/contact"
							target=""
							className="hidden xl:flex w-fit py-4 ml-6 pl-4 pr-10 cursor-pointer transition-all ease-in-out duration-500 font-semibold font-tonnelier uppercase pl-4 text-lightGrey text-base text-center"
						>
							Get a quote today
						</Link>
					</div>
					<motion.div
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						className="flex flex-col xl:hidden items-center justify-center"
					>
						<button
							type="button"
							onClick={toggleMenu}
							aria-label="toggle menu"
							className={
								menuActive
									? styles.navToggleOpen
									: styles.navToggle +
									  ` ${
											globalContext?.themesOptionsContent?.displayNoticeBanner
												? "top-[62.5px]"
												: "top-[20px]"
									  }`
							}
						>
							<span aria-hidden="true"></span>
						</button>
					</motion.div>
				</div>

				{/* Hidden Tablet & Mobile  Side Menu */}
				<div className={menuActive ? "flex flex-col lg:hidden" : "hidden"}>
					<SideMenu menuActive={menuActive} setMenuActive={setMenuActive} />
				</div>
			</nav>
		</>
	);
};

export default Navbar;
