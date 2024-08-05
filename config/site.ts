import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "PlatformAI",
  description: "An Platform for Crafting Chatbots with OpenAI's Assistant.",
  url: process.env.APP_URL as string,
  ogImage: "",
  links: {
    twitter: "https://twitter.com/darshanshub",
    github: "",
    productHunt: "",
  },
};
