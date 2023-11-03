import type { MicroCMSImage } from "microcms-js-sdk";

export type Skills = {
  title: string;
  logo: MicroCMSImage;
  overview: string;
  level?: number;
};