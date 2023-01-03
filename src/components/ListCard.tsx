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
  const contentSlice = content.substring(0, 100);

  return (
    <div className="my-10 cursor-pointer" onClick={() => navigate(id)}>
      <div className="flex justify-between">
        <div className="text-2xl font-bold mb-4 text-slate-800">{title}</div>
        <div className="text-sm text-slate-400">{date}</div>
      </div>
      <div
        className="mb-6"
        dangerouslySetInnerHTML={{
          __html: contentSlice,
        }}
      />
      <hr />
      {/* <div className="text-slate-600">{content}</div> */}
    </div>
  );
};

export default ListCard;
