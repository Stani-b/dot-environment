import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectBreakdown from "@/components/ProjectBreakdown";
import Publications from "@/components/Publications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ProjectBreakdown />
      <Publications />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
