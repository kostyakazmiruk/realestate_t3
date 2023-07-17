import React from "react";
import Link from "next/link";
import Banner from "~/components/Banner";
import HouseList from "~/components/HouseList";

const HomePage = () => {
  return (
    <div className="min-h-[1800px]">
      <Link href="/home">Home</Link>
      <Banner />
      <HouseList />
    </div>
  );
};

export default HomePage;
