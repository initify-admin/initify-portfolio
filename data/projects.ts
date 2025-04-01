import UiAstraImage from "@/public/images/ui-astra.webp";
import NeurouteAiImage from "@/public/images/neuroute-ai.webp";
import IntrepidAiImage from "@/public/images/intrepid-ai.webp";
import DobbyAds from "@/public/images/dobby-ads.webp";
import AwesomeSuit from "@/public/images/awesome-suit.webp";
import SonySauto from "@/public/images/sony-sauto.webp";
import Galadriel from "@/public/images/galadriel.webp";
import { ProjectItem } from "@/types/projects";

export const ourProjects: ProjectItem[] = [
  {
    name: "Intrepid AI",
    liveLink: "https://www.intrepid.ai",
    image: IntrepidAiImage,
    works: ["Development"],
  },
  {
    name: "Neuroute AI",
    liveLink: "https://www.neuroute.ai",
    image: NeurouteAiImage,
    works: ["Development", "Motion Graphics"],
  },
  {
    name: "Dobby Ads",
    liveLink: "https://www.dobbyads.com",
    image: DobbyAds,
    works: ["Branding", "Development"],
  },
  {
    name: "Sony Sauto",
    liveLink: "https://www.sonysauto.com",
    image: SonySauto,
    works: ["Product Design", "Development", "Development"],
  },
  {
    name: "UI Astra",
    liveLink: "https://www.uiastra.com",
    image: UiAstraImage,
    works: ["Branding", "Development", "Website Design"],
  },
  {
    name: "Awesome Suit",
    liveLink: "https://www.awesomesuite.com/",
    image: AwesomeSuit,
    works: ["Motion Graphics", "Product Design", "Development"],
  },
  {
    name: "Galadriel",
    liveLink: "https://galadriel.com/",
    image: Galadriel,
    works: ["Development"],
  },
];
