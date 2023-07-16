import React, { useState, useEffect, useContext } from "react";
import { HouseContext } from "~/components/HouseContextProvider";
import { Menu } from "@headlessui/react";
import { RiArrowDownSLine, RiArrowUpSLine, RiMapPinLine } from "react-icons/ri";

const CountryDropdown = () => {
  const { country, setCountry, countries } = useContext(HouseContext);
  console.log(countries);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu className="dropdown relative" as="div">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <RiMapPinLine className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">{country}</div>
          <div className="text-[13px]">Select your place</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>
      <Menu.Items className="dropdown-menu">
        {countries.map((countryItem, countryIndex) => {
          return (
            <Menu.Item
              onClick={() => setCountry(countryItem)}
              className="cursor-pointer transition hover:text-violet-700"
              as="li"
              key={countryIndex}
            >
              {countryItem}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default CountryDropdown;
