import { Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger, NavbarItem } from '@nextui-org/react';
import React, { useState } from 'react';
import { navbarLink } from '../primitives';

interface MegaMenuProps {
    item: any
}

const NavbarMegamenu: React.FC<MegaMenuProps> = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Dropdown
            isOpen={isOpen}
            onMouseLeave={() => setIsOpen(false)}>
            <NavbarItem>
                <DropdownTrigger onMouseEnter={() => setIsOpen(true)}>
                    <h1 className={navbarLink()}>{item.label}</h1>
                </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
                aria-label={item.label}
                className="w-full max-w-6xl p-10 font-semibold" // Apply the grid layout
                classNames={{
                    base: "",
                    list: "grid grid-cols-3 gap-10 flex-wrap justify-center",

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
                {item.subcategories.map((subcategory: any) => (
                    <DropdownSection key={subcategory.name} title={subcategory.name}>
                        {subcategory.pages.map((page: any) => (
                            <DropdownItem key={page.label} variant="light">
                                <a className={navbarLink({ type: 'navmenu' })} href={page.href}>{page.label}</a>
                            </DropdownItem>
                        ))}
                    </DropdownSection>
                ))}

            </DropdownMenu>
        </Dropdown>
    );
}

export default NavbarMegamenu;
