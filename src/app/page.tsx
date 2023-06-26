import Nav from "@/components/Nav"; // Only show on mobile and tablet
import Footer from "@/components/Footer";
import Body from "@/components/Body";
import React from "react";

const Page: React.FC = () => {
  return (
    <>
      <Body />
      <Footer />
      <Nav />
    </>
  );
};

export default Page;
