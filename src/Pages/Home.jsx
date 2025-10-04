import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Briefcase, Users } from "lucide-react";
import CountUp from "react-countup";

const industries = [
  { name: "Consumer", content: "Consumer industry focuses on retail, FMCG, and customer services." },
  { name: "Healthcare", content: "Healthcare industry includes hospitals, medical devices, pharma, and wellness." },
  { name: "Tech", content: "Tech companies focus on software, AI, cloud computing, and SaaS products." },
  { name: "Startup", content: "Startups are innovative small companies looking to disrupt markets." },
  { name: "Agritech", content: "Agritech focuses on technology for agriculture and sustainable farming." },
  // Add more industries here
];



export default function Home() {

  const [activeIndustry, setActiveIndustry] = useState(industries[0].name);

  return (
    <div className="bg-gradient-to-b from-white to-slate-50">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/Home_Hero_Vedio.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>



        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-3xl md:text-5xl font-bold text-black">
            India’s Leading <br />
            <span className="text-green-400">Investment Bank</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-black max-w-2xl">
            Providing strategic, financial, and tactical advice in connection
            with Capital Raising, M&A, and Shareholder Engagements.
          </p>

          <button className="mt-6 px-6 py-3 rounded-full bg-green-600 text-white font-medium hover:bg-green-700 transition">
            View Our Recent Advisory Transactions
          </button>
        </div>

        {/* Bottom Stats */}
        <div className="absolute bottom-8 w-full flex flex-col md:flex-row justify-center gap-6 px-6">
          <div className="bg-white shadow-lg rounded-2xl p-6 text-center flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              <CountUp end={225} duration={7} />+
            </h2>
            <p className="text-gray-600">Transactions</p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6 text-center flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              $<CountUp end={7} duration={7} decimals={1} />Bn+
            </h2>
            <p className="text-gray-600">Transactions’ Value</p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6 text-center flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              <CountUp end={20} duration={7} />+
            </h2>
            <p className="text-gray-600">Years’ Track Record</p>
          </div>
        </div>

      </section>

      {/* Industries Section */}
      <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Explore Industries
        </h2>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {industries.map((industry) => (
            <button
              key={industry.name}
              onClick={() => setActiveIndustry(industry.name)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300
              ${activeIndustry === industry.name
                  ? "bg-indigo-600 text-white shadow-lg transform scale-105"
                  : "bg-white text-gray-800 hover:bg-indigo-100 hover:text-indigo-700"
                }`}
            >
              {industry.name}
            </button>
          ))}
        </div>

        {/* Result Screen */}
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl p-8 relative overflow-hidden">
          <div className="text-gray-700 text-lg md:text-xl leading-relaxed">
            {industries.find((i) => i.name === activeIndustry)?.content}
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-24 h-24 bg-indigo-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-pink-100 rounded-full translate-x-1/3 translate-y-1/3 opacity-50"></div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold text-emerald-700">500+</h3>
            <p className="text-slate-600">Happy Clients</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-emerald-700">1200+</h3>
            <p className="text-slate-600">Projects Delivered</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-emerald-700">15+</h3>
            <p className="text-slate-600">Years Experience</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
            Our Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-50 rounded-2xl shadow-sm hover:shadow-lg transition">
              <TrendingUp className="text-emerald-700 w-10 h-10 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Investment Planning</h3>
              <p className="text-slate-600">
                Tailored strategies to grow your wealth and secure your future.
              </p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl shadow-sm hover:shadow-lg transition">
              <Briefcase className="text-emerald-700 w-10 h-10 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Business Strategy</h3>
              <p className="text-slate-600">
                Helping businesses thrive with data-driven financial solutions.
              </p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl shadow-sm hover:shadow-lg transition">
              <Users className="text-emerald-700 w-10 h-10 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Wealth Management</h3>
              <p className="text-slate-600">
                Personalized wealth strategies for individuals & families.
              </p>
            </div>
          </div>
          <div className="mt-10">
            <Link
              to="/services"
              className="inline-block bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-800 transition"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
            Recent Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["FinTech Platform", "Blockchain Integration", "Digital Transformation"].map(
              (title, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition"
                >
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-lg flex items-center justify-center mb-4 font-bold">
                    {idx + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-slate-600">
                    Innovative project showcasing our expertise in {title.toLowerCase()}.
                  </p>
                </div>
              )
            )}
          </div>
          <div className="mt-10">
            <Link
              to="/projects"
              className="inline-block border border-emerald-700 text-emerald-700 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition"
            >
              See All Projects
            </Link>
          </div>
        </div>
      </section>


      {/* Call to Action */}
      <section className="py-20 bg-emerald-700 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Finances?
          </h2>
          <p className="text-lg mb-8">
            Partner with Cosmos Finance today and take the first step toward
            financial freedom and business growth.
          </p>
          <Link
            to="/contact"
            className="bg-white text-emerald-700 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
