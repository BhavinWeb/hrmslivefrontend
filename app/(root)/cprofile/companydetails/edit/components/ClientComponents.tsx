"use client";

import ProfileOverviewForm from "@/components/forms/ProfileOverviewForm";
import { CardComponent } from "@/components/shared/Card/CardComponent";
import CardHeading from "@/components/shared/Card/CardHeading";
import { Button } from "@/components/ui/button";
import { Tab, Tabs } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { SOCIALMEDIA } from "../../components/Client";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import ExperienceForm from "@/components/forms/ExperienceForm";
import ChangePasswordForm from "@/components/forms/ChangePasswordForm";
import { LoginHistory } from "@/constants";

const ClientComponents = () => {
  return (
    <div className="flex flex-col gap-2">
      <CardComponent className="w-[98%] relative">
        <div className="h-40 opacity-90 bg-gradient-to-r from-indigo-500 to-blue-400 relative p-4">
          <Image
            src={"/image/bg.png"}
            alt="image"
            fill
            className="object-cover w-100% h-105% opacity-5"
          />
          <div className="flex flex-col z-10  relative">
            <div className="justify-end w-full flex">
              <Button
                // onClick={onEditClick}
                className="gap-3 flex items-center text-stone-500 bg-white hover:bg-slate-50 rounded-md  text-base font-medium"
              >
                Change Cover
                <Image
                  src={"/svg/picture.svg"}
                  alt="edit"
                  width={12}
                  height={12}
                />
              </Button>
            </div>
          </div>
        </div>
        <div>
          <div className="absolute top-28 left-[46%]">
            <div className="p-5 bg-stone-950 border-white border-[5px] relative w-fit rounded-full ">
              <Image
                src={"/svg/freshcodes.svg"}
                alt="profile pic"
                width={50}
                height={50}
              />
              <div className="bg-white p-2 right-0 rounded-full absolute">
                <Image
                  src={"/svg/camera.svg"}
                  alt="profile pic"
                  width={18}
                  height={18}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center w-full justify-center mt-16 flex-col gap-2">
          <h1 className="text-neutral-800 text-lg font-semibold">
            Freshcodes Technology
          </h1>
          <p className="text-slate-500 text-sm font-normal leading-tight">
            312, Western Arena, California - 358412
          </p>
        </div>
      </CardComponent>
      <div className="flex flex-wrap">
        <CardComponent className="w-[62%] h-[500px]">
          <Tabs
            variant="underlined"
            classNames={{
              tabContent: "group-data-[selected=true]:text-indigo-500",
              cursor: "group-data-[selected=true]:bg-indigo-500",
            }}
          >
            <Tab
              key={"ProfileOverview"}
              title="Profile Overview"
              className="text-lg p-4"
            >
              <ProfileOverviewForm />
            </Tab>
            <Tab key={"Experience"} title="Experience" className="text-lg p-4">
              <ExperienceForm />
            </Tab>
            <Tab
              key={"ChangePassword"}
              title="Change Password"
              className="text-lg p-4 gap-4 flex flex-col"
            >
              <ChangePasswordForm />
              <div className="flex flex-col">
                <div className="justify-end w-full flex">
                  <Button
                    variant="ghost"
                    className="text-indigo-500 text-lg font-medium"
                  >
                    All Logout
                  </Button>
                </div>
                <div>
                  <h1 className="text-neutral-800 text-lg font-normal">
                    Login History
                  </h1>
                </div>
                {LoginHistory.map((item) => (
                  <>
                    <div
                      key={item.title}
                      className="flex gap-3 font-[400] text-start justify-between my-3 mx-2"
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
                          <p className="text-neutral-800 font-medium">
                            {item.title}
                          </p>
                          <p className="text-neutral-400 text-sm font-medium">
                            {item.description}
                          </p>
                        </div>
                      </div>
                      <div>
                        <h1 className="text-indigo-500 text-base font-medium">
                          Logout
                        </h1>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </Tab>
          </Tabs>
        </CardComponent>
        <CardComponent className="w-[34%] h-full">
          <CardHeading title="Social Links" />
          <div className="flex flex-col gap-5 p-5">
            {SOCIALMEDIA.map((item) => (
              <>
                <div className="flex w-full gap-3">
                  <div>
                    <div
                      className={cn(
                        "rounded-full flex items-center justify-center w-10 h-10",
                        item.bgColor
                      )}
                    >
                      <Image
                        src={item.icon}
                        alt="social mdeia"
                        width={22}
                        height={22}
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <Input type="text" value={item.href} />
                  </div>
                </div>
              </>
            ))}
            <div className="flex items-center w-full justify-center">
              <Button className="flex gap-3 items-center bg-indigo-500 hover:bg-indigo-700 rounded-md">
                Add New Link{" "}
                <Image src={"/svg/add.svg"} alt="add" width={14} height={14} />
              </Button>
            </div>
          </div>
        </CardComponent>
      </div>
    </div>
  );
};

export default ClientComponents;
