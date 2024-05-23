export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Next.js + NextUI",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Aaiyan",
			href: "/aaiyan",
		},
		{
			label: "About Us",
			href: "/about",
		},
		{
			label: "Our Team",
			href: "/team",
		},
		{
			label: "Resources",
			href: "/resources",
		}
	],
	navMenuItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Services",
			href: "/services",
		},
		{
			label: "About Us",
			href: "/about",
		},
		{
			label: "Our Team",
			href: "/team",
		},
		{
			label: "Resources",
			href: "/resources",
		},
	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
		sponsor: "https://patreon.com/jrgarciadev"
	},
};
