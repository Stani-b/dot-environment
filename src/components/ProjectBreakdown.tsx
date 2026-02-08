import { Check } from "lucide-react";
import serviceIllustration from "@/assets/service-illustration.png";

const steps = [
  "Guide through data collection process",
  "System modelling",
  "Assessment of relevant environmental aspects",
  "Results interpretation",
  "Final report",
  "Final presentation including tips on how to use the findings in practice",
];

const ProjectBreakdown = () => {
  return (
    <section className="py-20 md:py-28 px-6 md:px-12 bg-background">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="flex justify-center">
          <img
            src={serviceIllustration}
            alt="Service illustration showing data analysis charts and graphs"
            className="w-full max-w-md"
          />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl mb-8 text-foreground">
            Project Breakdown
          </h2>
          <ul className="space-y-4">
            {steps.map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground leading-relaxed">{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectBreakdown;
