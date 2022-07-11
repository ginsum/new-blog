import PostView from '../../container/Viewer';

const test = ` ## Synchronization
  
  Synchronization is one of the biggest features of StackEdit. It enables you to synchronize any file in your workspace with other files stored in your **Google Drive**, your **Dropbox** and your **GitHub** accounts. This allows you to keep writing on other devices, collaborate with people you share the file with, integrate easily into your workflow... The synchronization mechanism takes place every minute in the background, downloading, merging, and uploading file modifications.
  
  There are two types of synchronization and they can complement each other:
  
  - The workspace synchronization will sync all your files, folders and settings automatically. This will allow you to fetch your workspace on any other device.
    > To start syncing your workspace, just sign in with Google in the menu.
  
  - The file synchronization will keep one file of the workspace synced with one or multiple files in **Google Drive**, **Dropbox** or **GitHub**.
    > Before starting to sync files, you must link an account in the **Synchronize** sub-menu.;
`;

const BlogList = () => (
  <div className="flex flex-col container mx-auto px-48 py-20 h-screen">
    <div className="flex justify-between items-end mb-3 px-1">
      <div className="text-2xl font-bold text-blue-800">이것은 제목입니다</div>
      <div className="text-sm text-zinc-400">2022-07-11</div>
    </div>
    <hr />
    <div className="text-lg">
      <PostView content={test} />
    </div>
  </div>
);

export default BlogList;
