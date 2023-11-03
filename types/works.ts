import type { MicroCMSImage, MicroCMSListContent } from "microcms-js-sdk";

export type Works = {
  title: string;
  thumbnail: MicroCMSImage;
  overview: string;
  term: string;
  url: string;
  skill: MicroCMSListContent;
  points: string;
};