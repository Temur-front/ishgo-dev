"use client";

import { Salaries } from "@/TS/consts";
import SearchInput from "@/components/inputs";
import { Sidebar } from "@/components/layout";
import { SelectComponent } from "@/components/selects";
import { Statuses } from "@/components/statuses";
import { JobDescriptionTabs } from "@/components/tabs";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import filter from "@/public/icons/filter.png";
import amazon from "@/public/images/amazon.png";
import elit from "@/public/images/elit.png";
import Icons from "@/public/svg";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  return (
    <div className="h-screen bg-[#FCFCFC] p-4">
      <div className="flex h-full gap-4">
        <Sidebar />
        <div className="flex-1 flex gap-4">
          {/* Vacancies list */}
          <div className="flex-1 h-full p-4 shadow-main bg-white rounded-main">
            <Collapsible open={isFilterOpen} onOpenChange={setIsFilterOpen}>
              <div className="flex items-center gap-3">
                <SearchInput />
                <div>
                  <CollapsibleTrigger asChild>
                    <Button className="w-11 h-11 flex-shrink-0 p-0 shadow-main border border-gray-200 flex justify-center items-center rounded-main bg-white">
                      <Image src={filter} alt="" />
                    </Button>
                  </CollapsibleTrigger>
                </div>
                <Button className="h-11 w-[120px] flex-shrink-0 text-sm font-semibold bg-black text-green-500 border-gray-200">
                  Search
                </Button>
              </div>
              <CollapsibleContent className="flex gap-3 mt-4">
                <SelectComponent options={Salaries} placeholder="Salary" />
                <SelectComponent options={Salaries} placeholder="Job type" />
                <SelectComponent options={Salaries} placeholder="Location" />
                <SelectComponent options={Salaries} placeholder="Order by" />
              </CollapsibleContent>
            </Collapsible>

            {!isFilterOpen && (
              <div>
                <span className="h-[38px] inline-flex justify-center items-center px-3 rounded-main bg-slate-100 text-slate-500">
                  Administrative, Business and Management
                </span>
              </div>
            )}

            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} className="mt-4 shadow-main">
                <div className="h-20 border border-gray-200 rounded-main flex justify-between px-4 gap-2">
                  <div className="flex items-center">
                    <div className="w-14 h-14 rounded-full border border-gray-200 bg-white">
                      <Image src={amazon} alt="" />
                    </div>
                    <div className="ml-2">
                      <h6>Sales manager</h6>
                      <span className="text-sm text-slate-500 font-normal">
                        “Amazon.com” Inc
                      </span>
                    </div>
                  </div>
                  <div className="flex-grow flex justify-between items-end flex-col py-3 text-xs">
                    <Statuses status="new" />
                    <div className="flex items-center">
                      <div className="flex items-center px-2 border-x py-[1px]">
                        <Icons.Eye className="mr-1" />

                        <span className="text-orange-main">567</span>
                      </div>
                      <span className="px-2 border-r py-[1px] text-slate-400 font-normal">
                        12 Sen
                      </span>
                      <span className="px-2">
                        <Icons.Heart />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Vacancy Info */}
          <div className="flex-1 h-full flex flex-col justify-between p-4 shadow-main bg-white rounded-main relative">
            <div className="flex border-b border-gray-100 pb-2.5">
              <div>
                <Image
                  width={56}
                  height={56}
                  src={elit}
                  className="rounded-full"
                  alt=""
                />
              </div>
              <div className="flex flex-grow flex-col justify-between py-0.5 ml-2.5">
                <span className="font-medium">ELIT.EO</span>
                <span className="text-slate-400 w-max underline">
                  Household items
                </span>
              </div>
              <div className="flex items-center">
                <div className="flex items-center px-2 py-[1px] gap-1.5">
                  <Icons.Eye
                    className="mr-1 !stroke-slate-500"
                    transform="scale(1.5)"
                    strokeWidth={1}
                  />
                  <span className="textslate text-slate-500">567</span>
                </div>
                <span className="px-2">
                  <Icons.Heart />
                </span>
              </div>
            </div>
            <div className="flex-grow mt-6">
              <div className="flex justify-between items-center pb-2">
                <h1 className="text-xl font-semibold">Category Manager</h1>
                <Statuses status="new" />
              </div>
              <div className="flex items-center gap-2">
                <Icons.Calendar className="flex-none" />
                <span className="text-orange-main ">Deadline 16.09.2024</span>
                <span className="ml-4 text-hashtag underline font-medium">
                  #Administrative,Business and Management
                </span>
              </div>
              <div className="mt-4">
                <JobDescriptionTabs />
              </div>
            </div>
            <div className="flex justify-between items-center w-full">
              <div className="flex gap-5">
                <Statuses status="print" />
                <Statuses status="complain" />
              </div>
              <Button className="bg-green-sec text-black hover:text-white w-[140px] h-[42px]">
                Apply
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
