import { StaticImageData } from "next/image";

export interface ICard {
  title: string;
  snug: string;
  image: StaticImageData;
  url: string;
}
