import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PlagiarismCheck — Detect Copied Coding Test Submissions",
  description: "Analyze candidate coding test submissions against GitHub, Stack Overflow, and common solutions to detect plagiarism instantly."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="407b4b86-9dc7-4331-9104-4ba5c206478e"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
