import { ReactNode } from "react";

const Card = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className="px-5 md:px-6 py-8 my-2 cursor-pointer border border-zinc-200 rounded-2xl"
      //   onClick={handleClick}
    >
      {children}
    </div>
  );
};

export default Card;
