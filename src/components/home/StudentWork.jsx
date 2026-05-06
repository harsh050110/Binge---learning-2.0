import work1 from "../../assets/work/Asset1.jpg";
import work2 from "../../assets/work/Asset2.jpg";
import work3 from "../../assets/work/Asset3.jpg";
import work4 from "../../assets/work/Asset4.jpg";
import work5 from "../../assets/work/Asset5.jpg";

const worksRow1 = [work1, work2, work3, work4, work5];
const worksRow2 = [work5, work4, work3, work2, work1];

const StudentWork = () => {
  return (
    <section className="pt-32 pb-8 overflow-hidden bg-[#1a0b2e] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-500/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-[1440px] mx-auto px-6 relative z-10 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
                <span className="inline-block px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-xs font-black uppercase tracking-widest mb-6">
                    Real Results
                </span>
                <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                    Proof In Our <span className="text-yellow-500">Practice</span>
                </h2>
            </div>
            <p className="text-gray-400 text-lg md:text-xl font-medium max-w-sm italic">
                Showcasing the high-end creative and technical output from our dedicated students.
            </p>
        </div>
      </div>

      <div className="space-y-16">
        {/* Row 1 */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-12 animate-marquee whitespace-nowrap items-center">
            {[...worksRow1, ...worksRow1, ...worksRow1].map((img, i) => (
              <div
                key={i}
                className="group relative min-w-[150px] md:min-w-[200px] flex items-center justify-center transition-all duration-500 hover:scale-110"
              >
                <img
                  src={img}
                  alt="Student Work"
                  className="h-24 md:h-32 object-contain opacity-70 group-hover:opacity-100 transition-all duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-12 animate-marquee-reverse whitespace-nowrap items-center">
            {[...worksRow2, ...worksRow2, ...worksRow2].map((img, i) => (
              <div
                key={i}
                className="group relative min-w-[150px] md:min-w-[200px] flex items-center justify-center transition-all duration-500 hover:scale-110"
              >
                <img
                  src={img}
                  alt="Student Work"
                  className="h-24 md:h-32 object-contain opacity-70 group-hover:opacity-100 transition-all duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Edge Fades */}
      <div className="absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-[#1a0b2e] to-transparent z-20 pointer-events-none"></div>
      <div className="absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-[#1a0b2e] to-transparent z-20 pointer-events-none"></div>
    </section>
  );
};

export default StudentWork;
