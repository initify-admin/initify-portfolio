import { StaticImageData } from "next/image";
import { OurUse } from "./uses";

export interface ProjectItem {
  name: string;
  liveLink: string;
  image: StaticImageData;
  works: OurUse[];
}
