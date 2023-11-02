import Navbar from "@/components/navbar";
import { MDXRemote } from "next-mdx-remote/rsc";

import { FC } from "react";
import Avatar from "./avatar";
import Footer from "@/components/footer";
import { ReadTimeResults } from "reading-time";

const BlogRendering: FC<{
  post: {
    fontMatter: {
      [x: string]: any;
    };
    reading_time: ReadTimeResults;
    slug: string;
    content: string;
  };
}> = ({ post }) => {
  return (
    <>
      <Navbar />
      <div className="w-[700px] m-auto p-5 max-[800px]:w-full max-[800px]:py-5 max-[800px]:px-10">
        <h1 className="text-5xl font-black">{post.fontMatter.title}</h1>
        <Avatar post={post} />
        <div className="mt-8">
          {/* @ts-expect-error Async Server Component */}
          <MDXRemote source={post.content}></MDXRemote>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default BlogRendering;