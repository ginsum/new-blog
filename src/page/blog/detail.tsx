const BlogList = () => (
  <div className="flex flex-col container mx-auto px-48 py-20 h-screen">
    <div className="flex justify-between items-end mb-3 px-1">
      <div className="text-2xl font-bold text-blue-800">이것은 제목입니다</div>
      <div className="text-sm text-zinc-400">2022-07-11</div>
    </div>
    <hr />
    <div className="text-lg text-zinc-800 mt-12 leading-9">
      It is a long established fact that a reader will be distracted by the
      readable content of a page when looking at its layout. The point of using
      Lorem Ipsum is that it has a more-or-less normal distribution of letters,
      as opposed to using 'Content here, content here', making it look like
      readable English. Many desktop publishing packages and web page editors
      now use Lorem Ipsum as their default model text, and a search for 'lorem
      ipsum' will uncover many web sites still in their infancy. Various
      versions have evolved over the years, sometimes by accident, sometimes on
      purpose (injected humour and the like).
    </div>
  </div>
);

export default BlogList;
