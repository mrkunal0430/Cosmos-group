import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi"; // hamburger & close icons

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
        <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white fixed w-full z-50 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
                {/* Brand */}
                <Link to="/" className="text-2xl font-bold tracking-wide hover:text-yellow-400 transition">
                    Cosmos Group
                </Link>

                {/* Desktop Links */}
                <nav className="hidden md:flex gap-6">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) =>
                                `hover:text-yellow-400 transition ${isActive ? "text-yellow-400 font-semibold" : ""
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </nav>

                {/* Mobile Hamburger */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-2xl focus:outline-none">
                        {isOpen ? <HiX /> : <HiMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-gradient-to-b from-blue-600 to-indigo-700 px-4 py-4 space-y-4">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                `block text-lg hover:text-yellow-400 transition ${isActive ? "text-yellow-400 font-semibold" : ""
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>
            )}
        </header>
    );
}
