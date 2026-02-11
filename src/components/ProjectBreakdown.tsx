import { Check } from "lucide-react";
import LCA_image from "@/assets/LCA_image.png";
import Use_image from "@/assets/use.png";

const lca_texts = [
  "ISO standardized method to evaluate impact that a product or service has on the environment",
  "A wide range of impact categories examined, e.g. climate change, water use, resource use of metals and minerals, use of fossil resources, ozone layer depletion, effects on human health, etc.",
  "Allows for pinpointing the major sources of impact, be it specific material or process",
  "Allows for comparing two products, or alternatives of the same product under development to see which performs better",
  "Used in product development, strategic plans, communications, marketing, public policy making",
];


const epd_texts = [
  "LCAs built on rules for a specific group of products to enable their comparison",
  "Third-party verified",
  "Published at an independent programme operator",
  "Increase customer demand, in some cases required by law, needed in public procurement",
];


const ghg_prot_texts = [
  "A method to calculate GHG emissions of a company per year",
  "Classified into three scopes, based on where in the supply chain the emissions take place",
  "Allows for setting company-wide climate targets",
  "Can be combined with Science-based targets initiative (SBTi) to publicly commit to a climate impact reduction",
];


const thrd_party_texts = [
  "Essential step to ensure credibility of your sustainability reporting",
  "Applicable to LCA - e.g. when comparing two competing products publicly, so-called 'comparative assertion' standardized in ISO 14071",
  "Applicable to EPDs - given that all EPDs by definition are third-party verified, an independent review is a requirement for their publication. The verification process consists of checking that all product category rules (PCRs) have been followed and all requirements (set also in ISO 14000 series and programme operator's general programme instructions) are met",
  "Applicable to GHG protocol - for internal purposes to avoid mistakes and for external purposes, e.g. in combination with SBTi",
];


const LifeCycleAssessment = () => {
  return (
    <section className="place-items-center">
      <div className="grid-cols-3 gap-4 justify-center m-20">
        <div className="bg-background ">
          <div className=" mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl mb-8 text-foreground">
                Life Cycle Assessment
              </h2>
              <ul className="space-y-4">
                {lca_texts.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground leading-relaxed">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="justify-center">
          <img
            src={LCA_image}
            alt="Image showing LCA cycle."
            className="max-w-md"
          />
        </div>

        <div className="bg-background">
          <div className=" mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">

            <div>
              <h2 className="text-3xl md:text-4xl mb-8 text-foreground">
                Environmental Product Declarations
              </h2>
              <ul className="space-y-4">
                {epd_texts.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground leading-relaxed">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
      <div className="grid-cols-3 gap-4 justify-center">

        <div className="py-20 md:py-28 px-6 md:px-12 bg-background items-end">
          <div className=" mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl mb-8 text-foreground">
                Greenhouse gas protocol
              </h2>
              <ul className="space-y-4">
                {ghg_prot_texts.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground leading-relaxed">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="justify-center">
          <img
            src={Use_image}
            alt="Image of finger clicking."
            className="max-w-md"
          />
        </div>

        <div className="py-20 md:py-28 px-6 md:px-12 bg-background items-start">
          <div className=" mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">

            <div>
              <h2 className="text-3xl md:text-4xl mb-8 text-foreground">
                Third-party reviews
              </h2>
              <ul className="space-y-4">
                {thrd_party_texts.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground leading-relaxed">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifeCycleAssessment;