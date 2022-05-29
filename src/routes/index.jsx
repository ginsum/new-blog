import { Routes, Route } from 'react-router-dom';

import Intro from '../page/intro';
import Resume from '../page/resume';
import Blog from '../page/blog/list';

const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="resume" element={<Resume />} />
      <Route path="blog" element={<Blog />} />
    </Routes>
  );
};

export default Root;
