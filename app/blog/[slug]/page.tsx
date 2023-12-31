import BlogRendering from "@/components/screens/blog/blog-rendering";
import fs from "fs";
import path from "path";

import { getPost } from "@/lib/mdx-reader";
import { Metadata } from "next";

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("blogs"));

  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return paths;
}

/*
{
  params,
}: {
  params: { meta: { [key: string]: any }; slug: string };
}
*/

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPost(params);

  return {
    title: `${post.fontMatter.title}`,
    description: `${post.fontMatter.title} - ${post.fontMatter.description}`,
    alternates: {
      canonical: `/blog`,
    },
    openGraph: {
      title: `${post.fontMatter.title} - Abduvoitov Asadbek`,
      description: `${post.fontMatter.title} - ${post.fontMatter.description}`,
      url: `https://abduvoitov.vercel.app/api/og?text='${post.fontMatter.title} - Abduvoitov Asadbek'`,
      siteName: `https://abduvoitov.com/blog/${params.slug}`,
      images: [
        {
          url: `https://abduvoitov.vercel.app/api/og?text='${post.fontMatter.title} - Abduvoitov Asadbek'&width=800&height=600`,
          width: 800,
          height: 600,
        },
        {
          url: `https://abduvoitov.vercel.app/api/og?text='${post.fontMatter.title} - Abduvoitov Asadbek'&width=1800&height=1600`,
          width: 1800,
          height: 1600,
          alt: "My custom alt",
        },
      ],
      locale: "en_US",
      type: "website",
    },
  };
}

export default function Blog({ params }: { params: { slug: string } }) {
  const post = getPost(params);

  return (
    <main className="w-full h-[100vh]">
      <BlogRendering post={post} />
    </main>
  );
}
