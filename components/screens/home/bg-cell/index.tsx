import { FC } from "react";

const BackgroundCell: FC = () => {
  return (
    <div className="w-full h-[100vh]  bg-white grid grid-cols-[repeat(20,minmax(30px,1fr))] grid-rows-[repeat(20,minmax(130px,1fr))] max-[1100px]:grid-cols-[repeat(15,1fr)] max-[700px]:grid-cols-[repeat(10,1fr)] max-[500px]:grid-cols-[repeat(7,1fr)] max-[300px]:grid-cols-[repeat(5,1fr)]">
      {Array.from({ length: 160 }).map((_, idx) => (
        <div key={idx} className="border border-[#eef0f4]" />
      ))}
    </div>
  );
};

export default BackgroundCell;
