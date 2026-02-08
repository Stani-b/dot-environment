import footerWave from "@/assets/footer-wave.png";

const Footer = () => {
  return (
    <footer className="relative">
      <img
        src={footerWave}
        alt=""
        className="w-full object-cover"
      />

      <div className="absolute inset-0 flex items-start justify-center">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl text-foreground mb-4">
            Ready to discuss your next project?
          </h2>
          <p className="text-muted-foreground text-lg">
            Send us an email to{" "}
            <a className="text-primary hover:underline font-medium">
              hello[at]dotenvironment.se
            </a>
            . Looking forward to hearing from you!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
