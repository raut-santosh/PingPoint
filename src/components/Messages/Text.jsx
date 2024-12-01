import React from "react";

export default function Text({
  incoming,
  author,
  timestamp,
  read_receipt,
  content,
}) {
  return incoming ? (
    <div className="max-w-125">
      <p className="mb-2.5 text-sm font-medium">{author}</p>
      <div className="mb-2.5 rounded-2xl rounded-tl-none bg-gray px-5 py-3 dark:bg-boxdark-2">
        <p className="dark:text-white">
          {content}
        </p>
      </div>
      <p className="text-xs">{timestamp}</p>
    </div>
  ) : (
    <div className="max-w-125 ml-auto">
      <div className="mb-2.5 rounded-2xl rounded-br-none bg-primary px-5 py-3">
        <p className="text-white">
          {content}
        </p>
      </div>
      <p className="text-xs">{timestamp}</p>
    </div>
  );
}