const Hero = () => {
  return (
    <section
      className="relative min-h-[50vh] flex flex-col items-center justify-center text-center px-6 py-24 md:py-32"
      style={{ background: "var(--hero-gradient)" }}
    >
      <h1 className="text-4xl md:text-6xl font-normal text-primary-foreground mb-6">
        dotEnvironment
      </h1>
      <p className="max-w-2xl text-primary-foreground/90 text-base md:text-lg leading-relaxed">
        Science-based sustainability consultancy. We offer life cycle assessment (LCA) studies
        with focus on hotspot analysis, environmental product declarations (EPDs), third-party
        reviews, and GHG protocol calculations.
      </p>
    </section>
  );
};

export default Hero;
