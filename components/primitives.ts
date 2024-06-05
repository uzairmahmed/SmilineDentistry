import { tv } from "tailwind-variants";

export const title = tv({
	base: "tracking-tight inline font-semibold",
	variants: {
		color: {
			foreground: "text-foreground",
			background: "text-background",
			default: "text-default",
			primary: "text-primary",
			secondary: "text-secondary",
			inherit: "text-inherit"

		},
		size: {
			xs: "text-xl lg:text-xl",
			sm: "text-2xl lg:text-2xl",
			md: "text-3xl lg:text-3xl",
			lg: "text-4xl lg:text-4xl leading-9",
			BIG: 'tracking-normal text-8xl font-cursive font-normal'
		},
		fullWidth: {
			true: "w-full block",
		},
		alignment: {
			left: "text-left",
			center: "text-center",
			right: "text-right"
		},
	},
	defaultVariants: {
		size: "lg",
		color: 'default'
	}
});

export const subtitle = tv({
	base: "w-full md:w-1/2 my-2 text-lg lg:text-xl text-default-600 block max-w-full",
	variants: {
		color: {
			foreground: "text-foreground",
			background: "text-background",
			default: "text-default",
			primary: "text-primary",
			secondary: "text-secondary",
			inherit: "text-inherit"

		},
		weight: {
			light: "font-light",
			normal: "font-normal",
			semibold: "font-semibold",
			bold: "font-bold",
		},
		fullWidth: {
			true: "!w-full",
		},
		alignment: {
			left: "text-left",
			center: "text-center",
			right: "text-right"
		},
		size: {
			sm: "text-lg lg:text-lg",
			md: "text-xl lg:text-xl leading-9",
			lg: "text-2xl lg:text-2xl",
		},
		margin: {
			default: "my-2",
			none: "my-0"
		}
	},
	defaultVariants: {
		fullWidth: true,
		size: "md",
		color: "foreground",
		weight: "semibold"
	}
});

export const paragraph = tv({
	base: "w-full md:w-1/2 my-2 block max-w-full text-foreground",
	variants: {
		fullWidth: {
			true: "!w-full",
		},
		color: {
			foreground: "text-foreground",
			background: "text-background",
			default: "text-default",
			primary: "text-primary",
			secondary: "text-secondary",
			inherit: "text-inherit"


		},
		size: {
			sm: "text-md lg:text-md",
			md: "text-lg lg:text-lg leading-9",
			lg: "text-xl lg:text-xl",
		},
		alignment: {
			left: "text-left",
			center: "text-center",
			right: "text-right"
		}
	},
	defaultVariants: {
		fullWidth: true,
		size: "md",
		color: "foreground",
	}
});

export const button = tv({
	base: "self-center rounded-full px-10"
})

export const pagecontent = tv({
	base: "flex flex-col self-center max-w-6xl items-center py-28 gap-32"
})

export const navbarLink = tv({
	base: "w-full my-2 block max-w-full text-center text-lg text-default hover:[text-shadow:_0.2px_0_#143D75] transition-all cursor-pointer",
	variants: {
		type: {
			navbar: "w-full my-2 block max-w-full text-center text-lg text-default hover:[text-shadow:_0.2px_0_#143D75] transition-all cursor-pointer",
			navmenu: "block m-0 text-left text-lg text-default hover:[text-shadow:_0.2px_0_#143D75] transition-all cursor-pointer ",
		}
	}
});