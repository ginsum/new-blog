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
  const contentSlice = `${content.substring(0, 90)}...`;

  return (
    <div
      className="p-8 my-2 cursor-pointer border border-gray-200 rounded-2xl shadow"
      onClick={() => navigate(id)}
    >
      <div className="flex justify-between items-end pb-2 border-b border-slate-300">
        <div className="text-xl font-bold text-blue-800">{title}</div>
        <div className="text-sm text-gray-600">{date}</div>
      </div>
      <div
        className="mt-6 text-sm text-gray-500"
        dangerouslySetInnerHTML={{
          __html: contentSlice,
        }}
      />
      {/* <div className="text-slate-600">{content}</div> */}
    </div>
  );
};

export default ListCard;
