import React from "react";
import {
  Hero,
  NewCollections,
  NewsLetter,
  Offer,
  Popular,
} from "../../components";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offer />
      <NewCollections />
      <NewsLetter />
    </div>
  );
};

export default Shop;
