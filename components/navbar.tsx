"use client";
import React from "react";

import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";

import NextLink from "next/link";

import { Logo } from "@/components/icons";
import ContactForm from "./common/contact-form";
import ContactFormButton from "./common/contact-form-button";
import NavmenuLink from "./common/navmenu-link";
import NavmenuServiceDropdown from "./common/navmenu-service-dropdown";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <>
      <ContactForm />
      <NextUINavbar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className="fixed self-center flex-grow w-full py-2 mx-auto bg-white rounded-none shadow-none lg:w-auto lg:max-w-6xl xl:max-w-7xl lg:rounded-b-3xl lg:shadow-md"
        classNames={{
          wrapper: "max-w-none px-6", // removes the built-in max width
        }}
      >
        {/* Mobile Layout */}
        <NavbarContent className="flex text-black lg:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>
        {/* Mobile Menu */}
        <NavbarMenu className="py-12">
          <NavmenuLink
            name="Services"
            _key="services-page"
            href="/services"
            currentPage={pathname}
            closeMenu={() => setIsMenuOpen(false)}
          />
          <NavmenuLink
            name="Canadian Dental Care Plan"
            _key="cdcp-page"
            href="/cdcp"
            currentPage={pathname}
            closeMenu={() => setIsMenuOpen(false)}
          />
          <NavmenuLink
            name="About Us"
            _key="about-page"
            href="/about"
            currentPage={pathname}
            closeMenu={() => setIsMenuOpen(false)}
          />
          <NavmenuLink
            name="Contact"
            _key="contact-page"
            href="/contact"
            currentPage={pathname}
            closeMenu={() => setIsMenuOpen(false)}
          />

          <ContactFormButton />
        </NavbarMenu>
        {/* Mobile Logo */}
        <NavbarContent
          className="flex items-center w-full pr-3 lg:hidden"
          justify="center"
        >
          <NavbarBrand className="justify-center w-full p-10 lg:p-0">
            <NextLink
              className="flex items-center justify-start gap-1"
              href="/"
            >
              <Logo />
            </NextLink>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="items-center hidden w-full lg:flex">
          {/* Logo on left, no grow */}
          <NavbarBrand className="flex-shrink-0">
            <NextLink href="/">
              <Logo />
            </NextLink>
          </NavbarBrand>

          {/* Links centered and grow to fill space */}
          <div className="flex flex-row justify-center flex-grow gap-5">
            <NavmenuServiceDropdown />
            <NavmenuLink
              name="Canadian Dental Care Plan"
              _key="cdcp-page"
              href="/cdcp"
              currentPage={pathname}
              closeMenu={() => {}}
            />
            <NavmenuLink
              name="About Us"
              _key="about-page"
              href="/about"
              currentPage={pathname}
              closeMenu={() => {}}
            />
            <NavmenuLink
              name="Contact"
              _key="contact-page"
              href="/contact"
              currentPage={pathname}
              closeMenu={() => {}}
            />
          </div>

          {/* Contact button on right, no grow */}
          <div className="flex-shrink-0">
            <ContactFormButton navbar={true} />
          </div>
        </NavbarContent>
      </NextUINavbar>
    </>
  );
};
