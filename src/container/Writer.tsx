import { useRef } from "react";

import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";

const Writer = () => {
  const editorRef = useRef<any>();

  const onClickButton = () => {
    const editorInstance = editorRef.current.getInstance();
    // const getContent = editorInstance.getHtml();
    console.log(editorInstance, "getContent");
    console.log(editorInstance.getHTML(), "getContent");
    console.log(editorInstance.getMarkdown(), "getContent");
  };

  return (
    <div className="w-full">
      <Editor
        initialValue="hello react editor world!"
        previewStyle="vertical"
        height="800px"
        initialEditType="markdown"
        ref={editorRef}
      />
      <button onClick={onClickButton}>등록</button>
    </div>
  );
};

export default Writer;
