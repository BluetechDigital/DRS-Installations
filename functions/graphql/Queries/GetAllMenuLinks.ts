// Imports
import {gql} from "@apollo/client";
import {client} from "@/config/apollo";

// Navbar Menu Links
export const getNavbarMenuLinks = async () => {
	try {
		const content: any = gql`
			{
				navbarMenuLinks: menuItems(where: {location: PRIMARY}) {
					edges {
						node {
							id
							url
							label
						}
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.navbarMenuLinks?.edges;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch main menu links content"
		);
	}
};

// Mobile Navbar links
export const getMobileLinks = async () => {
	try {
		const content: any = gql`
			{
				mobileLinks: menuItems(where: {location: MOBILE_LINKS}, first: 10) {
					edges {
						node {
							id
							url
							label
						}
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.mobileLinks?.edges;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch mobile links content"
		);
	}
};

// Navbar About Us Sublinks
export const getAboutUsSublinks = async () => {
	try {
		const content: any = gql`
			{
				aboutUsSublinks: menuItems(where: {location: ABOUT_US_LINKS}) {
					edges {
						node {
							id
							url
							label
						}
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.aboutUsSublinks?.edges;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch main menu links content"
		);
	}
};

// Navbar Our Services Sublinks
export const getOurServicesSublinks = async () => {
	try {
		const content: any = gql`
			{
				servicesSublinks: menuItems(
					where: {location: SERVICES_LINKS}
					first: 100
				) {
					edges {
						node {
							id
							url
							label
						}
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.servicesSublinks?.edges;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch our Programs Sublinks content"
		);
	}
};

// Navbar Locations Sublinks
export const getLocationsSublinks = async () => {
	try {
		const content: any = gql`
			{
				locationsSublinks: menuItems(where: {location: LOCATIONS_LINKS}) {
					edges {
						node {
							id
							url
							label
						}
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.locationsSublinks?.edges;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch locations links content"
		);
	}
};

// Footer Copyright Links
export const getCopyrightLinks = async () => {
	try {
		const content: any = gql`
			{
				copyrightLinks: menuItems(
					where: {location: COPYRIGHT_LINKS}
					first: 10
				) {
					edges {
						node {
							id
							url
							label
						}
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.copyrightLinks?.edges;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch copyright links content"
		);
	}
};

// Footer Menu Links
export const getFooterMenuLinks = async () => {
	try {
		const content: any = gql`
			{
				footerMenuLinks: menuItems(where: {location: FOOTER}) {
					edges {
						node {
							id
							url
							label
						}
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.footerMenuLinks?.edges;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch footer menu links content"
		);
	}
};
