import React from "react";
import { Input } from "../ui/input";
import Image from "next/image";

const SearchBox = () => {
  return (
    <div className="w-[200px] xl:w-[300px] 2xl:w-[409px] h-[43px] rounded-[8px]">
      <Input
        placeholder="Search Anything"
        className="rounded-[8px] border-[#DDDDDD] h-full"
      />
      <Image
        src={"/svg/search.svg"}
        alt="search"
        width={14.03}
        height={14.03}
        className="absolute top-[1.4rem] right-[21rem] xl:right-[22.4rem] 2xl:right-[23.5rem]"
      />
    </div>
  );
};

export default SearchBox;
