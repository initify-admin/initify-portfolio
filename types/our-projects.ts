import { StaticImageData } from "next/image";
import { OurUse } from "./our-uses";

export interface ProjectItem {
  name: string;
  liveLink: string;
  image: StaticImageData;
  works: OurUse[];
}
