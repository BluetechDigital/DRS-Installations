// Imports
import {FC} from "react";
import Link from "next/link";
import {IBackHoverButton} from "@/types/components";

// Styling
import styles from "../../styles/components/Elements/BackHoverButton.module.scss";

const BackHoverButton: FC<IBackHoverButton> = ({link}) => {
	return (
		<>
			<div className="absolute items-center justify-center hidden w-full h-full xl:flex">
				<div className="fixed left-10 z-10 top-[9rem] flex justify-center">
					<Link
						target=""
						href={`${link}`}
						className={
							styles.backHoverButton +
							" flex bg-primary-default py-2 px-4 text-white uppercase text-sm hover:bg-primary-dark transition-all duration-500 ease-in-out"
						}
					>
						back
					</Link>
				</div>
			</div>
		</>
	);
};

export default BackHoverButton;
