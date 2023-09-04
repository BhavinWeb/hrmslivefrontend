"use client";

import Doughnut from "@/components/chart/Doughnut";
import ProgressBar from "@/components/chart/ProgressBar";
import { CardComponent } from "@/components/shared/Card/CardComponent";
import CardHeading from "@/components/shared/Card/CardHeading";
import HeadingCard from "@/components/shared/Card/HeadingCard";
import { Separator } from "@/components/ui/separator";
import { Announcement, Holidays, Team_Leads } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Tablebody from "./Tablebody";

const Client = () => {
  return (
    <div className="flex flex-col gap-3">
      <HeadingCard title="Welcome Adum Eave">
        <div className="flex items-center justify-center gap-2">
          <div>
            <Image
              src={"/svg/calendar.svg"}
              alt="calendar"
              width={18}
              height={18}
            />
          </div>
          <p className="font-[500] text-[16px] leading-[19.2px] text-[#596780] h-full">
            {" "}
            THU 10, AUG 2023
          </p>
        </div>
      </HeadingCard>
      <div className="flex gap-3 flex-wrap">
        <CardComponent className="text-center relative 2xl:w-[25%]">
          <div className="bg-gradient-to-r from-[#4F5FF6] to-[#4FA6F6] h-[98px]" />
          <div className="bg-black rounded-full w-[90px] h-[90px] flex items-center justify-center border-[5px] border-white absolute top-[3rem] left-[38%]">
            <Image
              src={"/svg/freshcodes.svg"}
              alt="freshcodes"
              width={52}
              height={50}
            />
          </div>
          <div className="mt-[4rem] mx-auto p-3 mb-[0.2rem]">
            <p className="w-full  text-[18px] font-[500]">
              Freshcodes Technology
            </p>
            <p className="text-[12px] font-[400]">
              Lorem ipsum dolor sit amet consectetur. Egestas sed sit id velit.
              Odio quis turpis scelerisque commodo id et.
            </p>
          </div>
          <Separator className="" />
          <div className="mt-[0.5rem]">
            <Link
              href="/dashboard"
              className="text-[#4F5FF6] flex gap-2 justify-center items-center"
            >
              View More{" "}
              <Image src={"/svg/shape.svg"} alt="shape" height={5} width={5} />
            </Link>
          </div>
        </CardComponent>
        <CardComponent className="text-center relative 2xl:w-[26%]">
          <div className="flex flex-col">
            <CardHeading
              link="/dashboard"
              linklable="Manage Team"
              title="Team Leads"
            />
            <Separator className="" />

            {Team_Leads.map((item) => {
              return (
                <div
                  key={item.title}
                  className="flex gap-3 font-[400] my-4 mx-4"
                >
                  <Image
                    alt={item.title}
                    src={item.image}
                    width={28}
                    height={28}
                  />
                  <p className="text-[16px]">{item.title}</p>
                  <p className="text-[14px] text-[#717171]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </CardComponent>
        <CardComponent className="text-center relative 2xl:w-[22%]">
          <div className="flex flex-col">
            <CardHeading
              link="/dashboard"
              linklable="View All"
              title="Announcement"
            />
            <Separator className="" />

            {Announcement.map((item) => {
              return (
                <div
                  key={item.title}
                  className="flex gap-3 font-[400] text-start items-center my-4 mx-4"
                >
                  <div className="rounded-full bg-[#EBEFF1] w-[41px] h-[41px] flex justify-center items-center">
                    <Image
                      alt={item.title}
                      src={item.image}
                      width={16.2}
                      height={17.01}
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[16px]">{item.title}</p>
                    <p className="text-[14px] text-[#717171]">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </CardComponent>
        <CardComponent className="text-center relative 2xl:w-[20%]">
          <div className="flex flex-col">
            <CardHeading
              link="/dashboard"
              linklable="View All"
              title="Upcoming Holidays"
            />
            <Separator className="" />

            {Holidays.map((item) => {
              return (
                <div
                  key={item.title}
                  className="flex gap-3 font-[400] text-start items-center my-4 mx-4"
                >
                  <div className="rounded-full bg-[#EBEFF1] w-[41px] h-[41px] flex justify-center items-center">
                    <Image
                      alt={item.title}
                      src={item.image}
                      width={16.2}
                      height={17.01}
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[16px]">{item.title}</p>
                    <p className="text-[14px] text-[#717171]">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </CardComponent>
        <CardComponent className="text-center relative  h-96">
          <div className="flex flex-col">
            <CardHeading title="Working Format" />
            <Separator className="" />

            <div className="flex flex-col items-center justify-center">
              <div className="p-5">
                <Doughnut />
              </div>
              <div className="flex  w-full justify-between">
                <h1 className="ml-2">
                  {" "}
                  <span className="inline-block w-[14px] h-[14px] rounded-full bg-[#F3735B]"></span>{" "}
                  Remote Employees
                </h1>
                <h1 className="mr-2">
                  <span className="inline-block w-[14px] h-[14px] rounded-full bg-[#0BABE0]"></span>{" "}
                  On Site Employees
                </h1>
              </div>
            </div>
          </div>
        </CardComponent>
        <CardComponent className="text-center relative  h-96">
          <div className="flex flex-col ">
            <CardHeading title="Working Format" />
            <Separator className="" />

            <ProgressBar />
          </div>
        </CardComponent>
        <CardComponent className="text-center relative w-[47%] h-96 border">
          <div className="flex flex-col">
            <CardHeading title="Recruitment Progress" />
            <Separator className="" />
            <Tablebody />
          </div>
        </CardComponent>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <div className="w-[50%]">
            <HeadingCard
              icon="/svg/calendar1.svg"
              title="My Team's Time Off (0)"
              className="text-xl font-normal"
            >
              <div className="flex items-center justify-center gap-2">
                <Link
                  href={"/"}
                  className="text-[#4F5FF6] text-[16px] font-[500] flex gap-2 justify-center items-center"
                >
                  {" "}
                  Team Calendar{" "}
                  <Image
                    src={"/svg/shape.svg"}
                    alt="shape"
                    height={5}
                    width={5}
                  />
                </Link>
              </div>
            </HeadingCard>
          </div>
          <div className="w-[50%]">
            <HeadingCard
              icon="/svg/giftcard1.svg"
              title="Work Anniversary (0)"
              className="text-xl font-normal"
            >
              <div className="flex items-center justify-center gap-2">
                <Link
                  href={"/"}
                  className="text-[#4F5FF6] text-[16px] font-[500] flex gap-2 justify-center items-center"
                >
                  {" "}
                  View More{" "}
                  <Image
                    src={"/svg/shape.svg"}
                    alt="shape"
                    height={5}
                    width={5}
                  />
                </Link>
              </div>
            </HeadingCard>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-[50%]">
            <HeadingCard
              icon="/svg/users-alt1.svg"
              title="New Hires(0)"
              className="text-xl font-normal"
            >
              <div className="flex items-center justify-center gap-2">
                <Link
                  href={"/"}
                  className="text-[#4F5FF6] text-[16px] font-[500] flex gap-2 justify-center items-center"
                >
                  {" "}
                  Add New{" "}
                  <Image
                    src={"/svg/shape.svg"}
                    alt="shape"
                    height={5}
                    width={5}
                  />
                </Link>
              </div>
            </HeadingCard>
          </div>

          <div className="w-[50%]">
            <HeadingCard
              icon="/svg/cakebirthday1.svg"
              title="Birthday Buddies (0)"
              className="text-xl font-normal"
            >
              <div className="flex items-center justify-center gap-2">
                <Link
                  href={"/"}
                  className="text-[#4F5FF6] text-[16px] font-[500] flex gap-2 justify-center items-center"
                >
                  {" "}
                  View More{" "}
                  <Image
                    src={"/svg/shape.svg"}
                    alt="shape"
                    height={5}
                    width={5}
                  />
                </Link>
              </div>
            </HeadingCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
