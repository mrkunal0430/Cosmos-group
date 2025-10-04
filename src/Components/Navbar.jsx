import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white fixed w-full z-50 shadow-lg">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 md:py-4">

                {/* Brand */}
                <Link
                    to="/"
                    className="flex items-center gap-2 text-xl md:text-2xl font-bold tracking-wide hover:text-yellow-400 transition"
                >
                    <img
                        src="/CFG_Logo.webp"
                        alt="CFG Logo"
                        className="h-8 w-auto sm:h-10 object-contain"
                    />
                    <span className="hidden sm:inline-block">Cosmos Financial Group</span>
                </Link>

                {/* Desktop Links */}
                <nav className="hidden md:flex gap-8 text-base font-medium">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) =>
                                `hover:text-yellow-400 transition duration-300 ${isActive ? "text-yellow-400 font-semibold" : ""
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-3xl text-white focus:outline-none"
                >
                    {isOpen ? <HiX /> : <HiMenu />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            <div
                className={`md:hidden bg-gradient-to-b from-blue-600 to-indigo-700 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <nav className="flex flex-col items-center gap-4 py-4">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                `text-lg w-full text-center transition ${isActive
                                    ? "text-yellow-400 font-semibold"
                                    : "text-white hover:text-yellow-400"
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </header>
    );
}
