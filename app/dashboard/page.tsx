import AboutScreen from "@/components/screens/about";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description:
    "Software Engineer - you may see statistics of my channels, github, and others...",
  alternates: {
    canonical: `/dashboard`,
  },
  openGraph: {
    title: "Dashboard - Abduvoitov Asadbek",
    description:
      "Software Engineer - you may see statistics of my channels, github, and others...",
    url: "http://localhost:3000/api/og?text='Dashboard - Abduvoitov Asadbek'",
    siteName: "abduvoitov.com/dashboard",
    images: [
      {
        url: "http://localhost:3000/api/og?text='Dashboard - Abduvoitov Asadbek'&width=800&height=600",
        width: 800,
        height: 600,
      },
      {
        url: "http://localhost:3000/api/og?text='Dashboard - Abduvoitov Asadbek'&width=1800&height=1600",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
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
