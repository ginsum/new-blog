import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="w-full h-12">
      <div className="flex container mx-auto w-full md:w-[580px] px-6 py-3 justify-end items-center text-slate-400 text-sm">
        <Link to="/">
          <div className="mr-3">Home</div>
        </Link>
        <Link to="/blog">
          <div className="mr-3">Blog</div>
        </Link>
        <Link to="/resume">
          <div>Resume</div>
        </Link>
      </div>
    </div>
  );
};
export default Nav;
