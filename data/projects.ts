import UiAstraImage from "@/public/images/ui-astra.webp";
import NeurouteAiImage from "@/public/images/neuroute-ai.webp";
import IntrepidAiImage from "@/public/images/intrepid-ai.webp";
import { ProjectItem } from "@/types/projects";

export const ourPorjects: ProjectItem[] = [
  {
    name: "Intrepid AI",
    liveLink: "https://intrepid.ai",
    image: IntrepidAiImage,
    works: ["Development"],
  },
  {
    name: "Neuroute AI",
    liveLink: "https://neuroute.ai",
    image: NeurouteAiImage,
    works: ["Branding", "Development"],
  },
  {
    name: "UI Astra",
    liveLink: "https://uiastra.com",
    image: UiAstraImage,
    works: ["Branding", "Development"],
  },
];
