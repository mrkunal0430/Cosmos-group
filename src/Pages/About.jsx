// src/Pages/About.jsx
import React from "react";

const leadership = [
    {
        name: "Kunal Verma",
        role: "CEO & Founder",
        image: "/team/kunal.jpg",
        linkedin: "#",
        twitter: "#",
    },
    {
        name: "Veshant Dahiya",
        role: "COO",
        image: "/team/veshant.jpg",
        linkedin: "#",
        twitter: "#",
    },
    {
        name: "Sonali",
        role: "Manager - Operations",
        image: "/team/sonali.jpg",
        linkedin: "#",
        twitter: "#",
    },
];

const teamMembers = [
    {
        name: "Rohit Singh",
        role: "Software Engineer",
        image: "/team/rohit.jpg",
        linkedin: "#",
        twitter: "#",
    },
    {
        name: "Priya Mehta",
        role: "Marketing Lead",
        image: "/team/priya.jpg",
        linkedin: "#",
        twitter: "#",
    },
    {
        name: "Vikram Joshi",
        role: "UI/UX Designer",
        image: "/team/vikram.jpg",
        linkedin: "#",
        twitter: "#",
    },
    {
        name: "Sneha Kapoor",
        role: "Business Analyst",
        image: "/team/sneha.jpg",
        linkedin: "#",
        twitter: "#",
    },
    // Add more team members here
];


const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
};

const About = () => {
    return (
        <div className="bg-gray-50 text-gray-800">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center bg-[url('/about-bg.jpg')] bg-cover bg-center">
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative z-10 text-center px-6">
                    <h1 className="text-4xl md:text-6xl font-bold text-white">
                        About Cosmos Finance
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
                        Building trust and delivering excellence in financial advisory,
                        investment banking, and strategic consulting.
                    </p>
                </div>
            </section>

            {/* Company Overview */}
            <section className="py-16 px-6 md:px-20 lg:px-32 bg-white">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Who We Are
                    </h2>
                    <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                        Cosmos Finance is a trusted partner in the financial industry,
                        specializing in investment banking, capital raising, M&A advisory,
                        and corporate finance solutions. With decades of combined
                        experience, we help businesses, entrepreneurs, and investors
                        navigate complex financial landscapes with confidence and clarity.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16 px-6 md:px-20 lg:px-32 bg-gray-50 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h3 className="text-2xl font-semibold text-gray-900">Our Mission</h3>
                    <p className="mt-4 text-gray-600 leading-relaxed">
                        To empower businesses and investors by providing world-class
                        financial advisory, innovative solutions, and strategic insights
                        that drive growth, value creation, and long-term success.
                    </p>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold text-gray-900">Our Vision</h3>
                    <p className="mt-4 text-gray-600 leading-relaxed">
                        To be recognized as a leading financial advisory firm in India and
                        globally, known for integrity, excellence, and unwavering client
                        commitment.
                    </p>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 px-6 md:px-20 lg:px-32 bg-white">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
                    Our Core Values
                </h2>
                <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    <div className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-lg transition">
                        <h4 className="text-xl font-semibold text-gray-800">Integrity</h4>
                        <p className="mt-3 text-gray-600">
                            We uphold the highest standards of ethics and transparency in
                            every transaction.
                        </p>
                    </div>
                    <div className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-lg transition">
                        <h4 className="text-xl font-semibold text-gray-800">Excellence</h4>
                        <p className="mt-3 text-gray-600">
                            We strive for perfection in our work, ensuring accuracy and
                            professionalism.
                        </p>
                    </div>
                    <div className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-lg transition">
                        <h4 className="text-xl font-semibold text-gray-800">Innovation</h4>
                        <p className="mt-3 text-gray-600">
                            We embrace modern strategies and solutions to deliver the best
                            financial outcomes.
                        </p>
                    </div>
                    <div className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-lg transition">
                        <h4 className="text-xl font-semibold text-gray-800">Client Focus</h4>
                        <p className="mt-3 text-gray-600">
                            We prioritize client needs, building long-term partnerships based
                            on trust.
                        </p>
                    </div>
                </div>
            </section>

            {/* Expertise / Why Choose Us */}
            <section className="py-20 px-6 md:px-20 lg:px-32 bg-gray-50">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Why Choose Cosmos Finance?
                    </h2>
                    <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                        With a proven track record of successful transactions, global market
                        insights, and deep industry expertise, Cosmos Finance stands out as
                        the go-to financial partner for corporates, startups, and investors.
                    </p>
                    <div className="mt-12 grid md:grid-cols-3 gap-8">
                        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
                            <h3 className="text-2xl font-semibold text-gray-900">225+</h3>
                            <p className="mt-2 text-gray-600">Completed Transactions</p>
                        </div>
                        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
                            <h3 className="text-2xl font-semibold text-gray-900">$7Bn+</h3>
                            <p className="mt-2 text-gray-600">Transaction Value</p>
                        </div>
                        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
                            <h3 className="text-2xl font-semibold text-gray-900">20+</h3>
                            <p className="mt-2 text-gray-600">Years of Expertise</p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-24 px-6 relative overflow-hidden">
                {/* Background shapes */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse translate-x-1/3 translate-y-1/3"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12 tracking-wide">
                        Meet Our Leadership
                    </h2>

                    {/* Leadership */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20 justify-items-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ staggerChildren: 0.2 }}
                    >
                        {leadership.map((leader, idx) => (
                            <motion.div
                                key={idx}
                                className="bg-white rounded-3xl shadow-2xl overflow-hidden w-80 hover:shadow-3xl hover:-translate-y-3 transition-transform duration-500"
                                variants={cardVariants}
                            >
                                <div className="relative">
                                    <img
                                        src={leader.image}
                                        alt={leader.name}
                                        className="w-full h-80 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-4 rounded-3xl">
                                        <div className="flex gap-4">
                                            <a href={leader.linkedin} target="_blank" rel="noreferrer" className="text-white text-2xl hover:text-indigo-400">
                                                <i className="fab fa-linkedin"></i>
                                            </a>
                                            <a href={leader.twitter} target="_blank" rel="noreferrer" className="text-white text-2xl hover:text-blue-400">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-1">{leader.name}</h3>
                                    <p className="text-indigo-600 font-medium mb-2">{leader.role}</p>
                                    <p className="text-gray-500 text-sm">Leader in driving company vision and innovation.</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12 tracking-wide">
                        Our Team
                    </h2>

                    {/* Team Members */}
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ staggerChildren: 0.15 }}
                    >
                        {teamMembers.map((member, idx) => (
                            <motion.div
                                key={idx}
                                className="bg-white rounded-2xl shadow-xl overflow-hidden w-72 hover:shadow-2xl hover:-translate-y-2 transition-transform duration-500"
                                variants={cardVariants}
                            >
                                <div className="relative">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-72 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-4 rounded-2xl">
                                        <div className="flex gap-3">
                                            <a href={member.linkedin} target="_blank" rel="noreferrer" className="text-white text-xl hover:text-indigo-400">
                                                <i className="fab fa-linkedin"></i>
                                            </a>
                                            <a href={member.twitter} target="_blank" rel="noreferrer" className="text-white text-xl hover:text-blue-400">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-5 text-center">
                                    <h4 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h4>
                                    <p className="text-indigo-600 font-medium mb-2">{member.role}</p>
                                    <p className="text-gray-500 text-sm">Expert in their respective domain delivering top-notch results.</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>


            {/* Call to Action */}
            <section className="py-16 px-6 md:px-20 lg:px-32 bg-green-600 text-center text-white">
                <h2 className="text-3xl md:text-4xl font-bold">
                    Partner with Cosmos Finance
                </h2>
                <p className="mt-4 text-lg max-w-3xl mx-auto">
                    Let’s work together to achieve your financial goals with trusted
                    advisory, smart strategies, and a commitment to excellence.
                </p>
                <button className="mt-6 px-6 py-3 bg-white text-green-700 font-semibold rounded-full shadow hover:bg-gray-100 transition">
                    Contact Us Today
                </button>
            </section>
        </div>
    );
};

export default About;
