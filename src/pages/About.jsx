import React from 'react';
import { FaGraduationCap, FaTools, FaUsers, FaProjectDiagram, FaLightbulb, FaRocket } from 'react-icons/fa';

const About = () => {
  return (
    <div className="bg-[#1a0b2e] text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-yellow-500 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-yellow-500/10 text-yellow-500 text-sm font-semibold mb-6 tracking-wider uppercase">
            About Binge Learning
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Bridging the Gap to <span className="text-yellow-500">Professional Mastery</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We believe that the gap between a student and a professional is bridged by industry-relevant skills. 
            In an era of rapid technological advancement, traditional education often stops at theory. 
            <span className="text-white font-semibold"> We start where the textbooks end.</span>
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-[#140824]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              At Binge Learning, we are on a mission to redefine technical education for the modern world. 
              We specialize in high-end technical and creative software training, ensuring that our students 
              are not just learners, but future creators of industry-standard solutions.
            </p>
            <div className="flex items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl italic text-yellow-400 text-xl font-medium">
              "We don't just teach software; we engineer careers and design futures."
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-purple-900/20 p-8 rounded-3xl border border-white/5 flex flex-col items-center text-center">
              <FaRocket className="text-yellow-500 text-4xl mb-4" />
              <h3 className="font-bold">Innovation</h3>
            </div>
            <div className="bg-purple-900/20 p-8 rounded-3xl border border-white/5 flex flex-col items-center text-center mt-8">
              <FaGraduationCap className="text-yellow-500 text-4xl mb-4" />
              <h3 className="font-bold">Excellence</h3>
            </div>
            <div className="bg-purple-900/20 p-8 rounded-3xl border border-white/5 flex flex-col items-center text-center -mt-8">
              <FaTools className="text-yellow-500 text-4xl mb-4" />
              <h3 className="font-bold">Precision</h3>
            </div>
            <div className="bg-purple-900/20 p-8 rounded-3xl border border-white/5 flex flex-col items-center text-center">
              <FaUsers className="text-yellow-500 text-4xl mb-4" />
              <h3 className="font-bold">Mentorship</h3>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 px-6 border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">What We Do</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Engineering Excellence */}
            <div className="group p-10 rounded-4xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-yellow-500/50 transition-all duration-500">
              <div className="w-16 h-16 bg-yellow-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <FaTools className="text-yellow-500 text-3xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-500">Engineering Excellence</h3>
              <p className="text-gray-400 mb-6">
                Mastering CAD & CAE tools to build the machines of tomorrow. We provide deep-dive training in:
              </p>
              <ul className="space-y-3">
                {['CATIA', 'AutoCAD', 'LS-DYNA', 'Inventor', 'Ansys'].map((tool) => (
                  <li key={tool} className="flex items-center gap-3 text-gray-300">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span> {tool}
                  </li>
                ))}
              </ul>
            </div>

            {/* Creative Innovation */}
            <div className="group p-10 rounded-4xl bg-gradient-to-bl from-white/5 to-transparent border border-white/10 hover:border-yellow-500/50 transition-all duration-500">
              <div className="w-16 h-16 bg-yellow-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <FaLightbulb className="text-yellow-500 text-3xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Creative Innovation</h3>
              <p className="text-gray-400 mb-6">
                Empowering designers to tell visual stories that matter. Our creative tracks cover:
              </p>
              <ul className="space-y-3">
                {['Photoshop', 'Illustrator', 'InDesign', 'Corel Draw', 'UI/UX Design'].map((tool) => (
                  <li key={tool} className="flex items-center gap-3 text-gray-300">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span> {tool}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 bg-[#1a0b2e]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Binge Learning?</h2>
            <p className="text-gray-400">The premier Edtech platform for high-end technical training.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <FaUsers />,
                title: "Industry Mentors",
                desc: "Learn from professionals who have worked on real-world engineering and design projects."
              },
              {
                icon: <FaProjectDiagram />,
                title: "Project-Based",
                desc: "We don't just teach tools; we build portfolios. Every course ends with a live project."
              },
              {
                icon: <FaLightbulb />,
                title: "Hybrid Focus",
                desc: "One of the few platforms bridging Engineering Precision and Graphic Aesthetics."
              },
              {
                icon: <FaRocket />,
                title: "Career Ready",
                desc: "From internship opportunities to placement assistance, step into industry with confidence."
              }
            ].map((item, index) => (
              <div key={index} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:-translate-y-2 transition-transform">
                <div className="text-yellow-500 text-3xl mb-6">{item.icon}</div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto p-12 rounded-[3rem] bg-gradient-to-r from-yellow-500 to-yellow-600 text-[#1a0b2e]">
          <h2 className="text-4xl font-bold mb-6">Ready to Engineer Your Future?</h2>
          <p className="text-xl font-medium mb-10 opacity-90">
            Join thousands of students who have leveled up their careers with Binge Learning.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/courses" className="px-10 py-4 bg-[#1a0b2e] text-white rounded-full font-bold hover:scale-105 transition-transform shadow-xl">
              Explore Courses
            </a>
            <a href="/contact" className="px-10 py-4 border-2 border-[#1a0b2e] rounded-full font-bold hover:bg-[#1a0b2e] hover:text-white transition-all">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
