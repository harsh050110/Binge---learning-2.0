import Hero from "../../components/home/Hero";
import WhyBinge from "../../components/home/WhyBinge";
import CourseTracks from "../../components/home/CourseTracks";
import StudentWork from "../../components/home/StudentWork";
import Testimonials from "../../components/home/Testimonials";
import FAQ from "../../components/home/FAQ";

const Home = () => {
  return (
    <main className="bg-[#1a0b2e] text-white">
      {/* Background Orbs and Globs for entire page feeling */}
      <div className="relative overflow-hidden">
        <Hero />
        <WhyBinge />
        <CourseTracks />
        <StudentWork />
        <Testimonials />
        <FAQ />
      </div>
    </main>
  );
};

export default Home;
