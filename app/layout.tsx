import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Discord Standup Automator – Auto-generate standup summaries from Discord activity",
  description: "Scans Discord channels for code commits, messages, and activity to auto-generate daily standup reports for remote dev teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="fa8d041c-f841-4401-b8b6-46840057feaa"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
