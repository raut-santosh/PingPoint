import React from "react";
import User01 from '../../images/user/user-01.png'
import { DotsThree } from "@phosphor-icons/react";

export default function Inbox() {
  return (
    <div className="flex h-full flex-col border-l border-stroke dark:border-strokedark xl:w-3/4">
      <div className="sticky flex items-center flex-row justify-between border-b border-stroke dark:border-strokedark px-6 py-4.5">
        <div className="flex items-center">
          <div className="mr-4.5 h-13 w-full max-w-13 overflow-hidden rounded-full">
            <img src={User01} alt="avatar" className="h-full w-full object-cover object-center" />
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
    </div>
  );
}
