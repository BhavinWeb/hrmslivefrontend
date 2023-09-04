import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  name: string;
  description: string;
  profileImage: string;
  address: string;
  social_media: {
    icon: string;
    bgColor: string;
    href: string;
  }[];
  onEditClick: () => void;
  backgroundImage: string;
  isProfile?: boolean;
}

const ProfileCard: React.FC<Props> = ({
  address,
  description,
  name,
  profileImage,
  social_media,
  onEditClick,
  backgroundImage,
  isProfile,
}) => {
  return (
    <div className="relative w-[98%] pt-4 pl-4 m-auto h-52 opacity-90 bg-gradient-to-r overflow-hidden from-[#4F5FF6] to-blue-400 rounded-2xl shadow-[-8px_0px_20px_0px_rgba(89,102,122,0.18)]">
      <Image
        src={backgroundImage}
        alt="image"
        fill
        className="object-cover w-100% h-105% opacity-5"
      />
      <div className="flex flex-col z-10  relative">
        <div className="justify-end w-full flex">
          <Button
            onClick={onEditClick}
            className="gap-3 flex mr-4 items-center bg-red-400 hover:bg-red-500 rounded-md text-white text-base font-medium"
          >
            Edit Profile
            <Image
              src={"/svg/file-edit.svg"}
              alt="edit"
              width={12}
              height={12}
            />
          </Button>
        </div>
        <div className="flex px-3 gap-5">
          <div>
            {!isProfile ? (
              <div className="p-5 bg-stone-950 border-white border-[5px] rounded-full">
                <Image
                  src={profileImage}
                  alt="profile pic"
                  width={50}
                  height={50}
                />
              </div>
            ) : (
              <div className="bg-stone-950 border-white border-[5px] rounded-full">
                <Image
                  src={profileImage}
                  alt="profile pic"
                  width={90}
                  height={90}
                />
              </div>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <h1 className="text-white text-xl font-semibold">{name}</h1>
              <h2 className="text-white text-sm font-normal leading-tight">
                {description}
              </h2>
            </div>
            <div>
              <h3 className="text-base font-normal flex text-white gap-3">
                <Image
                  src={"/svg/marker.svg"}
                  alt="Marks"
                  width={16}
                  height={16}
                />{" "}
                <p>{address}</p>
              </h3>
            </div>
          </div>
        </div>
        <div className="justify-end w-full h-full flex">
          <div>
            <div className="bg-white h-14 rounded-tl-2xl flex items-center gap-5 bg-opacity-20 p-2">
              {social_media.map((item) => (
                <>
                  <Link
                    href={"/cprofile/companydetails"}
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
                  </Link>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
