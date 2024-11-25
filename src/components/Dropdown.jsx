import { DotsThree, PencilSimple, Trash } from "@phosphor-icons/react";
import React, { useEffect, useRef, useState } from "react";

export default function Dropdown() {
  const [dropwdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropwdown = useRef(null);

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropwdown.current) return;

      if (
        !dropwdown ||
        dropwdown.current.contains(target) ||
        trigger.current.contains(target)
      ) {
        return;
      }

      setDropdownOpen(false);
    };

    document.addEventListener("click", clickHandler);

    return () => document.removeEventListener("click", clickHandler);
  });

  useEffect(() => {
    const keyHandler = ({keyCode}) => {
        if(!dropwdownOpen || keyCode !== 27){
            return;
        }
        setDropdownOpen(false);
    }
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  })

  return (
    <div className="relative flex">
      <button
        className="text-[#98A6AD] hover:text-body"
        ref={trigger}
        onClick={() => setDropdownOpen((prev) => !prev)}
      >
        <DotsThree weight="bold" size={24} />
      </button>

      <div
        ref={dropwdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute right-0 top-full z-40 w-40 space-y-1 rounded-sm border border-stroke bg-white p-1.5 shadow-default dark:border-strokedark dark:bg-boxdark 
            ${dropwdownOpen === true ? "block" : "hidden"}`}
      >
        <button className="flex w-full items-center gap-2 rounded-sm px-4 py-1.5 texxt-left text-sm hover:bg-gray dark:hover:bg-meta-4">
          <PencilSimple size={20} />
          Edit
        </button>

        <button className="flex w-full items-center gap-2 rounded-sm px-4 py-1.5 texxt-left text-sm hover:bg-gray dark:hover:bg-meta-4">
          <Trash size={20} />
          Delete
        </button>
      </div>
    </div>
  );
}
