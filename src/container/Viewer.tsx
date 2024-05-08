"use client";

import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import { Viewer } from "@toast-ui/react-editor";

export default function PostView({ content }: { content: string }) {
  return <Viewer initialValue={content} />;
}
