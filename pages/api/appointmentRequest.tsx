// Imports
import {render} from "@react-email/components";
import {emailTransporter} from "@/config/nodemailer";
import type {NextApiRequest, NextApiResponse} from "next";
import {
	IBusinessRequestAppointmentEmail,
	ICustomerRequestAppointmentEmail,
} from "@/types/email";
import {getThemesOptionsContent} from "@/functions/graphql/Queries/GetAllThemesOptions";

// Components
import CustomerRequestAppointmentEmail from "@/components/Emails/CustomerRequestAppointmentEmail";
import BusinessRequestAppointmentInquiryEmail from "@/components/Emails/BusinessRequestAppointmentInquiryEmail";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === "POST") {
		const data = req.body;

		// If any of these values are undefined
		if (
			!data?.email ||
			!data?.message ||
			!data?.subject ||
			!data?.lastName ||
			!data?.firstName ||
			!data?.phoneNumber ||
			!data?.selectedServices
		) {
			return res.status(400).json({
				status: "error",
				message: "Bad request. Please try again.",
			});
		}

		try {
			const imagesDirUrl: any = process.env.IMAGE_DIR_URL;
			const themesOptionsContent: any = await getThemesOptionsContent();

			/* Render React Customer Inquiry 
			Confirmation Email Component*/
			const customerEmailHtml: string = render(
				<CustomerRequestAppointmentEmail
					imagesDirUrl={imagesDirUrl}
					subject={`${data?.subject}`}
					fullName={`${data?.fullName}`}
					phoneNumber={data?.phoneNumber}
					themesOptionsContent={themesOptionsContent}
				/>
			);

			/* Render React Business Customer 
			Inquiry Confirmation Email Component*/
			const businessEmailHtml: string = render(
				<BusinessRequestAppointmentInquiryEmail
					imagesDirUrl={imagesDirUrl}
					subject={`${data?.subject}`}
					message={`${data?.message}`}
					fullName={`${data?.fullName}`}
					phoneNumber={data?.phoneNumber}
					themesOptionsContent={themesOptionsContent}
				/>
			);

			/* Customer Request Appointment Confirmation Email */
			const customerRequestAppointmentEmail: ICustomerRequestAppointmentEmail =
				{
					from: `${themesOptionsContent?.email}`,
					to: `${data?.email}`,
					subject: `Thank You for Contacting Parchow Groundworks Ltd`,
					html: customerEmailHtml,
				};

			/* Business Customer Request Appointment Inquiry Confirmation Email */
			const businessRequestAppointmentEmail: IBusinessRequestAppointmentEmail =
				{
					from: `${themesOptionsContent?.email}`,
					to: `${themesOptionsContent?.email}`,
					subject: `New Website Inquiry: ${data?.subject}`,
					html: businessEmailHtml,
				};

			await emailTransporter.sendMail({...customerRequestAppointmentEmail});
			await emailTransporter.sendMail({...businessRequestAppointmentEmail});

			return res.status(200).json({
				status: "success",
				message:
					"Thanks for your message! We'll endeavour to get back in touch with you as soon as possible.",
			});
		} catch (err) {
			console.log(err);

			return res.status(400).json({
				status: "error",
				message: "Something went wrong sending your Inquiry. Please try again.",
				data: err,
			});
		}
	}

	return res.status(400).json({
		status: "error",
		message: "Bad request. Please try again.",
	});
};

export default handler;
