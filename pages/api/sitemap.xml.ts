// Imports
import {Readable} from "stream";
import {SitemapStream, streamToPromise} from "sitemap";
import {getAllPagesSlugs} from "@/functions/graphql/Queries/GetAllPagesSlugs";
import {getAllOurProjectsSlugs} from "@/functions/graphql/Queries/GetAllOurProjects";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: any, res: any) => {
	const [pagesSlugs, ourProjectsSlugs] = await Promise.all([
		getAllPagesSlugs(),
		getAllOurProjectsSlugs(),
	]);

	/* Pages, News Insights Posts Arrays */
	const pagesLinks: any = [];
	const ourProjectsLinks: any = [];

	// Pages Dynamic Links
	pagesSlugs?.map((keys: any) => {
		const object = {
			url: `${keys?.slug}`,
			changefreq: "monthly",
			lastmod: `${keys?.modified}`,
			priority: 0.8,
		};

		pagesLinks.push(object);
	});

	// Our Projects Dynamic Links
	ourProjectsSlugs?.map((keys: any) => {
		const object = {
			url: `/projects/${keys?.slug}`,
			changefreq: "daily",
			lastmod: `${keys?.modified}`,
			priority: 0.8,
		};

		ourProjectsLinks.push(object);
	});

	// Arrays with your all dynamic links
	const allLinks: any = [...pagesLinks, ...ourProjectsLinks];

	// Create a stream to write to
	const stream = new SitemapStream({hostname: process.env.SITE_URL});

	req;

	res.writeHead(200, {
		"Content-Type": "application/xml",
	});

	const xmlString = await streamToPromise(
		Readable.from(allLinks).pipe(stream)
	).then((data: any) => data.toString());

	res.end(xmlString);
};
