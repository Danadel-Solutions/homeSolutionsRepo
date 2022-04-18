import React from "react";

import Banner from "../components/Banner";
import FeaturedCompanies from "../components/FeaturedCompanies";
import FeaturedProjects from "../components/FeaturedProjects";
import LatestListed from "../components/LatestListed";
import FromBlog from "../components/FromBlog";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

const HomeScreen = () => {
  return (
    <div className="home">
      <Helmet>
        <title>HomeSolutions - Home</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Login page" />
      </Helmet>
      <Banner />
      <FeaturedCompanies />
      <FeaturedProjects />
      <LatestListed />
      <FromBlog />
      <Footer />
    </div>
  );
};

export default HomeScreen;
