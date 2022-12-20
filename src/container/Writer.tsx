import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

import { postBlogPost } from '../firebase/content';

const Writer = () => {
  const [title, setTitle] = useState<string>('');

  const editorRef = useRef<any>();
  const navigate = useNavigate();

  const onClickButton = async () => {
    const editorInstance = editorRef.current.getInstance();

    const data = {
      title,
      content: editorInstance.getMarkdown(),
    };

    await postBlogPost(data);

    alert('제출이 완료되었습니다. 감사합니다.');
    navigate('/blog');
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={title}
          className="w-full h-10 mb-4 border"
          onChange={(e) => setTitle(e.target.value)}
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
