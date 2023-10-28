import AboutScreen from "@/components/screens/about";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Software Engineer - You may find bunch of information about myself.",
  alternates: {
    canonical: `/about`,
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
