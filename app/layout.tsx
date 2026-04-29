import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://michaelmitchell.tech"),
  title: "Michael Mitchell | ServiceNow Developer & Workday Administrator",
  description:
    "Senior integrations engineer with 12 years of experience across ServiceNow, Workday, and the messy middle in between. Available for consulting and contract engagements.",
  openGraph: {
    title: "Michael Mitchell | ServiceNow Developer & Workday Administrator",
    description:
      "Senior integrations engineer with 12 years of experience across ServiceNow, Workday, and the messy middle in between.",
    type: "website",
    url: "https://michaelmitchell.tech",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
