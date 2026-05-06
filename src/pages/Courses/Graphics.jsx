const GraphicDesign = () => {
  return (
    <section className="bg-gradient-to-b from-[#2b0a3d] to-[#120016] text-white">
      {/* HERO */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 grid md:grid-cols-2 gap-10 items-center">
        {/* Left */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Graphic Designing Course – <br />
            <span className="text-yellow-500">
              Master Creativity with Binge Learning
            </span>
          </h1>

          <p className="text-gray-300 mb-6">
            Transform your creativity into a career. Live projects, internship &
            placement assistance.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-3 mb-6">
            {[
              "Live Projects",
              "Internship Included",
              "Placement Assistance",
              "AI Tools",
            ].map((item, i) => (
              <span
                key={i}
                className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium"
              >
                {item}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex gap-4">
            <button className="bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-xl font-semibold">
              Enroll Now
            </button>
            <button className="border border-white/30 px-6 py-3 rounded-xl">
              View Curriculum
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1587620962725-abab7fe55159"
            alt="Graphic Design"
            className="rounded-2xl shadow-xl"
          />
          <span className="absolute bottom-4 left-4 bg-white text-black px-4 py-2 rounded-full text-sm font-semibold">
            Industry Certified • Professional Course
          </span>
        </div>
      </div>

      {/* STATS */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
        {[
          { value: "1000+", label: "Students Trained" },
          { value: "95%", label: "Placement Rate" },
          { value: "20+", label: "Hiring Partners" },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-white/5 rounded-xl py-6 text-center"
          >
            <h3 className="text-3xl font-bold text-yellow-500">
              {stat.value}
            </h3>
            <p className="text-gray-300">{stat.label}</p>
          </div>
        ))}
      </div>
      {/* INTRODUCTION TO GRAPHICS */}
      <div className="max-w-[1470px] mx-auto px-6 pb-24 grid lg:grid-cols-3 gap-8 mt-10">
        <div className="lg:col-span-2 space-y-6 text-gray-300">
          <h2 className="text-3xl font-bold text-white mb-2">Introduction to Graphic Design at Binge Learning</h2>
          <p className="text-yellow-500 font-semibold mb-6">"Visual Storytelling: Where Logic Meets Creativity"</p>
          <p>
            In the modern world, design is the first point of contact between a brand and its audience. Our Graphic Design module goes beyond just teaching software; we teach the <span className="text-white font-bold">Psychology of Design</span>, <span className="text-white font-bold">Color Theory</span>, and <span className="text-white font-bold">Typography</span>.
          </p>
          <p>
            Whether you are creating marketing collateral for an aerospace firm, branding a robotics startup, or designing UI for engineering software, this course provides the creative toolkit to communicate complex ideas through stunning visuals.
          </p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-fit">
          <h4 className="text-xl font-semibold mb-4 text-white">Learning Outcomes</h4>
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex gap-3"><span className="text-[#ff1493] font-bold">1</span> Design professional logos and brand identities from scratch.</li>
            <li className="flex gap-3"><span className="text-[#00ced1] font-bold">2</span> Manipulate and retouch images for high-end marketing.</li>
            <li className="flex gap-3"><span className="text-yellow-500 font-bold">3</span> Construct complex layouts for magazines, books, and technical reports.</li>
            <li className="flex gap-3"><span className="text-green-500 font-bold">4</span> Produce print-ready files for any industrial or commercial application.</li>
          </ul>
        </div>
      </div>

      {/* DETAILED COURSE SYLLABUS */}
      <div className="max-w-[1470px] mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-center mb-12">Detailed <span className="text-yellow-500">Course Syllabus</span></h2>
        <div className="space-y-12">
          
          {/* Tool 1 */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-2">1. Adobe Photoshop: The Power of Raster & Retouching</h3>
            <p className="text-gray-400 italic mb-8">Focus: Image Manipulation, Digital Art, and Compositing</p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-bold text-[#ff1493] mb-4">Beginner Level</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2"><span className="text-[#ff1493] mt-0.5">✔</span> Understanding Layers, Masks, and Selection tools.</li>
                  <li className="flex items-start gap-2"><span className="text-[#ff1493] mt-0.5">✔</span> Introduction to Non-Destructive Editing.</li>
                  <li className="flex items-start gap-2"><span className="text-[#ff1493] mt-0.5">✔</span> Color Correction and Basic Photo Retouching.</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#00ced1] mb-4">Intermediate Level</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2"><span className="text-[#00ced1] mt-0.5">✔</span> Advanced Compositing: Blending multiple images seamlessly.</li>
                  <li className="flex items-start gap-2"><span className="text-[#00ced1] mt-0.5">✔</span> Digital Painting and Custom Brush creation.</li>
                  <li className="flex items-start gap-2"><span className="text-[#00ced1] mt-0.5">✔</span> Creating Web Mockups and Social Media Graphics.</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-yellow-500 mb-4">Advanced Level</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✔</span> Complex Photo Manipulation and Matte Painting.</li>
                  <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✔</span> Automating workflows with Actions and Batch Processing.</li>
                  <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✔</span> 3D Textures and Post-Processing for Engineering Renders.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tool 2 */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-2">2. Adobe Illustrator: Vector Mastery</h3>
            <p className="text-gray-400 italic mb-8">Focus: Logo Design, Iconography, and Scalable Graphics</p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-bold text-[#ff1493] mb-4">Beginner Level</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2"><span className="text-[#ff1493] mt-0.5">✔</span> The Pen Tool: Mastering paths, anchors, and curves.</li>
                  <li className="flex items-start gap-2"><span className="text-[#ff1493] mt-0.5">✔</span> Working with Shapes, Pathfinder, and Shape Builder.</li>
                  <li className="flex items-start gap-2"><span className="text-[#ff1493] mt-0.5">✔</span> Foundations of Color Theory and Gradients.</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#00ced1] mb-4">Intermediate Level</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2"><span className="text-[#00ced1] mt-0.5">✔</span> Advanced Typography and Custom Lettering.</li>
                  <li className="flex items-start gap-2"><span className="text-[#00ced1] mt-0.5">✔</span> Creating Isometric Illustrations (Perfect for technical diagrams).</li>
                  <li className="flex items-start gap-2"><span className="text-[#00ced1] mt-0.5">✔</span> Vectorizing hand-drawn sketches and images (Image Trace).</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-yellow-500 mb-4">Advanced Level</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✔</span> Brand Identity Design: Creating Style Guides and Brand Books.</li>
                  <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✔</span> Complex Infographic Design for Technical Data.</li>
                  <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✔</span> Preparing files for Large Format Printing and Plotting.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tool 3 */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-2">3. Corel Draw: The Precision Vector Tool</h3>
            <p className="text-gray-400 italic mb-8">Focus: Print Media, Signage, and Industrial Layouts</p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-bold text-[#ff1493] mb-4">Beginner Level</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2"><span className="text-[#ff1493] mt-0.5">✔</span> Navigating the Corel Workspace vs. Adobe environments.</li>
                  <li className="flex items-start gap-2"><span className="text-[#ff1493] mt-0.5">✔</span> Node Editing and Object Management.</li>
                  <li className="flex items-start gap-2"><span className="text-[#ff1493] mt-0.5">✔</span> Layout basics for flyers and business cards.</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#00ced1] mb-4">Intermediate Level</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2"><span className="text-[#00ced1] mt-0.5">✔</span> Interactive Fill and Mesh Fill tools for realistic coloring.</li>
                  <li className="flex items-start gap-2"><span className="text-[#00ced1] mt-0.5">✔</span> Working with Tables and Multi-page layouts.</li>
                  <li className="flex items-start gap-2"><span className="text-[#00ced1] mt-0.5">✔</span> Special Effects: Drop Shadows, Contours, and Extrudes.</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-yellow-500 mb-4">Advanced Level</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✔</span> Variable Data Printing (VDP).</li>
                  <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✔</span> Preparing files for Laser Cutting and CNC engraving (Technical Design).</li>
                  <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✔</span> Advanced Print Pre-press and Color Separation (CMYK vs. Pantone).</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tool 4 */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-2">4. Adobe InDesign: Publication & Layout Design</h3>
            <p className="text-gray-400 italic mb-8">Focus: Multi-page Documents, E-books, and Portfolio Layouts</p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-bold text-[#ff1493] mb-4">Beginner Level</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2"><span className="text-[#ff1493] mt-0.5">✔</span> Master Pages and Document Setup.</li>
                  <li className="flex items-start gap-2"><span className="text-[#ff1493] mt-0.5">✔</span> Character and Paragraph Styles for consistent formatting.</li>
                  <li className="flex items-start gap-2"><span className="text-[#ff1493] mt-0.5">✔</span> Working with Frames (Image vs. Text).</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#00ced1] mb-4">Intermediate Level</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2"><span className="text-[#00ced1] mt-0.5">✔</span> Interactive PDF creation (Hyperlinks, Buttons).</li>
                  <li className="flex items-start gap-2"><span className="text-[#00ced1] mt-0.5">✔</span> Grid Systems and Advanced Page Layouts.</li>
                  <li className="flex items-start gap-2"><span className="text-[#00ced1] mt-0.5">✔</span> Data Merge: Automating catalogs and certificates.</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-yellow-500 mb-4">Advanced Level</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✔</span> Digital Publishing (EPUB) and Interactive Magazines.</li>
                  <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✔</span> Creating high-end Engineering Project Reports and Technical Manuals.</li>
                  <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✔</span> Portfolio Design: Showcasing your CAD/CAE and Design work professionally.</li>
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

export default GraphicDesign;
