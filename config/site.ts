export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Smiline Dentistry",
	description: "Smiline Family Dentistry | Dentist in Milton",
	navItems: [
		{
			type: 'page',
			label: "Services",
			href: '/services',
		},
		{
			type: 'page',
			label: "About Us",
			href: "/about",
		},
		{
			type: 'page',
			label: "Contact",
			href: "/contact",
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
