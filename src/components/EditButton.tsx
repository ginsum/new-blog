"use client";

import Link from "next/link";
import { useRecoilValue } from "recoil";
import { userIdState } from "src/recoil/atom";

const EditButton = ({ id }: { id: string }) => {
  const userId = useRecoilValue(userIdState);
  return userId ? <Link href={`/edit/${id}`}>수정</Link> : <></>;
};

export default EditButton;
