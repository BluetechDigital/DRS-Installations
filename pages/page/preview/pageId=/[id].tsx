// Imports
import {isEmpty} from "lodash";
import {IPageContext} from "@/types/context";
import type {GetServerSideProps, NextPage} from "next";
import {getAuthToken} from "@/functions/cookies/cookies";
import {getLoginPreviewRedirectUrl} from "@/functions/redirects/redirects";
import {postType, PageContext, flexibleContentType} from "@/context/pages";

// Mutations Functions
import {getAllPreviewSeoContent} from "@/functions/graphql/Mutations/GetAllPreviewSeoContent";
import {getAllPreviewFlexibleContentComponents} from "@/functions/graphql/Mutations/GetAllPreviewFlexibleContentComponents";

// Components
import Layout from "@/components/Layout/Layout";

const dynamicPreviewPosts: NextPage<IPageContext> = ({
	seo,
	content,
	postTypeFlexibleContent,
}) => {
	return (
		<>
			<PageContext.Provider
				value={{
					seo: seo,
					content: content,
					postTypeFlexibleContent: postTypeFlexibleContent,
				}}
			>
				<Layout />
			</PageContext.Provider>
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async (context: any) => {
	const authToken: string = getAuthToken(context.req);
	const {params}: any = context || {};
	const loginRedirectURL: string = getLoginPreviewRedirectUrl(
		postType?.previewPost,
		params?.id
	);

	if (isEmpty(authToken)) {
		return {
			redirect: {
				permanent: false,
				destination: loginRedirectURL || "/login",
				query: {postType, previewPostId: params?.id},
			},
		};
	} else {
		// Fetch priority content
		/* PREVIEW BLOGS POSTS SEO CONTENT */
		const seoContent: any = await getAllPreviewSeoContent(
			params?.id,
			authToken,
			postType?.previewPost,
			loginRedirectURL
		);

		/* PREVIEW BLOGS POSTS FLEXIBLE CONTENT */
		const flexibleContentComponents: any =
			await getAllPreviewFlexibleContentComponents(
				params?.id,
				authToken,
				postType?.previewPost,
				loginRedirectURL,
				flexibleContentType?.previewPost
			);

		return {
			props: {
				seo: seoContent,
				content: flexibleContentComponents?.content,
				postTypeFlexibleContent: flexibleContentType?.previewPost,
			},
		};
	}
};

export default dynamicPreviewPosts;
