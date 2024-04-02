// Imports
import {
	Head,
	Html,
	Link,
	Text,
	Body,
	Section,
	Preview,
	Container,
} from "@react-email/components";
import * as React from "react";
import {IBusinessRequestAppointmentEmail} from "@/types/email";

// Components
import EmailFooter from "./Layout/EmailFooter";
import EmailHeader from "./Layout/EmailHeader";

export const BusinessRequestAppointmentInquiryEmail: React.FC<
	IBusinessRequestAppointmentEmail.IBusinessRequestAppointmentConfirmationEmail
> = ({
	subject,
	message,
	fullName,
	updatedDate,
	phoneNumber,
	imagesDirUrl,
	themesOptionsContent,
}) => {
	const formattedDate = new Intl.DateTimeFormat("en", {
		dateStyle: "medium",
		timeStyle: "medium",
	}).format(updatedDate);

	return (
		<Html>
			<Head />
			<Preview>New Appointment Request Inquiry from {`${fullName}`}</Preview>
			<Body style={main}>
				<Container style={container}>
					<EmailHeader
						imagesDirUrl={`${imagesDirUrl}/Parchow-Groundworks-Ltd-Email-Header-Business-Appointment.png`}
					/>
					<Section style={content}>
						<Text style={introParagraph}>Hello Team,</Text>
						<Text style={paragraph}>
							We&apos;ve just received a new appointment request regarding,
							&quot;{subject}&quot; and our general services. The customer as
							contacted us on {formattedDate} their details are below.
						</Text>
						<Text style={detailsParagraph}>Inquiry Details:</Text>
						<Text style={paragraph}>
							<strong>Full Name:</strong> {fullName}
							<br />
							<strong>Phone Number:</strong>{" "}
							<Link href={`tel:${phoneNumber}`} style={link}>
								{phoneNumber}
							</Link>
						</Text>
						<Text style={paragraph}>
							<strong>Subject:</strong> {subject}
							<br />
							<strong>Message:</strong> &quot;{message}&quot;
						</Text>
						<Text style={paragraph}>
							Can we begin reviewing the details of the inquiry and shortly and
							schedule an appointment! If we require any additional information
							can we get in contact with them. Thanks Team!
						</Text>
						<Text style={paragraph}>Best regards,</Text>
						<Text style={paragraph}>
							Andy Howe,
							<br />
							Director,
							<br />
							Parchow Groundworks Ltd
						</Text>
					</Section>
					<EmailFooter
						imagesDirUrl={imagesDirUrl}
						themesOptionsContent={themesOptionsContent}
					/>
				</Container>
			</Body>
		</Html>
	);
};

export default BusinessRequestAppointmentInquiryEmail;

const fontFamily: string = "PlusJakartaSans,Helvetica,Arial,sans-serif";

const main: IBusinessRequestAppointmentEmail.IMain = {
	fontFamily,
	padding: "0px",
	backgroundColor: "#ffffff",
};
const introParagraph: IBusinessRequestAppointmentEmail.IIntroParagraph = {
	lineHeight: 1.5,
	fontSize: 14,
	fontWeight: "600",
	padding: "0.25rem 0.5rem",

	paddingTop: "1.5rem",
};
const detailsParagraph: IBusinessRequestAppointmentEmail.IDetailsParagraph = {
	lineHeight: 1.5,
	fontSize: 14,
	fontWeight: "600",
	padding: "0.25rem 0.5rem",
};
const paragraph: IBusinessRequestAppointmentEmail.IParagraph = {
	lineHeight: 1.5,
	fontSize: 14,
	fontWeight: "400",
	padding: "0.25rem 0.5rem",
};
const container: IBusinessRequestAppointmentEmail.IContainer = {
	maxWidth: "580px",
	margin: "0px auto",
	marginBottom: "0px",
	backgroundColor: "#ffffff",
};
const content: IBusinessRequestAppointmentEmail.IContent = {
	padding: "10px",
};
const link: IBusinessRequestAppointmentEmail.ILink = {
	color: "#1414dc",
	textDecoration: "underline",
};
