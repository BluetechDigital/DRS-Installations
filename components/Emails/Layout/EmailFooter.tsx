// Imports
import * as React from "react";
import {IEmailFooter} from "@/types/email";
import {Img, Row, Link, Text, Column, Section} from "@react-email/components";

const EmailFooter: React.FC<IEmailFooter.IEmailFooter> = ({
	imagesDirUrl,
	themesOptionsContent,
}) => {
	return (
		<>
			<Section style={{border: "5px solid", borderColor: "#11acff"}}></Section>
			<Section style={footer}>
				<Section style={footerLogoSection}>
					<Link href={`https://drsinstallations.co.uk`}>
						<Img
							width="105px"
							height="105px"
							style={footerLogo}
							alt="DRS Installations Ltd Logo White"
							src={`${imagesDirUrl}/drs-installations-logo-white.png`}
						/>
					</Link>
				</Section>
				<Row>
					<Column align="right" style={{width: "33%", paddingRight: "8px"}}>
						<Link href={themesOptionsContent?.facebookLink?.url} style={link}>
							<Img
								width="100%"
								height="35px"
								style={{width: "35px", height: "35px"}}
								src={`${imagesDirUrl}/facebook-round-white.png`}
							/>
						</Link>
					</Column>
					<Column align="center" style={{width: "33%", paddingLeft: "8px"}}>
						<Link href={themesOptionsContent?.instagramLink?.url} style={link}>
							<Img
								width="100%"
								height="35px"
								style={{width: "35px", height: "35px"}}
								src={`${imagesDirUrl}/instagram-round-white.png`}
							/>
						</Link>
					</Column>
					<Column align="left" style={{width: "33%", paddingLeft: "8px"}}>
						<Link href={themesOptionsContent?.twitterLink?.url} style={link}>
							<Img
								width="100%"
								height="35px"
								style={{width: "35px", height: "35px"}}
								src={`${imagesDirUrl}/twitter-round-white.png`}
							/>
						</Link>
					</Column>
				</Row>
				<Row>
					<Text
						style={{
							color: "#fafafa",
							fontSize: "0.8rem",
							textAlign: "center",
							lineHeight: "1.15rem",
							padding: "0.25rem 0.5rem",
						}}
					>
						{themesOptionsContent?.copyrightText}
					</Text>
				</Row>
			</Section>
		</>
	);
};

export default EmailFooter;

const link: IEmailFooter.ILink = {
	color: "#11acff",
	textDecoration: "underline",
};

const footer: IEmailFooter.IFooter = {
	maxWidth: "580px",
	margin: "0 auto",
	marginBottom: "30px",
	backgroundColor: "#027bbd",
};

const footerLogoSection: IEmailFooter.IFooterLogoSection = {
	width: "100%",
	padding: "0px",
	backgroundColor: "#027bbd",
};

const footerLogo: IEmailFooter.IFooterLogo = {
	width: "85px",
	height: "85px",
	margin: "0 auto 25px auto",
	maxWidth: "125px",
};
