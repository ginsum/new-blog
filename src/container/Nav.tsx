import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { userIdState } from '../recoil/atom';

const Nav = () => {
  const userId = useRecoilValue(userIdState);

  return (
    <div className="w-full h-12">
      <div className="flex container mx-auto w-full md:w-[640px] px-6 py-3 justify-end items-center text-slate-400 text-sm">
        <Link to="/">
          <div className="mr-3">Home</div>
        </Link>
        <Link to="/blog">
          <div className="mr-3">Blog</div>
        </Link>
        <Link to="/resume">
          <div className="mr-3">Resume</div>
        </Link>

        {userId && (
          <Link to="/write">
            <div>Write</div>
          </Link>
        )}
      </div>
    </div>
  );
};
export default Nav;
