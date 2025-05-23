"use client";

import { useRouter } from "next/navigation";

const ListCard = ({
  title,
  category,
  content,
  id,
  date,
}: {
  title: string;
  content: string;
  category: string;
  id: string;
  date: string;
}) => {
  const router = useRouter();

  return (
    <div
      className="w-full md:w-[640px] px-8 pt-7 pb-8 my-2 cursor-pointer border border-zinc-200 rounded-2xl shadow"
      onClick={() => router.push(`/blog/${id}`)}
    >
      <div className="flex flex-col md:flex-row justify-between pb-2 border-b border-zinc-300">
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <div className="flex items-center h-6 px-2.5 mr-2.5 mb-2 md:mb-0 text-xs bg-blue-400 text-white rounded-xl">
            {category}
          </div>
          <div className="text-lg font-bold text-blue-900">{title}</div>
        </div>

        <div className="hidden md:block text-sm text-zinc-400 font-medium self-end">
          {date}
        </div>
      </div>
      <div
        className="w-64 md:w-[576px] h-14 mt-4 text-sm text-zinc-500 overflow-hidden"
        style={{
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: 4,
        }}
      >
        {content}
      </div>
    </div>
  );
};

export default ListCard;
