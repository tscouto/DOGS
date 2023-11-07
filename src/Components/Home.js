import React from "react";
import Feed from "./Feed/Feed";
import FeedModal from "./Feed/FeedModal";
import FeedPhotos from "./Feed/FeedPhotos";
const Home = () => {
  return (
    <section className="container mainContainer">
      <Feed />
      <FeedModal/>
      <FeedPhotos/>
    </section>
  );
};

export default Home;
