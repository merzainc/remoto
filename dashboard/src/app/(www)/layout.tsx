import type { Metadata } from "next";
import "@/styles/fonts.css";
import "@/styles/main.css";

import NavBar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Remoto",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en_UK" className="antialiased" suppressHydrationWarning={true}>
      <body className="text-slate-500 bg-white" suppressHydrationWarning={true}>
        <div className="isolate">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}