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
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
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
