import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";

const Writer = () => {
  return (
    <div className="w-full">
      <Editor
        initialValue="hello react editor world!"
        previewStyle="vertical"
        height="800px"
        initialEditType="markdown"
        useCommandShortcut={true}
      />
    </div>
  );
};

export default Writer;
