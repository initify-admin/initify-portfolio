import UiAstraImage from "@/public/images/ui-astra.webp";
import NeurouteAiImage from "@/public/images/neuroute-ai.webp";
import { ProjectItem } from "@/types/projects";

export const ourPorjects: ProjectItem[] = [
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
