'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Props {
  initialLanguage: "ES" | "EN";
}

export default function LanguageSwitcher({ initialLanguage } : Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(initialLanguage);

  const languages: { code: "ES" | "EN", label: string, flag: string, href: string}[] = [
    { code: "EN", label: "English", flag: "https://flagcdn.com/h20/us.png", href: "/en" },
    { code: "ES", label: "Español", flag: "https://flagcdn.com/h20/es.png", href: "/es" },
    // podés agregar más: FR, DE, etc.
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (lang: { code: "ES" | "EN", label: string, flag: string, href: string }) => {
    setSelectedLanguage(lang.code);
    setIsOpen(false);
    // Aquí podrías agregar lógica para cambiar el idioma en la app
  };

  const currentLang = languages.find((lang) => lang.code === selectedLanguage);

  return (
    <div className="absolute top-6 right-12 z-50 text-white max-lg:right-8 max-md:right-4">
      {/* Botón principal */}
      <button
        onClick={toggleDropdown}
        className="px-4 py-2 rounded shadow hover:bg-black/90 transition flex items-center space-x-2 text-white bg-black hover:scale-105 hover:border"
      >
        <Image
          src={currentLang!.flag}
          alt={currentLang!.code}
          width={26}
          height={26}
          className="object-cover rounded-sm"
        />
      </button>

      {/* Dropdown animado */}
      <div
        className={`mt-2 bg-black border rounded shadow-md overflow-hidden transform transition-all duration-200 origin-top-right ${
          isOpen
            ? "scale-100 opacity-100"
            : "scale-95 opacity-0 pointer-events-none"
        }`}
      >
        {languages.map((lang) => (
          <Link
            href={lang.href}
            key={lang.code}
            onClick={() => selectLanguage(lang)}
            className={`flex items-center w-full px-4 py-2 text-left space-x-2 hover:bg-zinc-800 duration-200 ${
              lang.code === selectedLanguage ? "bg-cyan-500 font-semibold" : ""
            }`}
          >
            <Image
              src={lang.flag}
              alt={lang.code}
              width={24}
              height={24}
              className="object-cover rounded-sm"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
