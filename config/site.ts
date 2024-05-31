export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Next.js + NextUI",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
		{
			type: 'supercategory',
			label: "Services",
			href: '/',
			subcategories: [
				{
					name: "Preventative Dentistry",
					pages: [
						{
							label: "Dental Cleaning",
							href: "/dental-cleaning",
						},
						{
							label: "Dental Screening",
							href: "/dental-screening",
						},
						{
							label: "Children's Dentistry",
							href: "/childrens",
						},
					]
				},{
					name: "Cosmetic Dentistry",
					pages: [
						{
							label: "Teeth Whitening",
							href: "/cosmetic-dentistry",
						},
						{
							label: "Crowns",
							href: "/cosmetic-dentistry",
						},
						{
							label: "Verneers",
							href: "/cosmetic-dentistry",
						},
					]
				},{
					name: "Dental Surgical Procedures",
					pages: [
						{
							label: "Root Canal Treatment",
							href: "/surgical-procedures",
						},
						{
							label: "Dental Implants",
							href: "/surgical-procedures",
						},
						{
							label: "Dental Extractions",
							href: "/surgical-procedures",
						},
					]
				},{
					name: "Orthodontics",
					pages: [
						{
							label: "Invisalign",
							href: "/invisalign",
						},
						{
							label: "Fastbraces",
							href: "/fastbraces",
						},
					]
				},{
					name: "Dental Scans",
					pages: [
						{
							label: "X-Rays",
							href: "/dental-scans",
						},
						{
							label: "Digital Impressions",
							href: "/dental-scans",
						},
					]
				},{
					name: "Dental Appliances",
					pages: [
						{
							label: "Sports Mouthguards",
							href: "/mouthguards",
						},
						{
							label: "Nightguards",
							href: "/mouthguards",
						},
					]
				}
			]
		},
		{
			type: 'page',
			label: "Emergency Dentistry",
			href: "/emergency",
		},
		{
			type: 'page',
			label: "Resources",
			href: "/resources",
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
			label: "About Us",
			href: "/about",
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
