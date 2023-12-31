import { FC } from "react";
import Navbar from "@/components/navbar";
import { MDXRemote } from "next-mdx-remote/rsc";
import Avatar from "./avatar";
import Footer from "@/components/footer";
import { ReadTimeResults } from "reading-time";
import { Card, CardHeader } from "@/components/ui/card";
import Link from "next/link";

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
        {/* <markdown-style></markdown-style> */}
        <article className="mt-12 prose dark:prose-invert lg:prose-xl">
          <MDXRemote source={post.content} />
        </article>
        <Card className="mt-8">
          <CardHeader>
            <p className="font-semibold max-md:text-sm">
              Subscribe to telegram channel{" "}
              <Link
                className="font-semibold text-[#1877FE]"
                href={"https://t.me/asadbek_abduvoitov"}
              >
                @asadbek_abduvoitov
              </Link>{" "}
              where I share my thoughts, articles, talks and more.
            </p>
          </CardHeader>
        </Card>
        <Footer />
      </div>
    </>
  );
};

export default BlogRendering;
