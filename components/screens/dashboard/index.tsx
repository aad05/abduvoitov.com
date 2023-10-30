import Navbar from "@/components/navbar";
import PageTitle from "@/customs/page-title";
import { FC } from "react";

const Dashboard: FC = () => {
  return (
    <>
      <Navbar />
      <div className="w-[700px] m-auto p-5 max-[800px]:w-full max-[800px]:py-5 max-[800px]:px-10">
        <PageTitle>Dashboard</PageTitle>
      </div>
    </>
  );
};

export default Dashboard;
