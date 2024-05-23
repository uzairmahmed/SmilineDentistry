"use client"
import React, { useState } from "react";

import { Navbar as NextUINavbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu } from "@nextui-org/react";
import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { Logo } from "@/components/icons";

export const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	return (
		<NextUINavbar
			isMenuOpen={isMenuOpen}
			onMenuOpenChange={setIsMenuOpen}
			className='bg-white mx-auto max-w-7xl pt-16 px-10 flex-grow self-center rounded-b-3xl py-2 shadow-md'
		>
			<NavbarContent className="sm:hidden" justify="start">
				<NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
			</NavbarContent>

			<NavbarContent className="sm:hidden pr-3" justify="center">
				<NavbarBrand>
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<Logo />
						<p className="font-bold text-inherit">ACME</p>
					</NextLink>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="hidden sm:flex gap-4 w-full justify-between">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<Logo />
						<p className="font-bold text-inherit">ACME</p>
					</NextLink>
				</NavbarBrand>
				{siteConfig.navItems.map((item) => (
					<NavbarItem key={item.href}>
						<NextLink
							className={clsx(
								linkStyles({ color: "foreground" }),
								"text-xl data-[active=true]:text-primary data-[active=true]:font-medium"
							)}
							color="foreground"
							href={item.href}
						>
							{item.label}
						</NextLink>
					</NavbarItem>
				))}
				<div className="flex gap-5">
					<Button radius="full" className='px-10'>
						Contact
					</Button>
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

		</NextUINavbar>
	);
};
