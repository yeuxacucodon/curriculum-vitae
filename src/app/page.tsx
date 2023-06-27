import React from "react";
import { Education, Projects, ProfileContent, Socials, Skills } from "@/content";
import { Footer, BackToTop, Interests, Home, Languages, Nav } from "@/components";

const Page: React.FC = () => {
  return (
    <>
      <main className="l-main bd-container">
        <div className="resume">
          <div className="resume__left">
            <Home />
            <Socials />
            <ProfileContent />
            <Education />
            <Languages />
          </div>

          <div className="resume__right">
            <Projects />
            <Skills />
            <Interests />
          </div>
        </div>
      </main>
      <BackToTop />
      <Nav />
      <Footer />
    </>
  );
};

export default Page;
