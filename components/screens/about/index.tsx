import Navbar from "@/components/navbar";
import PageTitle from "@/customs/page-title";
import Link from "next/link";
import { FC } from "react";

const About: FC = () => {
  return (
    <>
      <Navbar />
      <div className="w-[700px] m-auto p-5 max-[800px]:w-full max-[800px]:py-5 max-[800px]:px-10">
        <PageTitle>About</PageTitle>
        <h3 className="mt-8 leading-6 text-base font-normal">
          {"I'm "}
          <Link
            className="text-[#1877FE]"
            href="https://t.me/asadbek_abduvoitov"
            target="_blank"
          >
            Abduvoitov Asadbek
          </Link>
          , a simple person who can communicate in 4 laguages, software engineer
          and instructor from Namangan, Uzbekistan.
        </h3>
      </div>
    </>
  );
};

export default About;
