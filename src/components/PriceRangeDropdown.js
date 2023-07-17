import React, { useState, useEffect, useContext } from "react";
import { HouseContext } from "~/components/HouseContextProvider";
import { Menu } from "@headlessui/react";
import {
  RiArrowDownSLine,
  RiArrowUpSLine,
  RiHome5Line,
  RiMapPinLine,
  RiWallet3Line,
} from "react-icons/ri";

const PriceDropdown = () => {
  const { price, setPrice, properties } = useContext(HouseContext);
  console.log(properties);
  const [isOpen, setIsOpen] = useState(false);

  const prices = [
    { value: "Price range (any)" },
    { value: "100000 - 130000" },
    { value: "130000 - 160000" },
    { value: "190000 - 220000" },
    { value: "10000 - 30000" },
    { value: "30000 - 40000" },
  ];

  return (
    <Menu className="dropdown relative" as="div">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <RiWallet3Line className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">{price}</div>
          <div className="text-[13px]">Choose price range</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>
      <Menu.Items className="dropdown-menu">
        {prices.map((priceItem, priceIndex) => {
          return (
            <Menu.Item
              onClick={() => setPrice(priceItem.value)}
              className="cursor-pointer transition hover:text-violet-700"
              as="li"
              key={priceIndex}
            >
              {priceItem.value}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PriceDropdown;
