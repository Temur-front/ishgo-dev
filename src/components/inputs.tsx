import { Input } from "./ui/input";
import search from "@/public/icons/search.png";
import Image from "next/image";
import React from "react";

const SearchInput = () => {
  return (
    <div className="relative flex-grow">
      <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
        <Image src={search} alt="" />
      </div>
      <Input
        id="search"
        placeholder="Search..."
        className="pl-9 h-11 focus-visible:outline-none placeholder:text-gray-200 shadow-main" // Adds padding to prevent text overlap with the icon
      />
    </div>
  );
};

export default SearchInput;
