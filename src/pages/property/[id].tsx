import React from "react";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import { housesData } from "~/assets/data";
import Header from "~/components/Header";
import Image from "next/image";
import { BiArea, BiBath, BiBed } from "react-icons/bi";

const PropertyDetails = () => {
  // get the House id
  const { query } = useRouter();
  const { id } = query;
  // get the House based on id
  const house = housesData.find((house) => {
    return house.id === parseInt(id);
  });
  if (house) console.log(house);
  return (
    <>
      <Header />
      <section>
        <div className="container mx-auto mb-14 min-h-[800px]">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-semibold">{house.name}</h2>
              <h3 className="mb-4 text-lg">{house.address}</h3>
            </div>
            <div className="mb-4 flex gap-x-2 text-sm lg:mb-0 ">
              <div className="rounded-full bg-green-500 px-3 text-white">
                {house.type}
              </div>
              <div className="rounded-full bg-violet-500 px-3 text-white">
                {house.country}
              </div>
            </div>
            <div className="text-3xl font-semibold text-violet-600">
              $ {house.price}
            </div>
          </div>
          <div className="flex flex-col items-start gap-8 lg:flex-row">
            <div className="max-w-[768px]">
              <div className="mb-8">
                <Image src={house.imageLg} alt="" />
              </div>
              <div className="flex gap-x-6">
                <div>
                  <BiBed className="text-2xl" />
                  <div>{house.bedrooms}</div>
                </div>
                <div>
                  <BiBath className="text-2xl" />
                  <div>{house.bathrooms}</div>
                </div>
                <div>
                  <BiArea className="text-2xl" />
                  <div>{house}</div>
                </div>
              </div>
              <div>{house.description}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PropertyDetails;
