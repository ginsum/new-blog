import { useEffect, useState, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { getBlogPost, postBlogPost, updateBlogPost } from "../firebase/content";

import { userIdState } from "../recoil/atom";

import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";

const Writer = () => {
  const [title, setTitle] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const userId = useRecoilValue(userIdState);

  const { id = "" } = useParams();

  const editorRef = useRef<any>();
  const navigate = useNavigate();

  const getPost = async () => {
    const postData = await getBlogPost(id);
    editorRef.current?.getInstance().setMarkdown(postData?.content);
    setTitle(postData?.title);
  };

  useEffect(() => {
    if (id) {
      getPost();
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
      navigate("/blog");
    } else {
      alert("로그인이 필요합니다");
    }
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={title}
          className="w-full h-10 p-4 mb-4 border"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={category}
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
          <Link to="/blog">취소</Link>
        </button>
        <button className=" " onClick={onClickButton}>
          등록
        </button>
      </div>
    </>
  );
};

export default Writer;
