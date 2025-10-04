// src/Pages/Projects.jsx
import React from "react";

const Projects = () => {
    const recentProjects = [
        {
            title: "M&A Advisory – Tech Startup Acquisition",
            description:
                "Advised on a $120M acquisition of a leading SaaS startup by a global tech giant, ensuring smooth negotiations and value maximization.",
            industry: "Technology",
            value: "$120M",
            year: "2025",
        },
        {
            title: "Capital Raising – Healthcare Expansion",
            description:
                "Structured $75M equity funding for a healthcare chain, enabling expansion into 10+ new cities.",
            industry: "Healthcare",
            value: "$75M",
            year: "2024",
        },
        {
            title: "Corporate Finance – Manufacturing Restructuring",
            description:
                "Guided a manufacturing firm through financial restructuring, reducing debt burden by 30% while increasing operational efficiency.",
            industry: "Manufacturing",
            value: "$50M",
            year: "2024",
        },
        {
            title: "IPO Advisory – Fintech Unicorn",
            description:
                "Provided end-to-end IPO advisory to a fintech unicorn, raising $500M and successfully listing on the stock exchange.",
            industry: "Fintech",
            value: "$500M",
            year: "2023",
        },
    ];

    return (
        <div className="bg-gray-50 text-gray-800">
            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center bg-[url('/projects-bg.jpg')] bg-cover bg-center">
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative z-10 text-center px-6">
                    <h1 className="text-4xl md:text-6xl font-bold text-white">
                        Our Projects & Case Studies
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
                        A proven track record of successful transactions across industries,
                        driving growth and delivering measurable results.
                    </p>
                </div>
            </section>

            {/* Recent Projects */}
            <section className="py-20 px-6 md:px-20 lg:px-32">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
                    Recent Projects
                </h2>
                <p className="mt-4 text-lg text-gray-600 text-center max-w-3xl mx-auto">
                    Explore some of our most impactful projects where we helped clients
                    achieve their financial goals through expert advisory.
                </p>

                <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {recentProjects.map((project, index) => (
                        <div
                            key={index}
                            className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col"
                        >
                            <h3 className="text-xl font-semibold text-gray-900">
                                {project.title}
                            </h3>
                            <p className="mt-3 text-gray-600 flex-grow">{project.description}</p>
                            <div className="mt-4 text-sm text-gray-500">
                                <p>
                                    <span className="font-semibold">Industry:</span>{" "}
                                    {project.industry}
                                </p>
                                <p>
                                    <span className="font-semibold">Value:</span> {project.value}
                                </p>
                                <p>
                                    <span className="font-semibold">Year:</span> {project.year}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Our Projects Stand Out */}
            <section className="py-20 px-6 md:px-20 lg:px-32 bg-gray-100">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Why Our Projects Deliver Results
                    </h2>
                    <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                        Every project is backed by deep financial expertise, strong industry
                        knowledge, and a client-first approach. We combine strategy,
                        execution, and innovation to deliver maximum value.
                    </p>
                    <div className="mt-12 grid md:grid-cols-3 gap-8">
                        <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
                            <h3 className="text-xl font-semibold text-gray-900">Strategic Impact</h3>
                            <p className="mt-3 text-gray-600">
                                Our projects drive long-term strategic value for our clients,
                                not just short-term gains.
                            </p>
                        </div>
                        <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
                            <h3 className="text-xl font-semibold text-gray-900">Global Expertise</h3>
                            <p className="mt-3 text-gray-600">
                                We combine local insights with global perspectives to craft
                                tailored solutions.
                            </p>
                        </div>
                        <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
                            <h3 className="text-xl font-semibold text-gray-900">Proven Success</h3>
                            <p className="mt-3 text-gray-600">
                                With billions in transactions executed, our track record speaks
                                for itself.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 px-6 md:px-20 lg:px-32 bg-green-600 text-center text-white">
                <h2 className="text-3xl md:text-4xl font-bold">
                    Partner With Cosmos Finance
                </h2>
                <p className="mt-4 text-lg max-w-3xl mx-auto">
                    Discover how our expertise can add value to your business. Whether
                    it’s raising capital, mergers & acquisitions, or strategic consulting,
                    we deliver with excellence.
                </p>
                <button className="mt-6 px-6 py-3 bg-white text-green-700 font-semibold rounded-full shadow hover:bg-gray-100 transition">
                    Contact Us Today
                </button>
            </section>
        </div>
    );
};

export default Projects;
