import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    quote: "Binge Learning has been a complete turning point in my career. The industry-focused mentors made complex CAE tools easy to master!",
    name: "Pooja Bisht",
    course: "Graphic Design",
    title: "Career Growth"
  },
  {
    quote: "Joining Binge Learning was the best decision for my technical skills. The project-based approach improved my professional creativity.",
    name: "Subham Sinha",
    course: "CAD Path",
    title: "Technical Excellence"
  },
  {
    quote: "The personalized attention and career guidance made me confident enough to build a state-of-the-art design portfolio.",
    name: "Sourya Jain",
    course: "3D & Rendering",
    title: "Confidence Builder"
  },
];

const Testimonials = () => {
  return (
    <section className="pt-8 pb-8 bg-[#1a0b2e] relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-xs font-black uppercase tracking-widest mb-6">
            Social Proof
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Words From Our <span className="text-yellow-500">Success Stories</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto italic">
            Celebrating the achievements of students who transformed their curiosity into professional careers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((test, index) => (
            <div 
              key={index} 
              className="group relative bg-white/5 border border-white/10 rounded-[2.5rem] p-10 flex flex-col hover:border-yellow-500/30 transition-all duration-500 hover:-translate-y-3"
            >
              {/* Floating Quote Icon */}
              <div className="absolute -top-6 left-10 w-12 h-12 bg-yellow-500 rounded-2xl flex items-center justify-center text-black shadow-xl transform group-hover:rotate-12 transition-transform">
                <FaQuoteLeft />
              </div>

              <div className="flex gap-1 mb-8 pt-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <FaStar key={i} className="text-yellow-500 text-lg shadow-sm" />
                ))}
              </div>

              <h4 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-500 transition-colors">
                 "{test.title}"
              </h4>

              <p className="text-gray-400 leading-relaxed mb-10 italic text-lg opacity-80 group-hover:opacity-100 transition-opacity">
                "{test.quote}"
              </p>

              <div className="mt-auto flex items-center gap-4 pt-8 border-t border-white/5">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-200 flex items-center justify-center font-black text-black text-xs uppercase">
                    {test.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-white text-lg leading-none mb-1">{test.name}</p>
                  <p className="text-yellow-500 text-xs font-black uppercase tracking-widest">{test.course}</p>
                </div>
              </div>

              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-yellow-500/0 group-hover:bg-yellow-500/5 transition-colors pointer-events-none rounded-[2.5rem]"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
