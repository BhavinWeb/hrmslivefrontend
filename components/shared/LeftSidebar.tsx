"use client";

import { usePathname, useRouter } from "next/navigation";
import { RouterLink } from "@/constants/index";
import Link from "next/link";
import { useSidebarModal } from "@/hooks/sidebar";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { cn } from "@/lib/utils";

const LeftSidebar = ({ cookies, role }: { cookies: string; role: string }) => {
  const router = useRouter();
  const sidebar = useSidebarModal();
  const pathname = usePathname();

  return (
    <div
      onBlur={() => {
        sidebar.onClose();
      }}
      className={`custom-scrollbar sticky left-0 top-0 z-20 flex h-screen text-[#6A7279] pt-[1rem] flex-col justify-between overflow-auto pb-5 w-[130%] max-md:w-[134%] ${
        sidebar.isOpen ? "max-md:block" : "max-md:hidden"
      }`}
    >
      <div className="flex w-full flex-1 flex-col gap-[9px]">
        <Accordion
          type="single"
          collapsible
          defaultValue={`/${pathname.split("/")[1]}`}
        >
          {RouterLink.map((item) => {
            const isActive =
              (pathname.includes(item.href) && item.href.length > 1) ||
              pathname === item.href;

            // if(role == '1' && item.href === '/dashboard')

            return (
              <>
                {!item.child ? (
                  <Link
                    className={`leftsidebar_link h-12 ${
                      isActive
                        ? "text-[#212121] font-[600] ml-[0px]"
                        : "ml-[17px]"
                    } hover:text-black text-base`}
                    key={item.label}
                    href={item.href}
                  >
                    {isActive && (
                      <div
                        className={`${
                          isActive ? "bg-[#4F5CF6]" : "bg-white"
                        } h-7 w-[10px] -ml-[9px] rounded-sm`}
                      ></div>
                    )}
                    <div className="flex gap-[0.5rem] justify-center">
                      <Image
                        src={item.icon}
                        alt={item.label}
                        width={24}
                        height={24}
                      />
                      <p
                        className={`text-light-1 ${
                          sidebar.isOpen ? "max-lg:block" : "max-lg:hidden"
                        } `}
                      >
                        {item.label}
                      </p>
                    </div>
                  </Link>
                ) : (
                  <>
                    <AccordionItem value={item.href} className="border-none">
                      <AccordionTrigger className="h-12">
                        <div
                          className={`leftsidebar_link ${
                            isActive
                              ? "text-[#212121] font-[600] ml-[0px]"
                              : "ml-[17px]"
                          } hover:text-black text-base`}
                        >
                          {isActive && (
                            <div
                              className={`${
                                isActive ? "bg-[#4F5CF6]" : "bg-white"
                              } h-7 w-[10px] -ml-[9px] rounded-sm`}
                            ></div>
                          )}
                          <div className="flex gap-[0.5rem] justify-center items-center">
                            <Image
                              src={item.icon}
                              alt={item.label}
                              width={24}
                              height={24}
                            />

                            {item.label}
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pl-[3.4rem] gap-2">
                        {item.child.map((items) => (
                          <>
                            <Link
                              href={`${item.href}${items.href}`}
                              className={cn(
                                `py-1 text-base font-medium`,
                                pathname.includes(items.href) &&
                                  "text-indigo-500"
                              )}
                            >
                              {items.title}
                            </Link>
                          </>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </>
                )}
              </>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
};

export default LeftSidebar;
