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
    openGraph: {
      title: "Blog - Abduvoitov Asadbek",
      description:
        "Software Engineer - Exceptional writing and proofreading skills with the ability to create compelling content across a range of industries and topics.",
      url: "http://localhost:3000/api/og?text='Blog - Abduvoitov Asadbek'",
      siteName: "abduvoitov.com/blog",
      images: [
        {
          url: "http://localhost:3000/api/og?text='Blog - Abduvoitov Asadbek'&width=800&height=600",
          width: 800,
          height: 600,
        },
        {
          url: "http://localhost:3000/api/og?text='Blog - Abduvoitov Asadbek'&width=1800&height=1600",
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

export default function Blog() {
  return (
    <main className="w-full h-[100vh]">
      <AboutScreen />
    </main>
  );
}
