import { DropdownItem } from '@nextui-org/dropdown';
import type { FC } from 'react';
import { navbarLink } from '../primitives';
import { NavbarItem } from '@nextui-org/navbar';
import NextLink from "next/link";

interface NavmenuLinkProps {
	name: string,
	href: string,
	_key: string,
	closeMenu: () => void,
	currentPage: string | null
}

const NavmenuLink: FC<NavmenuLinkProps> = ({ name, href, _key, closeMenu, currentPage}) => {
	return (
		<NavbarItem key={_key} isActive={currentPage===href}>
			<NextLink
				className={navbarLink()}
				color="foreground"
				href={href}
				onClick={() => closeMenu()}
			>
				{name}
			</NextLink>
		</NavbarItem>
	);
}

export default NavmenuLink;