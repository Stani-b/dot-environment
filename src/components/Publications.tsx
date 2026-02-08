import { ExternalLink, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import pubEnvironmentVariables from "@/assets/pub-environment-variables.jpg";
import pubGreenIo from "@/assets/pub-green-io.jpg";
import pubSdia from "@/assets/pub-sdia.jpg";
import pubCleanerProduction from "@/assets/pub-cleaner-production.jpg";
import pubAppliedEnergy from "@/assets/pub-applied-energy.jpg";

const publications = [
  {
    source: "Environment Variables",
    title: "The Week in Green Software: Data Center LCA with Stani Borisová",
    type: "podcast" as const,
    url: "https://podcasts.castplus.fm/e/lnq0yyj8-the-week-in-green-software-data-center-lca-with-stani-borisova",
    quote: "An eye-opening deep dive into data center LCA, discussing how data centers might be unnecessarily using too much energy to cool themselves down.",
    image: pubEnvironmentVariables,
  },
  {
    source: "Green IO",
    title: "Datacenter Sustainability with Stanislava Borisova and Benoit Petit",
    type: "podcast" as const,
    url: "https://podcasts.castplus.fm/e/1n22511n-episode-16-stanislava-borisova-and-benoit-petit",
    quote: "An episode on how data centers can play a crucial role in building a sustainable digital future.",
    image: pubGreenIo,
  },
  {
    source: "Swedish Data Center Industry Association",
    title: "Data Centers & LCA",
    type: "video" as const,
    url: "https://vimeo.com/676445445",
    quote: "A comprehensive webinar exploring lifecycle assessment methodologies applied to data center infrastructure.",
    image: pubSdia,
  },
  {
    source: "Journal of Cleaner Production",
    title: "Assessing the environmental impact of operating a Swedish data centre in subarctic climate",
    type: "paper" as const,
    url: "https://doi.org/10.1016/j.jclepro.2025.146819",
    quote: "Peer-reviewed research examining the unique environmental considerations of subarctic data center operations.",
    image: pubCleanerProduction,
  },
  {
    source: "Applied Energy",
    title: "Data center excess heat for mealworm farming, an applied analysis for sustainable protein production",
    type: "paper" as const,
    url: "https://doi.org/10.1016/j.apenergy.2023.121990",
    quote: "Innovative research exploring circular economy approaches by repurposing data center waste heat for sustainable food production.",
    image: pubAppliedEnergy,
  },
];

const typeBadge = (type: "podcast" | "video" | "paper") => {
  const labels = { podcast: "Podcast", video: "Video", paper: "Paper" };
  return (
    <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
      {labels[type]}
    </span>
  );
};

const Publications = () => {
  return (
    <section className="py-20 md:py-28 px-6 md:px-12 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-foreground mb-4 text-center">
          Publications and Online Presence
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          To check out our previous work, have a look at the following publications and podcast recordings.
        </p>

        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {publications.map((pub, i) => (
              <CarouselItem key={i} className="pl-4 basis-[85%] md:basis-1/2 lg:basis-1/3">
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col h-full rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <div className="h-44 overflow-hidden">
                    <img
                      src={pub.image}
                      alt={pub.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <Quote className="w-6 h-6 text-primary/30 mb-3 flex-shrink-0" />
                    <p className="text-foreground leading-relaxed mb-4 italic text-sm flex-1">
                      "{pub.quote}"
                    </p>
                    <div>
                      <h3 className="text-foreground font-semibold text-sm leading-snug group-hover:text-primary transition-colors mb-2 line-clamp-2">
                        {pub.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide truncate">
                          {pub.source}
                        </span>
                        {typeBadge(pub.type)}
                      </div>
                    </div>
                  </div>
                  <div className="px-6 pb-4">
                    <span className="inline-flex items-center gap-1 text-xs text-muted-foreground group-hover:text-primary transition-colors">
                      View <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-8">
            <CarouselPrevious className="static translate-y-0 border-border hover:bg-primary hover:text-primary-foreground hover:border-primary" />
            <CarouselNext className="static translate-y-0 border-border hover:bg-primary hover:text-primary-foreground hover:border-primary" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Publications;
