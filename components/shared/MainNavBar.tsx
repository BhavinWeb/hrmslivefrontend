"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { LoginOut } from "@/app/action/login";
import { Button } from "../ui/button";
import { useSidebarModal } from "@/hooks/sidebar";
import { GrFormClose } from "react-icons/gr";
import { BsList } from "react-icons/bs";
import Image from "next/image";
import SearchBox from "./SearchBox";
import { useTheme } from "next-themes";
import { ModeToggle } from "../ui/theme";
import { Icons } from "../icon";

const MainNavBar = ({ cookies, role }: { cookies: string; role: string }) => {
  const sidebar = useSidebarModal();
  const { theme, setTheme } = useTheme();
  const ClickHandler = () => {
    if (sidebar.isOpen) {
      sidebar.onClose();
    } else {
      sidebar.onOpen();
    }
  };
  return (
    <nav className="flex justify-between w-full items-center space-x-4 lg:space-x-5">
      <div className="flex gap-3 justify-center items-center">
        <Image
          src={"/companylogo/freshcodes.svg"}
          alt="CompanyLogo"
          width={118}
          height={14}
          className=" hidden lg:block lg:h-[10px] xl:h-[12px]  w-[118px] 2xl:h-[14px]"
        />
        <p className="hidden lg:block font-[400] text-[14px] lg:text-[14px] xl:text-[20px] 2xl:text-[22px] leading-[26.4px]">
          Freshcodes Technology
        </p>
      </div>
      <div>
        {sidebar.isOpen ? (
          <GrFormClose
            size={20}
            className="hidden max-md:block"
            onClick={ClickHandler}
          />
        ) : (
          <BsList
            size={20}
            className="hidden max-md:block"
            onClick={ClickHandler}
          />
        )}
      </div>
      <div className="flex gap-3">
        <div>
          <SearchBox />
        </div>
        <div>
          <Button className="h-full font-[600] text-[11px] xl:text-[14px] 2xl:text-[16px] leading-[19.2px] gap-2 text-white bg-[#4F5FF6] hover:bg-primary-600">
            Add Employee{" "}
            <Image src={"/svg/add.svg"} alt="add" width={14} height={14} />
          </Button>
        </div>
        <div className="w-[44px] h-[44px] rounded-full border border-[#939393] justify-center items-center flex cursor-pointer">
          
            {/* <Image
              onClick={() => setTheme('light')}
              src={"/theme/brightness.svg"}
              alt="moon"
              width={20.97}
              height={22.01}
              className="hidden dark:block"
            /> */}
            <Image
            // onClick={() => setTheme('dark')}
              src={"/theme/moon.svg"}
              alt="moon"
              width={20.97}
              height={22.01}
              className="dark:hidden"
            />
        </div>
        <div className="w-[44px] h-[44px] rounded-full border border-[#939393] justify-center items-center flex">
          <div className="absolute w-[11px] h-[11px] bg-[#FF4423] rounded-full top-4 right-[4.4rem]" />
          {/* <Image
            src={"/sidebar/bell.svg"}
            alt="bell"
            width={20.97}
            height={22.01}
          /> */}
          <Icons.bell fill="#A3A3A3" />
        </div>
        <div
          className="w-[44px] h-[44px] rounded-full bg-black dark:bg-white"
          onClick={() => LoginOut()}
        />
      </div>
      {/* {cookies.length > 0 && (
        <div>
          <Button size="sm" variant="ghost" onClick={() => LoginOut()}>
            Log Out
          </Button>
        </div>
      )} */}
    </nav>
  );
};

export default MainNavBar;
