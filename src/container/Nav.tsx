"use client";

import Link from "next/link";
import { useRecoilValue } from "recoil";

import { userIdState } from "../recoil/atom";

const Nav = () => {
  const userId = useRecoilValue(userIdState);

  return (
    <div className="w-full h-12">
      <div className="flex container mx-auto w-full md:w-[640px] py-3 justify-end items-center text-zinc-400 text-sm">
        <Link href="/">
          <div className="mr-3">Home</div>
        </Link>
        <Link href="/blog">
          <div className="mr-3">Blog</div>
        </Link>
        <Link href="/about">
          <div className="mr-3">About</div>
        </Link>

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
