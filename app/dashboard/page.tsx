import AboutScreen from "@/components/screens/about";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description:
    "Software Engineer - you may see statistics of my channels, github, and others...",
  alternates: {
    canonical: `/dashboard`,
  },
};

export default function Dashboard() {
  return (
    <>
      <main className="w-full h-[100vh]">
        <AboutScreen />
      </main>
    </>
  );
}
