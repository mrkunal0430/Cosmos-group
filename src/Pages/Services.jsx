// src/Pages/Services.jsx
import React from "react";

const Services = () => {
    return (
        <div className="bg-gray-50 text-gray-800">
            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center bg-[url('/services-bg.jpg')] bg-cover bg-center">
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative z-10 text-center px-6">
                    <h1 className="text-4xl md:text-6xl font-bold text-white">
                        Our Services
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
                        Delivering innovative financial solutions to help businesses,
                        investors, and entrepreneurs thrive.
                    </p>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 px-6 md:px-20 lg:px-32">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
                    What We Offer
                </h2>
                <p className="mt-4 text-lg text-gray-600 text-center max-w-3xl mx-auto">
                    At Cosmos Finance, we provide a wide range of financial advisory
                    services tailored to meet the unique needs of corporates, startups,
                    and investors.
                </p>

                <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold text-gray-900">
                            Investment Banking
                        </h3>
                        <p className="mt-3 text-gray-600">
                            Comprehensive financial advisory services including mergers,
                            acquisitions, and restructuring support.
                        </p>
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold text-gray-900">
                            Capital Raising
                        </h3>
                        <p className="mt-3 text-gray-600">
                            Assisting businesses in raising funds through debt, equity, or
                            strategic investments to fuel growth.
                        </p>
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold text-gray-900">
                            M&A Advisory
                        </h3>
                        <p className="mt-3 text-gray-600">
                            Expert guidance in mergers & acquisitions, ensuring maximum value
                            creation for stakeholders.
                        </p>
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold text-gray-900">
                            Corporate Finance
                        </h3>
                        <p className="mt-3 text-gray-600">
                            Tailored financial strategies to strengthen company structure and
                            long-term sustainability.
                        </p>
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold text-gray-900">
                            Strategic Consulting
                        </h3>
                        <p className="mt-3 text-gray-600">
                            Helping organizations optimize business operations and achieve
                            strategic objectives with confidence.
                        </p>
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold text-gray-900">
                            Risk & Compliance
                        </h3>
                        <p className="mt-3 text-gray-600">
                            Ensuring financial compliance with regulatory frameworks and
                            mitigating risks effectively.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Process */}
            <section className="py-20 px-6 md:px-20 lg:px-32 bg-gray-100">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
                    Our Process
                </h2>
                <p className="mt-4 text-lg text-gray-600 text-center max-w-3xl mx-auto">
                    We follow a structured approach to ensure every client receives the
                    highest quality of service and tailored financial solutions.
                </p>

                <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
                    <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
                        <h3 className="text-xl font-semibold text-gray-900">1. Analysis</h3>
                        <p className="mt-3 text-gray-600">
                            Understanding client needs, business goals, and financial
                            requirements.
                        </p>
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
                        <h3 className="text-xl font-semibold text-gray-900">2. Strategy</h3>
                        <p className="mt-3 text-gray-600">
                            Designing custom financial strategies aligned with market
                            insights.
                        </p>
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
                        <h3 className="text-xl font-semibold text-gray-900">3. Execution</h3>
                        <p className="mt-3 text-gray-600">
                            Implementing solutions with precision and delivering measurable
                            results.
                        </p>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 px-6 md:px-20 lg:px-32 bg-green-600 text-center text-white">
                <h2 className="text-3xl md:text-4xl font-bold">
                    Let’s Build Financial Success Together
                </h2>
                <p className="mt-4 text-lg max-w-3xl mx-auto">
                    Partner with Cosmos Finance for trusted financial advisory and
                    long-term growth strategies.
                </p>
                <button className="mt-6 px-6 py-3 bg-white text-green-700 font-semibold rounded-full shadow hover:bg-gray-100 transition">
                    Get In Touch
                </button>
            </section>
        </div>
    );
};

export default Services;
