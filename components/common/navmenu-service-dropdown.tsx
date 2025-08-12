import { Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger } from '@nextui-org/dropdown';
import type { FC } from 'react';
import { navbarLink } from '../primitives';
import { NavbarItem } from '@nextui-org/navbar';
import { ArrowDropRightIcon } from './icons';

interface NavmenuServiceDropdownProps { }


const NavmenuServiceDropdown: FC<NavmenuServiceDropdownProps> = ({ }) => {

	const services = [
		{
			name: "Preventative Dentistry",
			key: "preventative-dentistry-section",
			showTitle: true,
			pages: [
				{
					label: "Dental Cleaning",
					href: "/dental-cleaning",
					key: "/dental-cleaning-page",
					type: "main"
				},
				{
					label: "Dental Screening",
					href: "/dental-screening",
					key: "/dental-screening-page",
					type: "main"
				},
				{
					label: "Children's Dentistry",
					href: "/childrens-dentistry",
					key: "/childrens-dentistry-page",
					type: "main"
				},
			]
		}, {
			name: "Cosmetic Dentistry",
			key: "cosmetic-dentistry-section",
			showTitle: false,
			pages: [
				{
					label: "Cosmetic Dentistry",
					href: "/cosmetic-dentistry",
					key: "/cosmetic-dentistry-page",
					type: "main"
				},
				{
					label: "Teeth Whitening",
					href: "/cosmetic-dentistry",
					key: "/cosmetic-dentistry-teeth-whitening",
					type: 'sub'
				},
				{
					label: "Crowns",
					href: "/cosmetic-dentistry",
					key: "/cosmetic-dentistry-crowns",
					type: 'sub'
				},
				{
					label: "Verneers",
					href: "/cosmetic-dentistry",
					key: "/cosmetic-dentistry-verneers",
					type: 'sub'
				},
			]
		}, {
			name: "Dental Surgical Procedures",
			key: 'dental-surgical-procedures-section',
			showTitle: false,
			pages: [
				{
					label: "Dental Surgical Procedures",
					href: "/surgical-procedures",
					key: "/surgical-procedures-page",
					type: 'main'
				},
				{
					label: "Root Canal Treatment",
					href: "/surgical-procedures",
					key: "/surgical-procedures-rct",
					type: 'sub'
				},
				{
					label: "Dental Implants",
					href: "/surgical-procedures",
					key: "/surgical-procedures-implants",
					type: 'sub'
				},
				{
					label: "Dental Extractions",
					href: "/surgical-procedures",
					key: "/surgical-procedures-extractions",
					type: 'sub'
				},
			]
		}, {
			name: "Orthodontics",
			key: "orthodontics-section",
			showTitle: true,
			pages: [
				{
					label: "Invisalign",
					href: "/invisalign",
					key: "/invisalign-page",
					type: 'main'
				},
				{
					label: "Fastbraces",
					href: "/fastbraces",
					key: "/fastbraces-page",
					type: 'main'
				},
			]
		}, {
			name: "Dental Scans",
			key: "dental-scans-section",
			showTitle: false,
			pages: [
				{
					label: "Dental Scans",
					href: "/dental-scans",
					key: "/dental-scans-page",
					type: 'main'

				},
				{
					label: "X-Rays",
					href: "/dental-scans",
					key: "/dental-scans-xrays",
					type: 'sub'
				},
				{
					label: "Digital Impressions",
					href: "/dental-scans",
					key: "/dental-scans-impressions",
					type: 'sub'
				},
			]
		}, {
			name: "Dental Appliances",
			key: "dental-appliances-section",
			showTitle: false,
			pages: [
				{
					label: "Dental Appliances",
					href: "/mouthguards",
					key: "dental-appliances-page",
					type: "main"
				},
				{
					label: "Sports Mouthguards",
					href: "/mouthguards",
					key: "dental-appliances-mouthguards",
					type: "sub"
				},
				{
					label: "Nightguards",
					href: "/mouthguards",
					key: "dental-appliances-nightguards",
					type: "sub"
				},
			]
		}
	]

	return (
		<Dropdown>
			<NavbarItem>
				<DropdownTrigger >
					<h1 className={navbarLink()}>Services</h1>
				</DropdownTrigger>
			</NavbarItem>

			<DropdownMenu
				aria-label={"Services Dropdown"}
				className="w-full max-w-6xl p-2 font-semibold lg:p-10 font-" // Apply the grid layout
				classNames={{
					base: "",
					list: "grid grid:cols-1 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-10 flex-wrap justify-center",

				}}
				itemClasses={{
					base: "",
					description: "",
					selectedIcon: "",
					shortcut: "",
					wrapper: "",
					title: "",

				}}
			>

				{services.map(service => (
					<DropdownSection classNames={{
						base: "",
						heading: "block m-0 w-full py-1 rounded-sm text-left text-sm text-md font-medium text-foreground",
						group: "",
						divider: "",
					}}
						key={service.key} title={service.showTitle ? service.name : ""}>

						{service.pages.map(page => (page.type === "main" ? (
							<DropdownItem
								className={navbarLink({ type: 'navmenu' })}
								variant="light"
								key={page.key}
								href={page.href}
							>
								{page.label}
							</DropdownItem>
						) : (
							<DropdownItem
								className={navbarLink({ type: 'navmenusub' })}
								variant="light"
								key={page.key}
								href={page.href}
								startContent={<ArrowDropRightIcon />}
							>
								{page.label}
							</DropdownItem>
						)))}
					</DropdownSection>

				))}
			</DropdownMenu>
		</Dropdown>

	);
}

export default NavmenuServiceDropdown;