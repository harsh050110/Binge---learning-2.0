import React from "react";

const CAE = () => {
  return (
    <section className="bg-[#2a073f] text-white">
      {/* HERO SECTION */}
      <div className="max-w-[1470px] mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Computer Aided Engineering (CAE) Course
          </h1>

          <p className="text-white/80 max-w-xl mb-8 leading-relaxed">
            Master simulation-driven engineering with industry-standard CAE
            tools. Learn structural, thermal, and fluid simulations used by
            automotive, aerospace, and manufacturing industries.
          </p>

          <div className="flex flex-wrap gap-4">
            <span className="bg-white/10 px-4 py-2 rounded-full text-sm">
              Live Projects
            </span>
            <span className="bg-white/10 px-4 py-2 rounded-full text-sm">
              Industry Mentors
            </span>
            <span className="bg-white/10 px-4 py-2 rounded-full text-sm">
              Internship Assistance
            </span>
            <span className="bg-white/10 px-4 py-2 rounded-full text-sm">
              Simulation Focused
            </span>
          </div>
        </div>

        {/* Right */}
        <div className="bg-white/5 rounded-3xl p-6">
          <img
            src="https://images.unsplash.com/photo-1581092919534-09a5c2c6f1d9"
            alt="CAE Simulation"
            className="rounded-2xl w-full object-cover"
          />
        </div>
      </div>

      {/* INTRODUCTION TO CAE */}
      <div className="max-w-[1470px] mx-auto px-6 pb-24 grid lg:grid-cols-3 gap-8 mt-10">
        <div className="lg:col-span-2 space-y-6 text-gray-300">
          <h2 className="text-3xl font-bold text-white mb-2">Introduction to CAE at Binge Learning</h2>
          <p className="text-yellow-500 font-semibold mb-6">"Simulating Reality: Engineering Without Limits"</p>
          <p>
            Computer-Aided Engineering (CAE) is the practice of using advanced software to simulate how a product will behave in the real world. In the Mechanical and Aerospace industries, CAE is used to predict crash impacts, fluid flow, and structural integrity before a single physical prototype is ever built.
          </p>
          <p>
            Our curriculum focuses on the industry's "Power Trio": <span className="text-white font-bold">HyperMesh</span> for high-quality FEA pre-processing, <span className="text-white font-bold">Ansys</span> for multi-physics structural and thermal analysis, and <span className="text-white font-bold">LS-DYNA</span> for high-speed impact and crash simulation.
          </p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-fit">
          <h4 className="text-xl font-semibold mb-4 text-white">Learning Outcomes</h4>
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex gap-3"><span className="text-[#ff1493] font-bold">1</span> Prepare complex CAD models for simulation using professional meshing standards.</li>
            <li className="flex gap-3"><span className="text-[#00ced1] font-bold">2</span> Analyze structural integrity and predict failure points under various loads.</li>
            <li className="flex gap-3"><span className="text-yellow-500 font-bold">3</span> Simulate high-speed impacts and crashes for automotive and aerospace safety.</li>
            <li className="flex gap-3"><span className="text-green-500 font-bold">4</span> Optimize designs to reduce weight while maintaining safety factors.</li>
          </ul>
        </div>
      </div>

      {/* DETAILED COURSE SYLLABUS */}
      <div className="max-w-[1470px] mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-center mb-12">Detailed <span className="text-yellow-500">Course Syllabus</span></h2>
        <div className="space-y-12">
          
          {/* Tool 1 */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-2">1. Altair HyperMesh: The Art of Pre-Processing</h3>
            <p className="text-gray-400 italic mb-8">Focus: High-Fidelity Meshing & Geometry Cleanup</p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-bold text-[#ff1493] mb-4">Beginner Level</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2"><span className="text-[#ff1493] mt-0.5">✔</span> Introduction to the Finite Element Method (FEM) and FEA workflow.</li>
                  <li className="flex items-start gap-2"><span className="text-[#ff1493] mt-0.5">✔</span> Geometry Cleanup: Defeaturing, Midsurfacing, and Topology repair.</li>
                  <li className="flex items-start gap-2"><span className="text-[#ff1493] mt-0.5">✔</span> 1D Meshing (Beams, Rods) and 2D Meshing (Shells/Quads).</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#00ced1] mb-4">Intermediate Level</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2"><span className="text-[#00ced1] mt-0.5">✔</span> 3D Meshing: Tetra and Hexa (Brick) meshing techniques.</li>
                  <li className="flex items-start gap-2"><span className="text-[#00ced1] mt-0.5">✔</span> Quality Index (QI) Optimization: Solving Jacobian, Warpage, and Aspect Ratio issues.</li>
                  <li className="flex items-start gap-2"><span className="text-[#00ced1] mt-0.5">✔</span> Material and Property assignment for different solvers.</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-yellow-500 mb-4">Advanced Level</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✔</span> Batch Meshing and Connectors (Spot welds, Seam welds, Bolts).</li>
                  <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✔</span> Morphing techniques to adjust geometry without re-meshing.</li>
                  <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✔</span> Automation using Tcl/Tk scripting.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tool 2 */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-2">2. Ansys: Multi-Physics Simulation</h3>
            <p className="text-gray-400 italic mb-8">Focus: Structural, Thermal, and Fluid Validation</p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-bold text-[#ff1493] mb-4">Beginner Level</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2"><span className="text-[#ff1493] mt-0.5">✔</span> Introduction to Ansys Workbench and DesignModeler.</li>
                  <li className="flex items-start gap-2"><span className="text-[#ff1493] mt-0.5">✔</span> Static Structural Analysis: Stress, Strain, and Deformation.</li>
                  <li className="flex items-start gap-2"><span className="text-[#ff1493] mt-0.5">✔</span> Steady-State Thermal Analysis.</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#00ced1] mb-4">Intermediate Level</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2"><span className="text-[#00ced1] mt-0.5">✔</span> Modal Analysis: Finding Natural Frequencies and Vibration patterns.</li>
                  <li className="flex items-start gap-2"><span className="text-[#00ced1] mt-0.5">✔</span> Non-linear Analysis: Large deflection and Material non-linearity (Plasticity).</li>
                  <li className="flex items-start gap-2"><span className="text-[#00ced1] mt-0.5">✔</span> Buckling and Fatigue Analysis to predict product life.</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-yellow-500 mb-4">Advanced Level</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✔</span> Introduction to Fluent: Computational Fluid Dynamics (CFD).</li>
                  <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✔</span> Coupled Field Analysis (e.g., Thermal-Structural interaction).</li>
                  <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✔</span> Optimization using Ansys DesignXplorer.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tool 3 */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-2">3. LS-DYNA: Explicit Dynamics & Crash Simulation</h3>
            <p className="text-gray-400 italic mb-8">Focus: High-Speed Impact & Non-linear Transient Events</p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-bold text-[#ff1493] mb-4">Beginner Level</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2"><span className="text-[#ff1493] mt-0.5">✔</span> Understanding Explicit vs. Implicit Solvers.</li>
                  <li className="flex items-start gap-2"><span className="text-[#ff1493] mt-0.5">✔</span> LS-PrePost: Setting up keywords and control cards.</li>
                  <li className="flex items-start gap-2"><span className="text-[#ff1493] mt-0.5">✔</span> Defining Initial Velocity and Boundary Conditions.</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#00ced1] mb-4">Intermediate Level</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2"><span className="text-[#00ced1] mt-0.5">✔</span> Contact Mechanics: Automatic Single Surface and Surface-to-Surface contacts.</li>
                  <li className="flex items-start gap-2"><span className="text-[#00ced1] mt-0.5">✔</span> Material Modeling: Linear Elastic vs. Piecewise Linear Plasticity (Mat 24).</li>
                  <li className="flex items-start gap-2"><span className="text-[#00ced1] mt-0.5">✔</span> Time-step control and Hourglass energy management.</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-yellow-500 mb-4">Advanced Level</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✔</span> Full Vehicle Crashworthiness (Frontal/Side Impact).</li>
                  <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✔</span> Drop Test simulation for consumer electronics.</li>
                  <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✔</span> Fluid-Structure Interaction (FSI) and SPH (Smoothed Particle Hydrodynamics).</li>
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

export default CAE;
