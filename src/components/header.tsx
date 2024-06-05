"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import AuthBtn from "./auth-btn";

const navLinks = [
    {
        href: "/",
        label: "Principal"
    },
    {
        href: "/post",
        label: "Artículos"
    },
    {
        href: "/create-post",
        label: "Crear Post"
    },
];

export default function Header() {
    const pathName = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="relative flex justify-between items-center py-4 px-7">
            <div className="flex items-center">
                <Link href="/">
                    <p className="text-xl font-bold">LOGO</p>
                </Link>
            </div>
            <nav className="flex-grow flex justify-center">
                <button
                    className="md:hidden"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    ☰
                </button>
                <ul
                    className={`absolute top-full left-0 w-full rounded-xl bg-white shadow-md flex-col gap-x-5 text-[14px] md:flex md:flex-row md:static md:top-auto md:left-auto md:w-auto md:shadow-none md:bg-transparent ${
                        isMenuOpen ? "flex" : "hidden"
                    }`}
                >
                    {navLinks.map((link) => (
                        <li className="min-w-[80px]" key={link.href}>
                            <Link
                                className={`hover:text-zinc-900 hover:font-bold p-2 md:p-0 ${
                                    pathName === link.href
                                        ? "text-zinc-900 font-bold"
                                        : "text-zinc-400"
                                }`}
                                href={link.href}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="flex items-center">
                <AuthBtn />
            </div>
        </header>
    );
}
