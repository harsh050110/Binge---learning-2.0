import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import course1 from "../../assets/courses/course1.jpeg";
import course2 from "../../assets/courses/course2.jpeg";
import course3 from "../../assets/courses/course3.jpeg";
import course4 from "../../assets/courses/course4.jpeg";
import course5 from "../../assets/courses/course5.jpeg";

const courses = [
  { title: "Graphics Design", img: course1, path: "/courses/graphics", category: "Design" },
  { title: "3D Modeling", img: course2, path: "/courses/3d", category: "3D Design" },
  { title: "CAE Simulation", img: course3, path: "/courses/cae", category: "Engineering" },
  { title: "Physics of Design", img: course4, path: "/courses/physics", category: "R&D" },
  { title: "CAD Specialization", img: course5, path: "/courses/cad", category: "Industry" },
];

const CoursesPreview = () => {
  return (
    <section className="py-20 bg-[#140824] text-white min-h-screen relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="max-w-[1470px] mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl text-center md:text-left mx-auto md:mx-0">
            <span className="inline-block px-4 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-[10px] font-bold uppercase tracking-widest mb-4">
              Official Curriculum
            </span>
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              Building <span className="text-yellow-500">careers</span> <br /> 
              step by step
            </h2>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <Link
              key={index}
              to={course.path}
              className="group/card relative flex flex-col bg-white/5 border border-white/10 rounded-[1.5rem] overflow-hidden hover:border-yellow-500/50 transition-all duration-500 hover:-translate-y-2 shadow-lg"
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={course.img}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#140824] via-[#140824]/40 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute bottom-4 left-6">
                  <span className="px-3 py-1 rounded-lg bg-white/10 backdrop-blur-xl border border-white/10 text-[10px] font-bold uppercase tracking-wider">
                    {course.category}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col">
                <h3 className="text-xl font-bold mb-4 group-hover/card:text-yellow-500 transition-colors leading-tight">
                  {course.title}
                </h3>
                
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Duration</span>
                    <p className="text-xs text-gray-300 font-medium">6-12 Weeks</p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-500 group-hover/card:bg-yellow-500 group-hover/card:text-black transition-all">
                    <FaArrowRight className="text-sm" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
            <p className="text-gray-500 font-medium mb-4">Unsure where to start?</p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-3 px-10 py-5 bg-transparent border-2 border-white/10 rounded-full font-bold hover:border-yellow-500 hover:text-yellow-500 transition-all group"
            >
              Get Career Guidance <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
        </div>
      </div>
    </section>
  );
};

export default CoursesPreview;
