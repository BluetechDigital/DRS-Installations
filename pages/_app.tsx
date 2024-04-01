// Imports
import "@/styles/globals.scss";
import {motion} from "framer-motion";
import type {AppProps} from "next/app";
import {client} from "@/config/apollo";
import {ApolloProvider} from "@apollo/client";
import {Analytics} from "@vercel/analytics/react";
import {SpeedInsights} from "@vercel/speed-insights/next";

// Styling
import "../styles/globals.scss";

// Global Context Provider
import {IGlobalProps} from "@/types/context";

// Queries Functions
import {
	getMobileLinks,
	getCopyrightLinks,
	getNavbarMenuLinks,
	getFooterMenuLinks,
	getOurServicesSublinks,
} from "@/functions/graphql/Queries/GetAllMenuLinks";
import {getThemesOptionsContent} from "@/functions/graphql/Queries/GetAllThemesOptions";
import {getAllTestimonialsContent} from "@/functions/graphql/Queries/GetAllTestimonials";

// Components
import PageLoadingSquares from "@/components/Global/PageLoadingSquares";
import GlobalContextProvider from "@/components/Context/GlobalContextProvider";
import PostHogContextProvider from "@/components/Context/PostHogProviderContext";
import {getAllOurProjectsContent} from "@/functions/graphql/Queries/GetAllOurProjects";

export default function App({
	Component,
	pageProps,
	globalProps,
}: AppProps | any) {
	return (
		<>
			<ApolloProvider client={client}>
				<GlobalContextProvider globalProps={globalProps}>
					<motion.div
						exit={{
							opacity: 0,
						}}
						initial="initial"
						animate="animate"
					>
						<PageLoadingSquares />
						{/* Cookie Policy Pop Up */}
						<PostHogContextProvider />
						<Component {...pageProps} />
						{/* Vercel Analytics */}
						<Analytics />
						{/* Vercel Speed Insights */}
						<SpeedInsights />
					</motion.div>
				</GlobalContextProvider>
			</ApolloProvider>
		</>
	);
}

App.getInitialProps = async ({Component, ctx}: any) => {
	let pageProps = {};

	if (Component.getInitialProps) {
		pageProps = await Component.getInitialProps(ctx);
	}

	// PUBLIC PAGES //
	/* Fetch all global content
	remaining content simultaneously */
	const mobileLinks: any = await getMobileLinks();
	const copyrightLinks: any = await getCopyrightLinks();
	const navbarMenuLinks: any = await getNavbarMenuLinks();
	const footerMenuLinks: any = await getFooterMenuLinks();
	const ourProjects: any = await getAllOurProjectsContent();
	const testimonials: any = await getAllTestimonialsContent();
	const servicesSublinks: any = await getOurServicesSublinks();
	const themesOptionsContent: any = await getThemesOptionsContent();

	const globalProps: IGlobalProps = {
		mobileLinks: mobileLinks,
		ourProjects: ourProjects,
		testimonials: testimonials,
		copyrightLinks: copyrightLinks,
		navbarMenuLinks: navbarMenuLinks,
		footerMenuLinks: footerMenuLinks,
		servicesSublinks: servicesSublinks,
		themesOptionsContent: themesOptionsContent,
	};

	return {
		pageProps,
		globalProps,
	};
};
