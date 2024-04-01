import {client} from "@/config/apollo";
import {DocumentNode, gql} from "@apollo/client";

type SlugResponse = {
	slug: string;
	modified: string;
};

interface ISlug extends Array<SlugResponse> {}

/* OUR PROJECTS SLUGS (URLS) */
export const getAllOurProjectsSlugs = async (): Promise<ISlug> => {
	try {
		const content: DocumentNode = gql`
			{
				ourProjectsSlugs: ourProjects(where: {status: PUBLISH}, last: 100) {
					nodes {
						slug
						modified
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.ourProjectsSlugs?.nodes;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch the our projects slugs"
		);
	}
};

// All Our Projects Content
export const getAllOurProjectsContent = async () => {
	try {
		const content: DocumentNode = gql`
			{
				ourProjectsContent: ourProjects(
					where: {status: PUBLISH, orderby: {field: DATE, order: DESC}}
					first: 100
				) {
					edges {
						node {
							slug
							date
							excerpt
							title(format: RENDERED)
							featuredImage {
								node {
									altText
									sourceUrl
									mediaDetails {
										height
										width
									}
								}
							}
						}
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.ourProjectsContent?.edges;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch all the our projects content"
		);
	}
};
