"use client";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import WelcomeSection from "@/components/dashboard/WelcomeSection";
import QuickSearch from "@/components/dashboard/QuickSearch";
import MentalHealth from "@/components/dashboard/MentalHealth";
import Steps from "@/components/dashboard/Steps";
import Help from "@/components/dashboard/Help";
import Carts from "@/components/dashboard/Carts";
// import Activities from "@/components/dashboard/Activities";
// import Areaofexpertise from "@/components/dashboard/Areaofexpertise";
// import Stress from "@/components/dashboard/Stress";
// import Depression from "@/components/dashboard/Depression";
// import Learnmore1 from "@/components/dashboard/Learnmore1";
// import Learnmore2 from "@/components/dashboard/Learnmore2";
// import Learnmore3 from "@/components/dashboard/Learnmore3";
// import MoodSwing from "@/components/dashboard/MoodSwing";
// import ScrollToTop from "@/components/dashboard/ScrollToTop";


// import "./dashboard.css";

export default function HomePage() {
  return (
    <>
      <Header />
      <WelcomeSection />
      <QuickSearch />
      <MentalHealth />
      <Steps />
      <Help />
      <Carts />
      <Footer />
      {/* <Activities />
      <Areaofexpertise />
      <Stress />
      <Depression />
      <Learnmore1 />
      <Learnmore2 />
      <Learnmore3 />
      <MoodSwing />
      <ScrollToTop /> */}
      
    </>
  );
}
