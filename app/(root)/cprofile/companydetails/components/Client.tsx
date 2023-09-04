"use client";

import { CardComponent } from "@/components/shared/Card/CardComponent";
import CardHeading from "@/components/shared/Card/CardHeading";
import ProfileCard from "@/components/shared/Card/ProfileCard";
import { LoginHistory } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export const SOCIALMEDIA = [
  {
    icon: "/svg/globe.svg",
    bgColor: "bg-rose-500",
    href: "/cprofile/companydetails",
  },
  {
    icon: "/svg/linkedin.svg",
    bgColor: "bg-sky-600",
    href: "/cprofile/companydetails",
  },
  {
    icon: "/svg/instagram.svg",
    bgColor: "bg-gradient-to-br from-purple-600 via-rose-600 to-amber-500",
    href: "/cprofile/companydetails",
  },
  {
    icon: "/svg/facebook.svg",
    bgColor: "bg-[#4867AA]",
    href: "/cprofile/companydetails",
  },
  {
    icon: "/svg/behance.svg",
    bgColor: "bg-blue-600",
    href: "/cprofile/companydetails",
  },
  {
    icon: "/svg/dribbble.svg",
    bgColor: "bg-pink-500",
    href: "/cprofile/companydetails",
  },
];

const ClientComponents = () => {
  const router = useRouter();

  const onEditClickHandler = () => {
    router.push("/cprofile/companydetails/edit");
  };

  return (
    <>
      <ProfileCard
        backgroundImage="/image/cover.png"
        address="312, Western Arena, California - 358412"
        onEditClick={onEditClickHandler}
        description="CEO"
        name="Freshcodes Technology"
        profileImage="/svg/freshcodes.svg"
        social_media={SOCIALMEDIA}
      />
      <div className="flex flex-wrap">
        <CardComponent className="w-[500px]">
          <CardHeading title="Profile Information" />
          <div className="flex flex-col p-5 gap-5">
            <div className="flex justify-between">
              <div className="w-[50%] text-gray-500 text-base font-normal">
                <h1>Profile Name</h1>
              </div>
              <div className="w-[50%]">
                <h1>Freshcodes Technology</h1>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="w-[50%] text-gray-500 text-base font-normal">
                <h1>Designation</h1>
              </div>
              <div className="w-[50%]">
                <h1>CEO</h1>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="w-[50%] text-gray-500 text-base font-normal">
                <h1>Email Address</h1>
              </div>
              <div className="w-[50%]">
                <h1>info@freshcodes.net</h1>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="w-[50%] text-gray-500 text-base font-normal">
                <h1>Contact Number</h1>
              </div>
              <div className="w-[50%]">
                <h1>(+91) 85412 24124</h1>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="w-[50%] text-gray-500 text-base font-normal">
                <h1>Country</h1>
              </div>
              <div className="w-[50%]">
                <h1>India</h1>
              </div>
            </div>
          </div>
        </CardComponent>
        <CardComponent className="w-[62%]">
          <CardHeading title="Experience" />
          <div className="flex flex-col">
            <div className="flex">
              <div className="flex gap-3 font-[400] text-start items-center my-4 mx-4">
                <div className="rounded-full bg-[#EBEFF1] w-[41px] h-[41px] flex justify-center items-center">
                  <Image
                    alt="bell"
                    src={"/sidebar/bell.svg"}
                    width={16.2}
                    height={17.01}
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-slate-500 text-sm font-medium">
                    Designation
                  </p>
                  <p className="text-neutral-800 text-base font-medium">CEO</p>
                </div>
              </div>
              <div className="flex gap-3 font-[400] text-start items-center my-4 mx-4">
                <div className="rounded-full bg-[#EBEFF1] w-[41px] h-[41px] flex justify-center items-center">
                  <Image
                    alt="bell"
                    src={"/sidebar/bell.svg"}
                    width={16.2}
                    height={17.01}
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-slate-500 text-sm font-medium">Website</p>
                  <Link
                    href={"https://www.freshcodes.net"}
                    target="_blank"
                    className="text-indigo-500 text-base font-medium"
                  >
                    www.freshcodes.net
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-4">
              <p className="text-slate-500 text-base font-normal leading-7">
                You always want to make sure that your fonts work well together
                and try to limit the number of fonts you use to three or less.
                Experiment and play around with the fonts that you already have
                in the software you’re working with reputable font websites.
                This may be the most commonly encountered tip I received from
                the designers I spoke with. They highly encourage that you use
                different fonts in one design, but do not over-exaggerate and go
                overboard.
              </p>
            </div>
          </div>
        </CardComponent>
        <CardComponent className="w-[98%] mt-3">
          <CardHeading title="Login History" />
          <div className="flex flex-col">
            {LoginHistory.map((item) => (
              <>
                <div
                  key={item.title}
                  className="flex gap-3 font-[400] text-start items-center my-2 mx-4"
                >
                  <div className="rounded-full bg-[#EBEFF1] w-[41px] h-[41px] flex justify-center items-center">
                    <Image
                      alt="bell"
                      src={item.image}
                      width={16.2}
                      height={17.01}
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-neutral-800 font-medium">{item.title}</p>
                    <p className="text-neutral-400 text-sm font-medium">
                      {item.description}
                    </p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </CardComponent>
      </div>
    </>
  );
};

export default ClientComponents;
