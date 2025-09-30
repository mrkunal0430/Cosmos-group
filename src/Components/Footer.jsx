import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
    const quickLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <footer className="bg-gray-900 text-white pt-12">
            <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-3 gap-8">
                {/* Brand & Description */}
                <div>
                    <h2 className="text-2xl font-bold mb-4 text-yellow-400">Cosmos Group</h2>
                    <p className="text-gray-300">
                        Delivering excellence in services and projects with integrity and innovation. Your trusted partner for growth.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        {quickLinks.map((link) => (
                            <li key={link.name}>
                                <Link to={link.path} className="hover:text-yellow-400 transition">
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact & Social */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                    <p className="text-gray-300">Email: info@cosmosgroup.com</p>
                    <p className="text-gray-300">Phone: +91 98765 43210</p>

                    <div className="flex gap-4 mt-4">
                        <a href="#" className="hover:text-yellow-400 transition"><FaFacebookF /></a>
                        <a href="#" className="hover:text-yellow-400 transition"><FaTwitter /></a>
                        <a href="#" className="hover:text-yellow-400 transition"><FaLinkedinIn /></a>
                        <a href="#" className="hover:text-yellow-400 transition"><FaInstagram /></a>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright */}
            <div className="mt-8 border-t border-gray-800 py-4 text-center text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Cosmos Group. All rights reserved.
            </div>
        </footer>
    );
}
