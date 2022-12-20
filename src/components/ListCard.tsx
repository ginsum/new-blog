import { useNavigate } from 'react-router-dom';

const ListCard = ({
  title,
  content,
  id,
}: {
  title: string;
  content: string;
  id: string;
}) => {
  let navigate = useNavigate();
  const contentSlice = content.substring(0, 100);

  return (
    <div className="my-10 cursor-pointer" onClick={() => navigate(id)}>
      <div className="text-2xl font-bold mb-4 text-zinc-800">{title}</div>
      <div
        dangerouslySetInnerHTML={{
          __html: contentSlice,
        }}
      />
      {/* <div className="text-zinc-600">{content}</div> */}
    </div>
  );
};

export default ListCard;
