import AboutScreen from "@/components/screens/about";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Blog",
    description:
      "Software Engineer - Exceptional writing and proofreading skills with the ability to create compelling content across a range of industries and topics.",
    alternates: {
      canonical: `/blog`,
    },
  };
}

export default function Blog() {
  return (
    <main className="w-full h-[100vh]">
      <AboutScreen />
    </main>
  );
}
