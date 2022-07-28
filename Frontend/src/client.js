import SanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";
export const client = SanityClient({
  projectId: "pytahjng",
  dataset: "production",
  apiVersion: "2022-07-12",
  useCdn: true,
  token:
    "skmBNMOQyNneiKkPKWXRhgaHvltzN9D9tOAcEPmZTJe4ZChN9Drq8eg8FBkCIHwv9fRfthYxLAlWStaCsmA2zwkzXLqJXEFedqgPPtmqeKuxyXrEeJXl8tRPRlkqWKviXNtq8R3eXr0W0mAQCOILur9DbaPIsGgw05baDaNDbGB7q0ciJp3n",
});
const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
