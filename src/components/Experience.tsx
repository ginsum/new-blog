"use client";

import { useState } from "react";

const ExperienceCard = ({
  company,
  date,
  description,
  detail,
}: {
  company: string;
  date: string;
  description: string;
  detail?: {
    title: string;
    list: string[];
  }[];
}) => {
  const [open, setOpen] = useState<Boolean>(false);
  return (
    <div
      className="flex flex-col p-4 my-2 border border-zinc-200 rounded-2xl gap-2"
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between">
        <div>{company}</div>
        <div className="text-sm text-zinc-400">{date}</div>
      </div>
      <div className="text-sm text-zinc-500">{description}</div>
      {open && detail && (
        <>
          <div className="mb-2 border-t border-blue-100" />
          {detail?.map(({ title, list }) => (
            <div key={title} className="p-1">
              <div className="text-sm text-zinc-600">{title}</div>
              <div className="flex flex-col pl-4 py-4 text-sm gap-1.5 text-zinc-500">
                {list.map((el) => (
                  <div key={el} className="whitespace-pre-wrap">
                    {`- ${el}`}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default ExperienceCard;
