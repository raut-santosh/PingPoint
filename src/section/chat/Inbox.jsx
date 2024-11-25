import React from "react";
import User01 from "../../images/user/user-01.png";
import { DotsThree, LinkSimple, PaperPlaneTilt, Smiley } from "@phosphor-icons/react";

export default function Inbox() {
  return (
    <div className="flex h-full flex-col border-l border-stroke dark:border-strokedark xl:w-3/4">
      {/* chat header */}
      <div className="sticky flex items-center flex-row justify-between border-b border-stroke dark:border-strokedark px-6 py-4.5">
        <div className="flex items-center">
          <div className="mr-4.5 h-13 w-full max-w-13 overflow-hidden rounded-full">
            <img
              src={User01}
              alt="avatar"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div>
            <h5 className="font-medium text-black dark:text-white">
              Elon Musk
            </h5>
            <p className="text-sm">Reply to message</p>
          </div>
        </div>
        <div>
          <DotsThree weight="bold" size={24} />
        </div>
      </div>

      {/* list of message */}
      <div className="max-h-full space-y-3.5 overflow-auto no-scrollbar px-6 py-7.5 grow"></div>

      {/* input section */}
      <div className="sticky bottom-0 border-t border-stroke bg-white px-6 py-5 dark:border-strokedark dark:bg-boxdark">
        <form className="flex items-center justify-between space-x-4.5">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Type something here"
              className="h-13 w-full rounded-md border border-stroke bg-gray pl-5 pr-19 text-black placeholder-body outline-none focus:border-primary dark:border-strokedark dark:bg-boxdark-2 dark:text-white"
            />

            <div className="absolute pt-1 right-5 top-1/2 -translate-y-1/2 items-center justify-end space-x-4">
              <button className="hover:text-primary">
                <LinkSimple size={20} />
              </button>
              <button className="hover:text-primary">
                <Smiley size={20} />
              </button>
            </div>
          </div>

          <button className="flex items-center justify-center h-13 max-w-13 w-full rounded-md bg-primary text-white hover:bg-opacity-90">
            <PaperPlaneTilt size={24} weight="bold" />
          </button>
        </form>
      </div>
    </div>
  );
}
