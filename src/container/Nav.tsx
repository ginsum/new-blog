"use client";

import Link from "next/link";
import { useRecoilValue } from "recoil";

import { userIdState } from "../recoil/atom";

const menuItems = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Blog",
    link: "/blog",
  },
  {
    id: 3,
    title: "About",
    link: "/about",
  },
];

const Nav = () => {
  const userId = useRecoilValue(userIdState);

  return (
    <div className="w-full h-12">
      <div className="flex container mx-auto w-full md:w-[640px] py-3 justify-end items-center text-zinc-400 text-sm">
        {menuItems.map(({ id, title, link }) => (
          <Link href={link} key={id}>
            <div className="mr-3">{title}</div>
          </Link>
        ))}
        {userId && (
          <Link href="/write">
            <div>Write</div>
          </Link>
        )}
      </div>
    </div>
  );
};
export default Nav;
