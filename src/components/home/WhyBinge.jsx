import { FaUserTie, FaBriefcase, FaBullseye, FaTv, FaTools } from "react-icons/fa";

const features = [
  {
    icon: <FaUserTie className="text-yellow-500" />,
    title: "Expert Faculty",
    desc: "Learn from industry professionals with real-world engineering and design experience.",
  },
  {
    icon: <FaBriefcase className="text-yellow-500" />,
    title: "Live Projects",
    desc: "Hands-on training with real client-based projects to build a professional portfolio.",
  },
  {
    icon: <FaBullseye className="text-yellow-500" />,
    title: "Job Ready",
    desc: "Curriculum meticulously designed to make you immediate industry-ready and placement-eligible.",
  },
  {
    icon: <FaTv className="text-yellow-500" />,
    title: "Live Interactive Classes",
    desc: "Real-time interactive sessions with direct doubt-solving and peer collaboration support.",
  },
  {
    icon: <FaTools className="text-yellow-500" />,
    title: "Practical Workflows",
    desc: "Deep focus on industry standard tools, specialized workflows, and practical problem solving.",
  },
];

const WhyBinge = () => {
  return (
    <section className="pt-24 pb-12 bg-[#1a0b2e] text-white relative">
      <div className="max-w-[1440px] mx-auto px-6 relative z-10">

        <div className="mb-20 max-w-3xl mx-auto flex flex-col items-center text-center">
          <span className="inline-flex items-center justify-center uppercase tracking-widest text-[10px] font-black text-yellow-500 bg-yellow-500/10 border border-yellow-500/20 px-6 py-2 rounded-full mb-8">
            Why Binge Learning
          </span>
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            Excellence In Every <span className="text-yellow-500">Aspect</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl italic">
            "Bridging the Gap between traditional education and industry standards through specialized technical mentorship."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="group relative flex flex-col p-10 bg-white/5 border border-white/10 rounded-[2.5rem] hover:border-yellow-500/20 transition-all duration-500 hover:-translate-y-2 shadow-2xl overflow-hidden"
            >
              {/* Card Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/5 text-3xl rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-yellow-500/10 group-hover:border-yellow-500/30 transition-all mb-8 shadow-xl">
                  {item.icon}
                </div>
                <h4 className="font-bold text-2xl text-white mb-4 group-hover:text-yellow-500/90 transition-colors">
                    {item.title}
                </h4>
                <p className="text-gray-400 leading-relaxed text-base font-medium">
                  {item.desc}
                </p>
              </div>

              {/* Decorative Corner Element */}
              <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-100 transition-opacity">
                 <div className="w-12 h-12 flex items-center justify-center border-t-2 border-r-2 border-yellow-500/40 rounded-tr-3xl"></div>
              </div>
            </div>
          ))}
          
          {/* Custom CTA Card */}
          <div className="group relative flex flex-col p-10 bg-gradient-to-br from-yellow-500 to-yellow-400 rounded-[2.5rem] shadow-2xl overflow-hidden justify-center items-center text-center">
             <h4 className="font-black text-3xl text-black mb-6">Ready to Start Your Journey?</h4>
             <a href="/contact" className="px-8 py-4 bg-black text-white rounded-2xl font-bold hover:scale-105 transition-transform shadow-xl">
                Get Free Guidance
             </a>
          </div>
        </div>

      </div>

      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
};

export default WhyBinge;
