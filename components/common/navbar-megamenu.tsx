import { Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger } from '@nextui-org/dropdown';
import { NavbarItem } from '@nextui-org/navbar';
import React, { useState } from 'react';
import { navbarLink } from '../primitives';

interface MegaMenuProps {
    item: any
}

const NavbarMegamenu: React.FC<MegaMenuProps> = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleInteraction = (event: any) => {
        event.stopPropagation(); // Stop the event from bubbling up
        event.preventDefault(); // Prevent default actions to ensure tap is handled explicitly
        setIsOpen(prev => !prev); // Toggle dropdown state
    };

    return (
        <Dropdown
            isOpen={isOpen}
            onMouseLeave={() => setIsOpen(false)}>
            <NavbarItem>
                <DropdownTrigger onMouseEnter={() => setIsOpen(true)} onClick={handleInteraction} >
                    <h1 className={navbarLink()}>{item.label}</h1>
                </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
                aria-label={item.label}
                className="w-full max-w-6xl p-2 lg:p-10 font-semibold" // Apply the grid layout
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
