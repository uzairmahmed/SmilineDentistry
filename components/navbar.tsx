"use client"
import React from "react";

import { Navbar as NextUINavbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarContent, NavbarItem } from "@nextui-org/react";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";

import { Logo } from "@/components/icons";
import { navbarLink } from "./primitives";
import NavbarMegamenu from "./common/navbar-megamenu";
import ContactForm from "./common/contact-form";
import ContactFormButton from "./common/contact-form-button";

export const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	return (
		<>
			<ContactForm />
			<NextUINavbar
				isMenuOpen={isMenuOpen}
				onMenuOpenChange={setIsMenuOpen}
				className='fixed bg-white mx-auto 
			w-full lg:w-auto lg:max-w-6xl xl:max-w-7xl 
			flex-grow self-center py-2 rounded-none lg:rounded-b-3xl shadow-none lg:shadow-md'
			>
				{/* Mobile Layout */}
				<NavbarContent className="flex lg:hidden text-black" justify="start">
					<NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
				</NavbarContent>

				{/* Mobile Menu */}
				<NavbarMenu className="py-12">
					{siteConfig.navItems.map((item) => (
						item.type === "page" ?
							<NavbarItem key={item.href}>
								<NextLink
									className={navbarLink()}
									color="foreground"
									href={item.href}
								>
									{item.label}
								</NextLink>
							</NavbarItem>
							:
							item.type === 'supercategory' ?
								<NavbarMegamenu key={item.label} item={item} />
								:
								<></>
					))}
					{/* <Button onClick={open}>Book an Appointment</Button> */}
					<ContactFormButton />
				</NavbarMenu>

				{/* Mobile Logo */}
				<NavbarContent className="flex lg:hidden pr-3 w-full items-center" justify="center">
					<NavbarBrand className="w-full p-10 lg:p-0 justify-center">
						<NextLink className="flex justify-start items-center gap-1" href="/">
							<Logo />
						</NextLink>
					</NavbarBrand>
				</NavbarContent>
				<NavbarContent className="hidden lg:flex">
					{/* Desktop Logo */}
					<NavbarBrand className="flex flex-row ">
						<NextLink href="/">
							<Logo />
						</NextLink>
					</NavbarBrand>
					<div className="flex flex-row gap-5">
						{siteConfig.navItems.map((item) => (
							item.type === "page" ?
								<NavbarItem key={item.href}>
									<NextLink
										className={navbarLink()}
										color="foreground"
										href={item.href}
									>
										{item.label}
									</NextLink>
								</NavbarItem>
								:
								item.type === 'supercategory' ?
									<NavbarMegamenu key={item.label} item={item} />
									:
									<></>
						))}
					</div>
					<ContactFormButton navbar={true} />
				</NavbarContent>
			</NextUINavbar >
		</>
	);
};
