import { ICard } from "@/types/types";
import carImage from "@/assets/images/carshowcase-image.png";
import quizImage from "@/assets/images/quiz-image.png";
import penaverseImage from "@/assets/images/penaverse-image.png";
export const cardData: ICard[] = [
  {
    title: "Dynamic Quiz App",
    snug: "A quiz application built with Next.js, TypeScript, and Tailwind CSS. Features include customizable question sets, timers, score tracking, and user-friendly notifications.",
    image: quizImage,
    url: "https://nadeem-quiz-app.vercel.app/",
  },
  {
    title: "Car Showcase Site",
    snug: "A feature-rich car showcase site using Next.js, Redux, and SASS. Includes dynamic routes, advanced filtering, and responsive design.",
    image: carImage,
    url: "https://car-showcase-app-lac.vercel.app/",
  },
  {
    title: "Penaverse DAO Clone",
    snug: "A decentralized autonomous organization (DAO) platform built with Next.js and other modern technologies. Features include voting, governance, and community engagement.",
    image: penaverseImage,
    url: "https://penaverse-dao-clone.vercel.app/",
  },
];
