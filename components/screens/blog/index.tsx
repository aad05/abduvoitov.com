import Navbar from "@/components/navbar";
import { Input } from "@/components/ui/input";
import PageTitle from "@/customs/page-title";
import { Search } from "lucide-react";
import { FC } from "react";

const Blog: FC = () => {
  return (
    <>
      <Navbar />
      <div className="w-[700px] m-auto p-5 max-[800px]:w-full max-[800px]:py-5 max-[800px]:px-10">
        <PageTitle>Blog</PageTitle>
        <p className="font-sans font-medium leading-7 mt-8">
          I write mostly about web development, languages, tech careers and
          personal growth. In total, {"I've"} written 1 articles on this site.
          Use the search below to filter by title.
        </p>
        <div className="relative">
          <Input className="mt-4" placeholder="Search..." />
          <Search className="absolute right-4 top-2" />
        </div>
      </div>
    </>
  );
};

export default Blog;
