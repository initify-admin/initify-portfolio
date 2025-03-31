export type Section =
  | "hero"
  | "vision"
  | "uses"
  | "process"
  | "projects"
  | "contact"
  | "trust"
  | "faq"
  | "footer";

export interface NavItem {
  title: string;
  scrollTo: Section;
}
