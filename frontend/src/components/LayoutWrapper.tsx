import type React from "react";

const LayoutWrapper = ({
  section1,
  section2,
}: {
  section1: React.ReactNode;
  section2: React.ReactNode;
}) => {
  return (
    <main className="flex flex-row">
      <section className="flex-2 hidden md:block bg-gradient-to-tl h-screen bg-i">{section1}</section>
      <section className="flex-1 bg-[#021e29] h-screen bg-gradient-to-bl">{section2}</section>
    </main>
  );
};

export default LayoutWrapper;
