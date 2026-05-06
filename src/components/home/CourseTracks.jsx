import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaGraduationCap, FaRocket } from "react-icons/fa";
import course1 from "../../assets/courses/course1.jpeg";
import course2 from "../../assets/courses/course2.jpeg";
import course3 from "../../assets/courses/course3.jpeg";
import course4 from "../../assets/courses/course4.jpeg";
import course5 from "../../assets/courses/course5.jpeg";

const categories = [
  {
    title: "Design & Modeling",
    icon: <FaRocket className="text-yellow-500" />,
    description: "Master 2D drafting, 3D modeling, and visual communication with industry-standard workflows.",
    courses: [
      { title: "Graphics Design", img: course1, path: "/courses/graphics", level: "Beginner - Pro" },
      { title: "3D Design & Modeling", img: course2, path: "/courses/3d", level: "Intermediate" },
      { title: "CAD Specialization", img: course5, path: "/courses/cad", level: "Professional" },
    ]
  },
  {
    title: "CAE & Engineering",
    icon: <FaGraduationCap className="text-yellow-500" />,
    description: "Validate complex designs before manufacturing using advanced FEA and physics-based simulations.",
    courses: [
      { title: "CAE Simulation", img: course3, path: "/courses/cae", level: "Advanced" },
      { title: "Physics of Design", img: course4, path: "/courses/physics", level: "Professional" },
    ]
  }
];

const CourseTracks = () => {
  return (
    <section className="pt-12 pb-24 bg-[#1a0b2e] text-white overflow-hidden relative">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-xs font-bold uppercase tracking-widest mb-6">
            Curated Learning Paths
          </span>
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Build Your <span className="text-yellow-500">Expertise</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Strategically designed tracks to take you from a curious student to a highly skilled professional.
          </p>
        </div>

        <div className="space-y-24">
          {categories.map((category, idx) => (
            <div key={idx} className="relative">
              {/* Category Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-white/5 pb-8">
                <div className="max-w-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                      {category.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold">{category.title}</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed italic">{category.description}</p>
                </div>
                <Link to="/courses" className="text-yellow-500 font-bold flex items-center gap-2 group hover:translate-x-2 transition-transform">
                  Explore All Track <FaArrowRight className="text-sm" />
                </Link>
              </div>

              {/* Course Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.courses.map((course, cIdx) => (
                  <Link 
                    key={cIdx} 
                    to={course.path}
                    className="group relative flex flex-col bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden hover:border-yellow-500/50 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                  >
                    {/* Image Wrapper */}
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        src={course.img} 
                        alt={course.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a0b2e] via-transparent to-transparent opacity-60"></div>
                      
                      {/* Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-lg bg-black/40 backdrop-blur-md border border-white/10 text-[10px] font-bold uppercase tracking-wider">
                          {course.level}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 flex flex-col flex-grow">
                      <h4 className="text-2xl font-bold mb-4 group-hover:text-yellow-500 transition-colors leading-tight">
                        {course.title}
                      </h4>
                      <div className="mt-auto flex items-center justify-between opacity-60 group-hover:opacity-100 transition-opacity">
                        <span className="text-sm font-medium">Learn Industry Skills</span>
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-yellow-500 group-hover:text-black transition-all">
                          <FaArrowRight />
                        </div>
                      </div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 border-[3px] border-yellow-500/0 group-hover:border-yellow-500/20 rounded-[2rem] transition-all pointer-events-none"></div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseTracks;
