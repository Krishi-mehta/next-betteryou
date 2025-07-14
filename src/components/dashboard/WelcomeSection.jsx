"use client"

import React from "react";
import { useRouter } from "next/navigation";

import ".//styles/welcomeSection.css";

const WelcomeSection = () => {
  const router = useRouter();
  return (
    <div className="welcome-section-container">
      <section className="welcome-section">
        <div className="main-content">
          <h2 className="welcome_section_h2">
            Welcome to BetterYou
          </h2>
          <h1 className="welcome_section_h1">
            Be <span className="Bold-span">Kind</span> <br />{" "}
            <span className="span-2">
              To Your <span className="Bold-span">Mind</span>
            </span>
          </h1>
          {/* <div className="btn-one">
            <button className="button1" onClick={() => router.push("/main")}>START NOW</button>
          </div> */}
        </div>
        <div className="main-img">
          <img src="/images/welcome-section.jpg" alt="picture" />
        </div>
      </section>
    </div>
  );
};

export default WelcomeSection;
