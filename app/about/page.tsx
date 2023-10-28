import AboutScreen from "@/components/screens/about";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Software Engineer - You may find bunch of information about myself.",
  alternates: {
    canonical: `/about`,
  },
  openGraph: {
    title: "About - Abduvoitov Asadbek",
    description:
      "Software Engineer - You may find bunch of information about myself.",
    url: "http://localhost:3000/api/og?text='About - Abduvoitov Asadbek'",
    siteName: "abduvoitov.com/about",
    images: [
      {
        url: "http://localhost:3000/api/og?text='About - Abduvoitov Asadbek'&width=800&height=600",
        width: 800,
        height: 600,
      },
      {
        url: "http://localhost:3000/api/og?text='About - Abduvoitov Asadbek'&width=1800&height=1600",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function About() {
  return (
    <>
      <main className="w-full h-[100vh]">
        <AboutScreen />
      </main>
    </>
  );
}
