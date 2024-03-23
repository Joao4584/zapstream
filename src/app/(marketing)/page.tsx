// * Modules * //
import React from "react";
import NodeCache from 'node-cache';

// * Exports * //
import HeroSection from "./components/Hero";
import CategoryHability from "./components/CategoryHability";
import CardsHability from "./components/CardsHability";
import { FooterBar } from "./components/ui/footer";
import ShowRecommends from "./components/showRecommends";
import { SolutionsExplore } from "./components/SolutionsExplore";



// * Components * //
export interface GetSchemaStrapi {
  defaultUrl: string,
  data: {
    id: number,
    attributes: {
      titulo_principal: string,
      sub_titulo: string,
      logo: any,
      banner_principal: any,
    },
  },
}

//const cache = new NodeCache({ stdTTL: 60 });

async function getData(): Promise<null | GetSchemaStrapi> {
  // const cachedData = cache.get('strapiData132');
  // if (cachedData) {
  //   return cachedData as GetSchemaStrapi;
  // }

  if (process.env.STRAPI_CMS_URL) {
    const getResponseSchema = await fetch(process.env.STRAPI_CMS_URL + "/api/pagina-inicial?populate=*")
    const schema = await getResponseSchema.json();

    schema.defaultUrl = process.env.STRAPI_CMS_URL;
    // cache.set('strapiData132', schema);
    return schema;
  }

  return null;
}

export default async function Home() {
  const schema = await getData();

  return (
    <React.Fragment>
      <HeroSection schema={schema} />
      <CardsHability />
      <CategoryHability />
      <SolutionsExplore />
      <ShowRecommends />
      <FooterBar />
    </React.Fragment>
  );
}
