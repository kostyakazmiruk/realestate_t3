import React from "react";
import Link from "next/link";
import Banner from "~/components/Banner";

const HomePage = () => {
  return (
    <div className="min-h-[1800px]">
      <Link href="/home">Home</Link>
      <Banner />
    </div>
  );
};

export default HomePage;
