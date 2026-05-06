const PhysicsOfDesign = () => {
  return (
    <section className="bg-[#2a073f] text-yellow-500">
      {/* HERO */}
      <div className="max-w-[1200px] mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Physics of Design
          </h1>
          <p className="text-white/80 leading-relaxed mb-6">
            Understand the physics behind real-world products. Learn how forces,
            motion, fluids, heat, and materials influence design decisions in
            engineering and product development.
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              "Statics",
              "Dynamics",
              "Fluid Mechanics",
              "Thermal Physics",
              "Material Behavior",
            ].map((item, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-white/10 rounded-full text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Visual Placeholder */}
        <div className="h-[260px] bg-white/5 rounded-2xl flex items-center justify-center">
          <span className="text-white/40">
            Physics-Based Design Visual
          </span>
        </div>
      </div>

      {/* INTRODUCTION TO PHYSICS OF DESIGN */}
      <div className="max-w-[1200px] mx-auto px-6 pb-24 grid lg:grid-cols-3 gap-8 mt-10">
        <div className="lg:col-span-2 space-y-6 text-yellow-500">
          <h2 className="text-3xl font-bold text-white mb-2">Introduction: The Physics of Design</h2>
          <p className="text-yellow-500 font-semibold mb-6">"Bridging the Gap Between Calculus and Hardware"</p>
          <p className="text-gray-300">
            In this module, we move away from abstract textbook problems and move toward <span className="text-white font-bold">Problem-Solving Physics</span>. We teach students how to take a theoretical concept (like Newton's Second Law) and use it to predict if an airplane wing will snap or if a robot arm will tip over.
          </p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-fit text-gray-300">
          <h4 className="text-xl font-semibold mb-4 text-white">Learning Outcomes</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3"><span className="text-[#ff1493] font-bold">✔</span> Predict mechanical failures before they happen using mathematical models.</li>
            <li className="flex gap-3"><span className="text-[#00ced1] font-bold">✔</span> Translate physical constraints (gravity, friction, pressure) into software settings.</li>
            <li className="flex gap-3"><span className="text-yellow-500 font-bold">✔</span> Optimize designs for weight reduction (Generative Design) while maintaining structural safety.</li>
          </ul>
        </div>
      </div>

      {/* DETAILED COURSE SYLLABUS */}
      <div className="max-w-[1200px] mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Detailed <span className="text-yellow-500">Course Syllabus</span></h2>
        <div className="space-y-12">
          
          {/* Module 1 */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-2">1. Statics & Structural Mechanics (The Foundation)</h3>
            <p className="text-gray-400 italic mb-8">Focus: How objects resist force without moving.</p>
            
            <div className="grid md:grid-cols-3 gap-8 border-t border-white/10 pt-6">
              <div>
                <h4 className="text-lg font-bold text-[#ff1493] mb-4">I. Theory</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2"><span className="text-[#ff1493] mt-0.5">✔</span> Vector mechanics, Equilibrium of Rigid Bodies, and Moment of Inertia.</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#00ced1] mb-4">II. CAD/CAE Application</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2"><span className="text-[#00ced1] mt-0.5">✔</span> Defining Constraints (Fixed, Pinned, Slider) in AutoCAD/Inventor.</li>
                  <li className="flex items-start gap-2"><span className="text-[#00ced1] mt-0.5">✔</span> Calculating the Center of Gravity (CG) for robotic assemblies.</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-yellow-500 mb-4">III. Practical Problem Solving</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✔</span> <strong className="text-white">The Bridge Challenge:</strong> Calculate the reaction forces on a truss bridge and verify them using Ansys Static Structural.</li>
                  <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✔</span> <strong className="text-white">Stress & Strain:</strong> Using Young's Modulus (E) to select the right material (Aluminum vs. Steel) for a CAD part.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Module 2 */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-2">2. Dynamics & Kinematics (Objects in Motion)</h3>
            <p className="text-gray-400 italic mb-8">Focus: Velocity, Acceleration, and Linkages.</p>
            
            <div className="grid md:grid-cols-3 gap-8 border-t border-white/10 pt-6">
              <div>
                <h4 className="text-lg font-bold text-[#ff1493] mb-4">I. Theory</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2"><span className="text-[#ff1493] mt-0.5">✔</span> Work-Energy Theorem, Impulse-Momentum, and Degrees of Freedom (DoF).</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#00ced1] mb-4">II. CAD/CAE Application</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2"><span className="text-[#00ced1] mt-0.5">✔</span> Using CATIA DMU Kinematics to simulate a 6-axis robotic arm.</li>
                  <li className="flex items-start gap-2"><span className="text-[#00ced1] mt-0.5">✔</span> Defining "Time Steps" in LS-DYNA for transient events.</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-yellow-500 mb-4">III. Practical Problem Solving</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✔</span> <strong className="text-white">Robot Path Planning:</strong> Calculate the torque required at a motor joint to lift a 5kg load at a specific velocity.</li>
                  <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✔</span> <strong className="text-white">Gears & Cams:</strong> Designing a mechanical clockwork or transmission system where gear ratios determine output speed.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Module 3 */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-2">3. Fluid Dynamics & Aerodynamics</h3>
            <p className="text-gray-400 italic mb-8">Focus: How air and liquids interact with surfaces.</p>
            
            <div className="grid md:grid-cols-3 gap-8 border-t border-white/10 pt-6">
              <div>
                <h4 className="text-lg font-bold text-[#ff1493] mb-4">I. Theory</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2"><span className="text-[#ff1493] mt-0.5">✔</span> Bernoulli's Principle, Reynolds Number, and Navier-Stokes equations (Conceptual).</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#00ced1] mb-4">II. CAD/CAE Application</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2"><span className="text-[#00ced1] mt-0.5">✔</span> Designing "Aero-foils" in CATIA using Generative Shape Design.</li>
                  <li className="flex items-start gap-2"><span className="text-[#00ced1] mt-0.5">✔</span> Setting up CFD (Computational Fluid Dynamics) domains in Ansys Fluent.</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-yellow-500 mb-4">III. Practical Problem Solving</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✔</span> <strong className="text-white">Aerospace Lift:</strong> Design a wing profile and simulate air pressure zones to calculate Lift and Drag coefficients.</li>
                  <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✔</span> <strong className="text-white">Cooling Systems:</strong> Simulating airflow over a high-heat PCB (Robotics) to prevent thermal throttling.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Module 4 */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-2">4. Materials Science & Failure Physics</h3>
            <p className="text-gray-400 italic mb-8">Focus: Why and how things break.</p>
            
            <div className="grid md:grid-cols-3 gap-8 border-t border-white/10 pt-6">
              <div>
                <h4 className="text-lg font-bold text-[#ff1493] mb-4">I. Theory</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2"><span className="text-[#ff1493] mt-0.5">✔</span> Ductile vs. Brittle failure, Fatigue limits, and Heat Transfer.</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#00ced1] mb-4">II. CAD/CAE Application</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2"><span className="text-[#00ced1] mt-0.5">✔</span> Applying Nonlinear material properties in LS-DYNA.</li>
                  <li className="flex items-start gap-2"><span className="text-[#00ced1] mt-0.5">✔</span> Thermal expansion simulations in Ansys.</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-yellow-500 mb-4">III. Practical Problem Solving</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✔</span> <strong className="text-white">The Crash Test:</strong> Use the laws of Conservation of Momentum to simulate a vehicle impact. Analyze "Energy Absorption" zones in the chassis.</li>
                  <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✔</span> <strong className="text-white">Heat Dissipation:</strong> Calculate the thermal gradient of an engine block and design cooling fins in CAD to optimize heat loss.</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* DESIGN WORKFLOW */}
      <div className="bg-[#1e052d] border-t border-b border-white/10">
        <div className="max-w-[1200px] mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center text-white mb-2">
            The "Theory to Practical" Workflow
          </h2>
          <p className="text-center text-gray-400 mb-12">We teach a 3-step approach to every engineering problem:</p>

          <div className="grid md:grid-cols-3 gap-8 text-center relative">
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl relative z-10">
              <div className="w-12 h-12 bg-[#ff1493] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h4 className="text-lg font-bold text-white mb-3">Hand Calculation</h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                Solve the physics on paper using simplified formulas.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl relative z-10">
              <div className="w-12 h-12 bg-[#00ced1] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h4 className="text-lg font-bold text-white mb-3">CAD Modeling</h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                Build the precise geometry based on those calculations.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl relative z-10">
              <div className="w-12 h-12 bg-yellow-500 text-black rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h4 className="text-lg font-bold text-white mb-3">CAE Validation</h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                Run the simulation and compare the results to the hand calculation (Verification & Validation).
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* WHY CHOOSE BINGE LEARNING */}
      <div className="max-w-7xl mx-auto px-6 pb-24 mt-12">
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

export default PhysicsOfDesign;
