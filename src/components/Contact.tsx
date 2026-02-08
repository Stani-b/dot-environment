const Contact = () => {
  return (
    <section className="py-20 md:py-28 px-6 md:px-12 bg-background">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl text-foreground mb-4">
          Ready to discuss your next project?
        </h2>
        <p className="text-muted-foreground text-lg">
          Send us an email to{" "}
          <a
            href="mailto:hello@dotenvironment.se"
            className="text-primary hover:underline font-medium"
          >
            hello[at]dotenvironment.se
          </a>
          . Looking forward to hearing from you!
        </p>
      </div>
    </section>
  );
};

export default Contact;
