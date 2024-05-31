"use client"
import React, { useState } from "react";

import { Navbar as NextUINavbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, DropdownSection } from "@nextui-org/react";
import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { Logo } from "@/components/icons";
import { MdMenu } from "react-icons/md";
import { navbarLink, paragraph } from "./primitives";
import NavbarMegamenu from "./common/navbar-megamenu";

export const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	return (
		<NextUINavbar
			isMenuOpen={isMenuOpen}
			onMenuOpenChange={setIsMenuOpen}
			className='fixed bg-white mx-auto max-w-7xl pt-16 px-10 flex-grow self-center rounded-b-3xl py-2 shadow-md'
		>
			<NavbarContent className="flex md:hidden" justify="start">
				<NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
			</NavbarContent>

			<NavbarContent className="flex md:hidden pr-3" justify="center">
				<NavbarBrand>
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<Logo/>
					</NextLink>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="hidden md:flex" justify="center">
				<NavbarBrand>
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<Logo />
					</NextLink>
				</NavbarBrand>
				<div className="flex flex-row w-auto gap-5 justify-start">
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
				<div className="flex gap-5">
					<Button variant='solid' radius="full" className='px-10'>
						Book an Appointment
					</Button>
				</div>
			</NavbarContent>


			<NavbarMenu>
				{siteConfig.navMenuItems.map((item, index) => (
					<NavbarMenuItem key={`${item}-${index}`}>
						<Link
							color={"foreground"}
							href="#"
							size="lg"
						>
							{item.label}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>

		</NextUINavbar >
	);
};
