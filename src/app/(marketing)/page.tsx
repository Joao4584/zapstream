import { client } from "@/sanity/lib/client";
import imageUrlBuilder from '@sanity/image-url';
import HeroSection from "./components/Hero";
import React from "react";
import CategoryHability from "./components/CategoryHability";

const builder = imageUrlBuilder(client);

export default async function Home() {
  const headers = await client.fetch(`*[_type == "header"]`);
  const header = headers[0];

  const hero = await client.fetch(`*[_type == "hero"]`);
  const heroMain = hero[0];

  // const imageId = logo.asset._ref;

  // // Use o construtor de URLs de imagem para gerar o URL da imagem
  // const logoUrl = builder.image(imageId).url();

  return (
    <React.Fragment>
      <HeroSection hero={heroMain} header={header} />
      <CategoryHability />
    </React.Fragment>
  );
}
