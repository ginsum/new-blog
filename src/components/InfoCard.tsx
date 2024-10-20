import { ReactNode } from "react";

const InfoCard = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className="py-5">
      <div className="text-lg font-semibold mb-2 text-blue-700">{title}</div>
      <div className="mb-2 border-t border-blue-200" />
      {children}
    </div>
  );
};

export default InfoCard;
