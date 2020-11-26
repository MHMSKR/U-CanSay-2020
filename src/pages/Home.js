import React from "react";
import HeroSections from "../component/HeroSection/HeroSections";
import TrendPost from "../component/TrendPost/TrendPost";
import firebase from "firebase";
import LastPost from '../component/LastPost/LastPost'
import '@firebase/firestore';

function Home() {
  

  return (
    <div>
      <HeroSections />
      <LastPost />
    </div>
  );
}

export default Home;
