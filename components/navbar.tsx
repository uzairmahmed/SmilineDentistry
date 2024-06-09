"use client"
import React, { useState } from "react";

import { Navbar as NextUINavbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, DropdownSection } from "@nextui-org/react";
import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { Logo } from "@/components/icons";
import { MdMenu } from "react-icons/md";
import { navbarLink, paragraph, subtitle, title } from "./primitives";
import NavbarMegamenu from "./common/navbar-megamenu";

export const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	return (
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
								<NavbarMegamenu item={item} />
								:
								<></>
					))}
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
				<div className="flex flex-row gap-5 ">
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
								<NavbarMegamenu item={item} />
								:
								<></>
					))}
				</div>
				{/* <div className="flex gap-5">
					<Button variant='solid' radius="full" className='px-10'>
						Book an Appointment
					</Button>

				</div> */}
			</NavbarContent>




		</NextUINavbar >
	);
};
