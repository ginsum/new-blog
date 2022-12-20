import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getBlogPost } from '../../firebase/content';
import PostView from '../../container/Viewer';

const BlogList = () => {
  const [post, setPost] = useState<any>(null);

  const getPost = async () => {
    const postData = await getBlogPost('1671540930668');
    setPost(postData);
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="flex flex-col container mx-auto px-48 py-8 h-screen">
      <div className="flex self-end mb-4 text-sm">
        <Link to="/blog">목록으로</Link>
      </div>
      <div className="flex justify-between items-end mb-3 px-1">
        <div className="text-xl font-bold text-blue-600">{post?.title}</div>
        <div className="text-sm text-zinc-400">2022-07-11</div>
      </div>
      <hr />
      <div className="text-lg p-3">
        {post?.content && <PostView content={post.content} />}
      </div>
    </div>
  );
};

export default BlogList;
