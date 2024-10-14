import type { PortfolioItem } from "./components/PortfolioItem/portfolio-item.model";
import { AspectRatio } from "./components/PortfolioItem/portfolio-item.model";

export const PROJECTS: Array<PortfolioItem> = [
	{
		title: "Joystream Design System",
		type: "Case study",
		href: {
			ariaLabel: "Joystream Design System case study",
			url: "https://www.behance.net/gallery/166030317/Joystream-Design-System",
		},
		image: {
			src: "https://d1x4wey98iud3r.cloudfront.net/kubu/atlas_ds.webp",
			alt: "Joystream Design System case study",
			width: 4200,
			height: 3084,
			aspectRatio: AspectRatio["aspect-ratio-16/9"],
		},
	},
	{
		title: "Notifications system",
		type: "UI / UX Design",
		image: {
			src: "https://d1x4wey98iud3r.cloudfront.net/kubu/Notifications.webp",
			alt: "Notifications system",
			width: 2583,
			height: 2193,
			aspectRatio: AspectRatio["aspect-ratio-16/9"],
		},
	},
	{
		title: "Video platform DAO",
		type: "Case study",
		href: {
			ariaLabel: "Video platform DAO case study",
			url: "https://www.behance.net/gallery/137431151/Joystream-Video-Platform-DAO",
		},
		image: {
			src: "https://d1x4wey98iud3r.cloudfront.net/kubu/video_platform_dao.webp",
			alt: "Video platform DAO case study",
			width: 4800,
			height: 3600,
			aspectRatio: AspectRatio["aspect-ratio-4/3"],
		},
	},
	{
		title: "Creator tokens components",
		type: "UI components",
		image: {
			src: "https://d1x4wey98iud3r.cloudfront.net/kubu/crt_components.webp",
			alt: "Notifications system",
			width: 4800,
			height: 3600,
			aspectRatio: AspectRatio["aspect-ratio-16/9"],
		},
	},
	{
		title: "AI Browse movies",
		type: "Mobile UI",
		image: {
			src: "https://d1x4wey98iud3r.cloudfront.net/kubu/moviemate_browse.webp",
			alt: "Browsing movies on AI",
			width: 3840,
			height: 3840,
			aspectRatio: AspectRatio["aspect-ratio-1/1"],
		},
	},
	{
		title: "Upload video",
		type: "Mobile UI",
		href: {
			ariaLabel: "Upload video Mobile UI dribbble shot",
			url: "https://dribbble.com/shots/22151990-Atlas-Video-uploading",
		},
		image: {
			src: "https://d1x4wey98iud3r.cloudfront.net/kubu/mobile_upload_videos.webp",
			alt: "Upload video Mobile UI dribbble shot",
			width: 1200,
			height: 1200,
			aspectRatio: AspectRatio["aspect-ratio-1/1"],
		},
	},
	{
		title: "Single movie",
		type: "Mobile UI",
		image: {
			src: "https://d1x4wey98iud3r.cloudfront.net/kubu/single_movie.webp",
			alt: "Video platform DAO case study",
			width: 4455,
			height: 4209,
			aspectRatio: AspectRatio["aspect-ratio-4/3"],
		},
	},
	{
		title: "Food delivery",
		type: "Mobile UI Concept",
		href: {
			ariaLabel: "Food app concept mobile UI dribbble shot",
			url: "https://dribbble.com/shots/15386157-Food-app-concept",
		},
		image: {
			src: "https://d1x4wey98iud3r.cloudfront.net/kubu/food_app.webp",
			alt: "Food app concept mobile UI dribbble shot",
			width: 4800,
			height: 3600,
			aspectRatio: AspectRatio["aspect-ratio-3/4"],
		},
	},
];
