import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import LanguageSwitcher from "@/components/language-switcher";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fede | Full-Stack Developer",
  description:
    "Portfolio of Fede, a full-stack developer specializing in modern web technologies",
};

export default async function LangLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const awaitParams = await params;
  const { lang } = awaitParams;

  const finalLang = lang === "en" ? "en" : "es";

  return (
    <html lang={finalLang} className="scroll-smooth">
      <body className={inter.className}>
        <LanguageSwitcher
          initialLanguage={finalLang.toUpperCase() as "ES" | "EN"}
        />
        {children}
      </body>
    </html>
  );
}
