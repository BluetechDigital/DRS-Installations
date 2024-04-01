// Imports
import Link from "next/link";
import Image from "next/image";
import {FC, useEffect, useState} from "react";

// Styling
import styles from "../../styles/components/Elements/BackHoverButton.module.scss";

// Components
import {IBackHoverButton} from "@/types/components";

const BackToTopButton: FC<IBackHoverButton> = ({link}) => {
	// Background color scroll position change
	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentPosition = window.scrollY;
			setScrollPosition(currentPosition);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<div
				className={
					scrollPosition > 1000
						? "relative w-fit h-fit xl:block z-[998]"
						: "hidden"
				}
			>
				<div className="fixed right-6 z-20 bottom-[2.5rem] flex justify-center">
					<Link href={`${link}`} className={styles.backToTopButton}>
						<span className={styles.span}>
							<Image
								width={550}
								height={550}
								alt="White Arrow Icon"
								src="/svg/navigation-menu-dropdown-arrow-white.svg"
								className={`cursor-pointer w-[22px] h-[22px] rotate-180 object-contain object-center`}
							/>
						</span>
					</Link>
				</div>
			</div>
		</>
	);
};

export default BackToTopButton;
