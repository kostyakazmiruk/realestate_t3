import React, { useContext } from "react";
import { HouseContext } from "~/components/HouseContextProvider";
import Link from "next/link";
import House from "~/components/House";

const HouseList = () => {
  const { houses, loading } = useContext(HouseContext);
  // console.log("houses", houses);
  return (
    <section className="mb-20">
      <div className="container mx-auto">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-14">
          {houses.map((houseItem, houseIndex) => {
            return (
              <Link key={houseIndex} href={`/property/${houseItem.id}`}>
                <House house={houseItem} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HouseList;
