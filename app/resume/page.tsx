import AboutScreen from "@/components/screens/about";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Software Engineer - Developed and delivered technical training sessions for non-technical stakeholders, improving understanding and adoption of new software systems throughout the company.",
  alternates: {
    canonical: `/resume`,
  },
  openGraph: {
    title: "Resume - Abduvoitov Asadbek",
    description:
      "Software Engineer - Developed and delivered technical training sessions for non-technical stakeholders, improving understanding and adoption of new software systems throughout the company.",
    url: "https://abduvoitov.vercel.app/api/og?text='Resume - Abduvoitov Asadbek'",
    siteName: "abduvoitov.com/resume",
    images: [
      {
        url: "https://abduvoitov.vercel.app/api/og?text='Resume - Abduvoitov Asadbek'&width=800&height=600",
        width: 800,
        height: 600,
      },
      {
        url: "https://abduvoitov.vercel.app/api/og?text='Resume - Abduvoitov Asadbek'&width=1800&height=1600",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
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
