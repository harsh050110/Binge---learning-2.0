const CAD = () => {
  return (
    <section className="bg-gradient-to-b from-[#2b0a3d] to-[#120016] text-white">

      {/* HERO */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            CAD Course – <br />
            <span className="text-yellow-500">
              Draft, Design & Build with Precision
            </span>
          </h1>

          <p className="text-gray-300 mb-6">
            Learn professional 2D & 3D drafting used in mechanical, civil and
            architectural industries with live projects and internship support.
          </p>

          <div className="flex flex-wrap gap-3 mb-6">
            {["AutoCAD", "2D + 3D Drafting", "Live Projects", "Internship"].map(
              (item, i) => (
                <span
                  key={i}
                  className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium"
                >
                  {item}
                </span>
              )
            )}
          </div>

          <button className="bg-yellow-500 text-black px-6 py-3 rounded-xl font-semibold">
            Enroll Now
          </button>
        </div>

        <img
          src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
          alt="CAD"
          className="rounded-2xl shadow-xl"
        />
      </div>

      {/* STATS */}
      <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-3 gap-6 mb-20">
        {[
          { value: "700+", label: "Students Trained" },
          { value: "92%", label: "Placement Rate" },
          { value: "15+", label: "Industry Partners" },
        ].map((s, i) => (
          <div key={i} className="bg-white/5 rounded-xl py-6 text-center">
            <h3 className="text-3xl font-bold text-yellow-400">{s.value}</h3>
            <p className="text-gray-300">{s.label}</p>
          </div>
        ))}
      </div>

      {/* INTRODUCTION TO CAD */}
      <div className="max-w-7xl mx-auto px-6 pb-24 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6 text-gray-300">
          <h2 className="text-3xl font-bold text-white mb-2">Introduction to CAD at Binge Learning</h2>
          <p className="text-yellow-500 font-semibold mb-6">"From Concept to Creation: Engineering the Future"</p>
          <p>
            Computer-Aided Design (CAD) is the backbone of modern engineering. At <span className="text-white font-bold">Binge Learning</span>, we bridge the gap between academic theory and industrial application. Whether you are designing a high-speed turbine for an aircraft, a precision robotic arm, or a complex automotive chassis, our CAD module provides the digital drafting and 3D modeling skills required by top-tier global firms.
          </p>
          <p>
            Our curriculum focuses on the "Big Three" of the industry: <span className="text-white font-bold">CATIA</span> for advanced surfacing and aerospace, <span className="text-white font-bold">AutoCAD</span> for fundamental precision drafting, and <span className="text-white font-bold">Autodesk Inventor</span> for seamless mechanical assembly and digital prototyping.
          </p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-fit">
          <h4 className="text-xl font-semibold mb-4 text-white">Focus Areas</h4>
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex gap-3"><span className="text-yellow-500">✔</span> Advanced Surfacing & Aerospace</li>
            <li className="flex gap-3"><span className="text-yellow-500">✔</span> Precision Drafting</li>
            <li className="flex gap-3"><span className="text-yellow-500">✔</span> seamless Mechanical Assembly</li>
            <li className="flex gap-3"><span className="text-yellow-500">✔</span> Digital Prototyping</li>
          </ul>
        </div>
      </div>

      {/* DETAILED COURSE SYLLABUS */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-center mb-12">Detailed <span className="text-yellow-500">Course Syllabus</span></h2>
        <div className="space-y-12">
          
          {/* Tool 1 */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-2">1. AutoCAD: The Blueprint of Engineering</h3>
            <p className="text-gray-400 italic mb-8">Focus: Precision 2D Drafting & Fundamental 3D Layouts</p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-bold text-[#ff1493] mb-4">Beginner Level</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2"><span className="text-[#ff1493] mt-0.5">✔</span> Introduction to the UI and Workspace.</li>
                  <li className="flex items-start gap-2"><span className="text-[#ff1493] mt-0.5">✔</span> Mastering Draw and Modify tools (Lines, Polylines, Layers).</li>
                  <li className="flex items-start gap-2"><span className="text-[#ff1493] mt-0.5">✔</span> Dimensioning and Annotation standards.</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#00ced1] mb-4">Intermediate Level</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2"><span className="text-[#00ced1] mt-0.5">✔</span> Blocks and Dynamic Blocks for efficiency.</li>
                  <li className="flex items-start gap-2"><span className="text-[#00ced1] mt-0.5">✔</span> Isometric drawing techniques.</li>
                  <li className="flex items-start gap-2"><span className="text-[#00ced1] mt-0.5">✔</span> External References (Xrefs) and Sheet Set Management.</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-yellow-500 mb-4">Advanced Level</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✔</span> 3D Mesh and Solid Modeling.</li>
                  <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✔</span> Rendering and Visualization.</li>
                  <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✔</span> Customization using AutoLISP and Scripting.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tool 2 */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-2">2. CATIA: The Aerospace & Automotive Standard</h3>
            <p className="text-gray-400 italic mb-8">Focus: Advanced Surface Modeling & Complex Systems</p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-bold text-[#ff1493] mb-4">Beginner (Solid Modeling)</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2"><span className="text-[#ff1493] mt-0.5">✔</span> Sketcher Workbench: Constraint-based designing.</li>
                  <li className="flex items-start gap-2"><span className="text-[#ff1493] mt-0.5">✔</span> Part Design: Pads, Pockets, Shafts, and Ribs.</li>
                  <li className="flex items-start gap-2"><span className="text-[#ff1493] mt-0.5">✔</span> Boolean operations and Tree Management.</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#00ced1] mb-4">Intermediate (Surface & Wireframe Modeling)</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2"><span className="text-[#00ced1] mt-0.5">✔</span> Generative Shape Design (GSD): Creating complex curves and surfaces.</li>
                  <li className="flex items-start gap-2"><span className="text-[#00ced1] mt-0.5">✔</span> Wireframe tools: Points, Lines, and Splines in 3D space.</li>
                  <li className="flex items-start gap-2"><span className="text-[#00ced1] mt-0.5">✔</span> Surface Join, Split, and Trim operations.</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-yellow-500 mb-4">Advanced (Assembly & Kinematics)</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✔</span> Assembly Design: Bottom-up and Top-down approaches.</li>
                  <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✔</span> DMU Kinematics: Simulating mechanical movements and linkages.</li>
                  <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✔</span> Drafting Workbench: Generating industry-standard technical drawings.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tool 3 */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-2">3. Autodesk Inventor: Digital Prototyping</h3>
            <p className="text-gray-400 italic mb-8">Focus: Parametric Modeling & Mechanical Assembly</p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-bold text-[#ff1493] mb-4">Beginner Level</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2"><span className="text-[#ff1493] mt-0.5">✔</span> Parametric Sketching and Constraints.</li>
                  <li className="flex items-start gap-2"><span className="text-[#ff1493] mt-0.5">✔</span> Basic Part Features (Extrude, Revolve, Fillet).</li>
                  <li className="flex items-start gap-2"><span className="text-[#ff1493] mt-0.5">✔</span> Introduction to the Content Center (Standard Parts).</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#00ced1] mb-4">Intermediate Level</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2"><span className="text-[#00ced1] mt-0.5">✔</span> Adaptive Modeling and iParts.</li>
                  <li className="flex items-start gap-2"><span className="text-[#00ced1] mt-0.5">✔</span> Advanced Assembly Constraints and Joint connections.</li>
                  <li className="flex items-start gap-2"><span className="text-[#00ced1] mt-0.5">✔</span> Sheet Metal Design: Bends, Flanges, and Flat Patterns.</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-yellow-500 mb-4">Advanced Level</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✔</span> Stress Analysis and Frame Generator.</li>
                  <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✔</span> Tube & Pipe and Cable & Harness design.</li>
                  <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✔</span> Design Accelerator: Gears, Bearings, and Shafts wizard.</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* WHY CHOOSE BINGE LEARNING */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Why Choose Binge Learning
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: "👥",
              title: "Experienced Industry Mentors",
              desc: "Learn from professionals with 10+ years of real-world design experience in top agencies",
            },
            {
              icon: "🎒",
              title: "Hands-on Live Project Practice",
              desc: "Work on real client projects and build a portfolio that showcases your skills",
            },
            {
              icon: "📈",
              title: "Job-Oriented Curriculum",
              desc: "95% placement rate with dedicated career coaching and access to 50+ hiring partners",
            },
            {
              icon: "⏰",
              title: "Flexible Learning Schedule",
              desc: "Choose between weekend batches or weekday sessions that fit your lifestyle",
            },
            {
              icon: "🎧",
              title: "Lifetime Support & Updates",
              desc: "Get ongoing mentorship, course updates, and access to our alumni network forever",
            },
            {
              icon: "🎯",
              title: "100% Practical Training",
              desc: "Work on real client projects and build a portfolio that showcases your skills",
            },
          ].map((item, i) => (
            <div key={i} className="bg-[#1e052d] border border-white/10 rounded-2xl p-6 flex gap-4">
              <div className="bg-white/10 w-12 h-12 rounded-lg flex items-center justify-center shrink-0 text-2xl">
                {item.icon}
              </div>
              <div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>


      
    </section>
  );
};

export default CAD;
