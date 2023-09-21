import NavbarItem from "./NavbarItem";
import MobileMenu from "./MobileMenu";
import AccountMenu from "./AccountMenu";
import React, { useCallback, useEffect, useState } from 'react';

import { GiHamburgerMenu } from "react-icons/gi";
import { BsBell } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

const TOP_OFFSET = 66;

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showAccountMenu, setShowAccountMenu] = useState(false);

    const toggleMobileMenu = useCallback(() => {
        setShowMobileMenu((current) => !current);
    }, []);

    const toggleAccountMenu = useCallback(() => {
        setShowAccountMenu((current) => !current);
    }, []);

    return (
        <div className="w-full fixed z-40">
            <div
                className="
                    px-4 
                    md:px-12 
                    py-6 
                    flex 
                    flex-row 
                    items-center 
                    transition 
                    duration-500
                    bg-[#353b50]
                    bg-opacity-90
                "
            >
                <img className="h-6 lg:h-10" src="/images/HiddenLogo.png" alt="Logo" />
                <div
                    className="
                        flex-row
                        ml-8
                        gap-7
                        hidden
                        lg:flex
                    "
                >
                    <NavbarItem label="Dashboard" />
                    <NavbarItem label="Refresh Data" />
                    <NavbarItem label="Edit" />
                    <NavbarItem label="Calendar P&L" />
                    <NavbarItem label="Resources" />
                    <NavbarItem label="Settings" />
                </div>
                <div 
                    onClick={toggleMobileMenu}
                    className="
                        lg:hidden
                        flex
                        flex-row
                        items-center
                        gap-2
                        ml-8
                        cursor-pointer
                        relative
                    "
                >
                    <GiHamburgerMenu className="text-white transition" />
                    <MobileMenu visible={showMobileMenu} />
                </div>
                <div className="flex flex-row ml-auto gap-7 items-center">
                    <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                        <BsBell />
                    </div>
                    <div className="text-gray-200 hover:text-gray-300 flex flex-row items-center gap-2 cursor-pointer relative">
                        <CgProfile onClick={toggleAccountMenu} className="text-white transition cursor-pointer" size={'2em'} />
                        <AccountMenu visible={showAccountMenu} />
                    </div>

                </div>
            </div>
        </div>
    )   
}

export default Navbar;