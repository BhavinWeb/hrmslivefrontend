"use client";

import { SOCIALMEDIA } from "@/app/(root)/cprofile/companydetails/components/Client";
import { CardComponent } from "@/components/shared/Card/CardComponent";
import CardHeading from "@/components/shared/Card/CardHeading";
import ProfileCard from "@/components/shared/Card/ProfileCard";
import { ProjectA } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ClientComponents = () => {
  const onEditClickHandler = () => {
    // router.push("/cprofile/companydetails/edit");
  };

  return (
    <>
      <ProfileCard
        backgroundImage="/image/cover.png"
        address="312, Western Arena, California - 358412"
        onEditClick={onEditClickHandler}
        description="WordPress Developer"
        name="Garry Lue"
        profileImage="/image/profile.png"
        social_media={SOCIALMEDIA}
        isProfile
      />
      <div className="flex flex-wrap">
        <CardComponent className="w-[500px]">
          <CardHeading title="Employee Information" />
          <div className="flex flex-col p-5 gap-5">
            <div className="flex justify-between">
              <div className="w-[50%] text-gray-500 text-base font-normal">
                <h1>Employee Name</h1>
              </div>
              <div className="w-[50%]">
                <h1>Garry lue</h1>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="w-[50%] text-gray-500 text-base font-normal">
                <h1>Designation</h1>
              </div>
              <div className="w-[50%]">
                <h1>WordPress Developer</h1>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="w-[50%] text-gray-500 text-base font-normal">
                <h1>Email Address</h1>
              </div>
              <div className="w-[50%]">
                <h1>garry.lue@mail.com</h1>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="w-[50%] text-gray-500 text-base font-normal">
                <h1>Contact Number</h1>
              </div>
              <div className="w-[50%]">
                <h1>+91 82100 24100</h1>
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
                  <p className="text-neutral-800 text-base font-medium">WordPress Developer</p>
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
          <CardHeading title="Assigned Projects" />
          <div className="flex flex-col">
            {ProjectA.map((item) => (
              <>
                <div
                  key={item.title}
                  className="flex gap-3 font-[400] text-start items-center my-2 mx-4 justify-between"
                >
                    <div className="flex gap-3">
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
                  <div className={cn("flex justify-center items-center bg-opacity-20 rounded-2xl w-24 py-1",item.status === 'Completed' && 'bg-green-600', item.status === 'Cancelled' && 'bg-red-500', item.status === 'Working' && 'bg-amber-500')}>
                    <div className={cn(item.status === 'Completed' && 'text-green-600', item.status === 'Cancelled' && 'text-red-500', item.status === 'Working' && 'text-amber-500')}>
                        {item.status}
                    </div>
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
