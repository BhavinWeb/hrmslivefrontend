import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  link?: string;
  linklable?: string;
}

const CardHeading: React.FC<Props> = ({ link, linklable, title }) => {
  return (
    <section>
      <div className="flex justify-between p-3">
        <h1 className="font-[600] text-[18px]">{title}</h1>
        {link && (
          <Link
            href={link}
            className="text-[#4F5FF6] text-[16px] font-[500] flex gap-2 justify-center items-center"
          >
            {" "}
            {linklable}{" "}
            <Image src={"/svg/shape.svg"} alt="shape" height={5} width={5} />
          </Link>
        )}
      </div>
    </section>
  );
};

export default CardHeading;
