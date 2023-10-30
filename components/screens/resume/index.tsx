import Navbar from "@/components/navbar";
import { FC } from "react";

const Resume: FC = () => {
  return (
    <>
      <Navbar />
      <div className="w-[700px] m-auto p-5 max-[800px]:w-full max-[800px]:py-5 max-[800px]:px-10">
        <h1 className="text-5xl font-black">Resume</h1>
      </div>
    </>
  );
};

export default Resume;
