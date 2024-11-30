import { File, Image, Paperclip } from "@phosphor-icons/react";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleDocumentModal, toggleMediaModal } from "../redux/slices/app";

export default function Attachment() {
  const dispatch = useDispatch();

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
    const keyHandler = ({ keyCode }) => {
      if (!dropwdownOpen || keyCode !== 27) {
        return;
      }
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="relative flex">
      <button
        className="text-[#98A6AD] hover:text-body"
        ref={trigger}
        onClick={(e) => {
          e.preventDefault();
          setDropdownOpen((prev) => !prev);
        }}
      >
        <Paperclip weight="bold" size={20} />
      </button>

      <div
        ref={dropwdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute right-0 -top-24 z-40 w-54 space-y-1 rounded-sm border border-stroke bg-white p-1.5 shadow-default dark:border-strokedark dark:bg-boxdark 
            ${dropwdownOpen === true ? "block" : "hidden"}`}
      >
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(toggleMediaModal(true));
          }}
          className="flex w-full items-center gap-2 rounded-sm px-4 py-1.5 texxt-left text-sm hover:bg-gray dark:hover:bg-meta-4"
        >
          <Image size={20} />
          Images & Videos
        </button>

        <button onClick={(e) => {
          e.preventDefault();
          dispatch(toggleDocumentModal(true))
        }} className="flex w-full items-center gap-2 rounded-sm px-4 py-1.5 texxt-left text-sm hover:bg-gray dark:hover:bg-meta-4">
          <File size={20} />
          Files & Documents
        </button>
      </div>
    </div>
  );
}
