import { DashboardMatricType } from "@/@types";
import DashboardScreen from "@/components/screens/dashboard";
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
    url: "https://abduvoitov.vercel.app/api/og?text='Dashboard - Abduvoitov Asadbek'",
    siteName: "https://abduvoitov.com/dashboard",
    images: [
      {
        url: "https://abduvoitov.vercel.app/api/og?text='Dashboard - Abduvoitov Asadbek'&width=800&height=600",
        width: 800,
        height: 600,
      },
      {
        url: "https://abduvoitov.vercel.app/api/og?text='Dashboard - Abduvoitov Asadbek'&width=1800&height=1600",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

async function fetcher() {
  const fileInfo = await import("../api/dashboard/route");
  const res = await fileInfo.GET();
  const data = await res.json();

  return data;
}

export default async function Dashboard() {
  const data: DashboardMatricType = await fetcher();

  return (
    <>
      <main className="w-full h-[100vh]">
        <DashboardScreen {...data} />
      </main>
    </>
  );
}
