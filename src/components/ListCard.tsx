import { useNavigate } from 'react-router-dom';

const ListCard = ({
  title,
  content,
  id,
  date,
}: {
  title: string;
  content: string;
  id: string;
  date: string;
}) => {
  let navigate = useNavigate();

  return (
    <div
      className="w-full md:w-[640px] px-8 pt-7 pb-8 my-2 cursor-pointer border border-zinc-200 rounded-2xl shadow"
      onClick={() => navigate(id)}
    >
      <div className="flex flex-col md:flex-row justify-between pb-2 border-b border-zinc-300">
        <div className="text-xl font-bold text-blue-800">{title}</div>
        <div className="text-sm text-zinc-600 self-end ">{date}</div>
      </div>
      <div
        className="w-64 md:w-[576px] h-14 mt-4 text-sm text-zinc-500 overflow-hidden"
        style={{
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: 4,
        }}
      >
        {content}
      </div>
    </div>
  );
};

export default ListCard;
