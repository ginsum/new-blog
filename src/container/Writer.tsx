"use client";

import { useEffect, useState, useRef } from "react";
import { useRecoilValue } from "recoil";

import { postBlogPost, updateBlogPost } from "../firebase/content";

import { userIdState } from "../recoil/atom";

import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Props {
  id?: string;
  title?: string;
  category?: string;
  content?: string;
}

const Writer = ({ id, title = "", category = "", content = "" }: Props) => {
  const [titleInput, setTitle] = useState<string>(title);
  const [categoryInput, setCategory] = useState<string>(category);
  const userId = useRecoilValue(userIdState);

  const router = useRouter();

  const editorRef = useRef<any>();

  useEffect(() => {
    if (content) {
      editorRef.current?.getInstance().setMarkdown(content);
    }
  }, []);

  const onClickButton = async () => {
    if (userId) {
      const editorInstance = editorRef.current.getInstance();

      const data = {
        title,
        category,
        content: editorInstance.getMarkdown(),
      };

      if (id) {
        await updateBlogPost(id, data);
      } else {
        await postBlogPost(userId, data);
      }

      alert("제출이 완료되었습니다. 감사합니다.");
      router.push("/blog");
    } else {
      alert("로그인이 필요합니다");
    }
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={titleInput}
          className="w-full h-10 p-4 mb-4 border"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={categoryInput}
          className="w-full h-10 p-4 mb-4 border"
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <div className="w-full">
        <Editor
          initialValue="hello react editor world!"
          previewStyle="vertical"
          height="800px"
          initialEditType="markdown"
          ref={editorRef}
        />
      </div>
      <div className="flex self-end mt-5 text-sm">
        <button className=" mr-4">
          <Link href="/blog">취소</Link>
        </button>
        <button className=" " onClick={onClickButton}>
          등록
        </button>
      </div>
    </>
  );
};

export default Writer;
