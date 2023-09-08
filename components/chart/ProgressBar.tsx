import React from "react";
import { ProgressBar as Bar } from "@primer/react";

const DATA = [
  {
    color: "FF5757",
    title: "Applications",
    number: "08%",
  },
  {
    color: "FFA254",
    title: "Shortlisted",
    number: "18%",
  },
  {
    color: "4F5CF6",
    title: "On-Hold",
    number: "20%",
  },
  {
    color: "FF7D65",
    title: "Rejected",
    number: "45%",
  },
  {
    color: "0BABE0",
    title: "Upcoming",
    number: "80%",
  },
];

const ProgressBar = () => {
  return (
    <div className="p-5 gap-5 flex flex-col">
      <Bar
        aria-label="Upload test.png"
        sx={{
          height: 15,
        }}
      >
        <Bar.Item
          progress={8}
          sx={{
            backgroundColor: "#FF5757",
            borderRadius: 12,
            zIndex: 5,
          }}
        />
        <Bar.Item
          progress={18}
          sx={{
            backgroundColor: "#FFA254",
            borderTopRightRadius: 12,
            borderBottomRightRadius: 12,
            marginLeft: "-6px",
            zIndex: 4,
          }}
        />
        <Bar.Item
          progress={24}
          sx={{
            backgroundColor: "#4F5CF6",
            borderRadius: 12,
            borderTopRightRadius: 12,
            borderBottomRightRadius: 12,
            marginLeft: "-10px",

            zIndex: 3,
          }}
        />
        <Bar.Item
          progress={45}
          sx={{
            backgroundColor: "#FF7D65",
            borderRadius: 12,
            borderTopRightRadius: 12,
            borderBottomRightRadius: 12,
            marginLeft: "-10px",
            zIndex: 2,
          }}
        />
        <Bar.Item
          progress={80}
          sx={{
            backgroundColor: "#0BABE0",
            borderRadius: 12,
            borderTopRightRadius: 12,
            borderBottomRightRadius: 12,
            marginLeft: "-10px",
            zIndex: 1,
          }}
        />
      </Bar>
      <div className="flex flex-col gap-4">
        {/* {DATA.map((item) => ( */}
          <div className="flex justify-between m-2">
            <div className="flex items-center gap-2">
              <span
                className={'inline-block rounded-full w-[14px] h-[14px] bg-[#FF5757]'}
              />
              <h1>Applications</h1>
            </div>
            <div>
              <div className="rounded-xl bg-[#FF57574D] px-3 text-[#EF4E4E]">
                <p>08%</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between m-2">
            <div className="flex items-center gap-2">
              <span
                className={'inline-block rounded-full w-[14px] h-[14px] bg-[#FFA254]'}
              />
              <h1>Shortlisted</h1>
            </div>
            <div>
              <div className="rounded-xl bg-[#FFA2544D] px-3 text-[#FFA254]">
                <p>18%</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between m-2">
            <div className="flex items-center gap-2">
              <span
                className={'inline-block rounded-full w-[14px] h-[14px] bg-[#4F5CF6]'}
              />
              <h1>On-Hold</h1>
            </div>
            <div>
              <div className="rounded-xl bg-[#4F5CF64D] px-3 text-[#4F5CF6]">
                <p>20%</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between m-2">
            <div className="flex items-center gap-2">
              <span
                className={'inline-block rounded-full w-[14px] h-[14px] bg-[#FF7D65]'}
              />
              <h1>Rejected</h1>
            </div>
            <div>
              <div className="rounded-xl bg-[#FF7D654D] px-3 text-[#FF7D65]">
                <p>45%</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between m-2">
            <div className="flex items-center gap-2">
              <span
                className={'inline-block rounded-full w-[14px] h-[14px] bg-[#0BABE0]'}
              />
              <h1>Upcoming</h1>
            </div>
            <div>
              <div className="rounded-xl bg-[#0BABE04D] px-3 text-[#0BABE0]">
                <p>80%</p>
              </div>
            </div>
          </div>
        {/* ))} */}
      </div>
    </div>
  );
};

export default ProgressBar;
