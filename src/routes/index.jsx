import { Routes, Route } from 'react-router-dom';

import Intro from '../page/intro';

import Resume from '../page/resume';
import BlogList from '../page/blog/list';
import BlogDetail from '../page/blog/detail';
import Write from '../page/blog/write';
import Login from '../page/login';

const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="resume" element={<Resume />} />
      <Route path="blog" element={<BlogList />} />
      <Route path="blog/:id" element={<BlogDetail />} />
      <Route path="write" element={<Write />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
};

export default Root;
