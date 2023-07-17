import React, { useState, useEffect, useContext } from "react";
import { HouseContext } from "~/components/HouseContextProvider";
import { Menu } from "@headlessui/react";
import {
  RiArrowDownSLine,
  RiArrowUpSLine,
  RiHome5Line,
  RiMapPinLine,
} from "react-icons/ri";

const PropertyDropdown = () => {
  const { property, setProperty, properties } = useContext(HouseContext);
  console.log(properties);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu className="dropdown relative" as="div">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <RiHome5Line className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">
            {property}
          </div>
          <div className="text-[13px]">Select your place</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>
      <Menu.Items className="dropdown-menu">
        {properties.map((propertyItem, propertyIndex) => {
          return (
            <Menu.Item
              onClick={() => setProperty(propertyItem)}
              className="cursor-pointer transition hover:text-violet-700"
              as="li"
              key={propertyIndex}
            >
              {propertyItem}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PropertyDropdown;
