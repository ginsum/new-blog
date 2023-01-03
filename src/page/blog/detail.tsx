import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { getBlogPost } from '../../firebase/content';
import PostView from '../../container/Viewer';

const BlogDetail = () => {
  const [post, setPost] = useState<any>(null);

  const { id = '' } = useParams();

  const getPost = async () => {
    const postData = await getBlogPost(id);
    setPost(postData);
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="flex flex-col container mx-auto w-full md:w-[580px] px-6 py-8 h-screen">
      <div className="flex self-end mb-4 text-sm">
        <Link to="/blog">목록으로</Link>
      </div>
      <div className="flex justify-between items-end mb-3 px-1">
        <div className="text-xl font-bold text-blue-500">{post?.title}</div>
        <div className="text-sm text-slate-400">{post?.date}</div>
      </div>
      <hr />
      <div className="text-lg p-3">
        {post?.content && <PostView content={post.content} />}
      </div>
    </div>
  );
};

export default BlogDetail;
