import AboutScreen from "@/components/screens/about";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Software Engineer - Developed and delivered technical training sessions for non-technical stakeholders, improving understanding and adoption of new software systems throughout the company.",
  alternates: {
    canonical: `/resume`,
  },
};

export default function Resume() {
  return (
    <>
      <main className="w-full h-[100vh]">
        <AboutScreen />
      </main>
    </>
  );
}
