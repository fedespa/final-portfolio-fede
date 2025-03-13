"use client"
import { motion } from "framer-motion"
import Image from "next/image"

interface Technology {
  name: string
  icon: string
}

export default function TechSlider() {
  const technologies: Technology[] = [
    { name: "Node.js", icon: "/icons/node-icon.png" },
    { name: "TypeScript", icon: "/icons/typescript-icon.png" },
    { name: "JavaScript", icon: "/icons/javascript-icon.png" },
    { name: "HTML", icon: "/icons/html-icon.webp" },
    { name: "CSS", icon: "/icons/css-icon.svg" },
    { name: "PostgreSQL", icon: "/icons/postgresql-icon.png" },
  ]

  // Duplicate the array to create a seamless loop
  const duplicatedTech = [...technologies, ...technologies, ...technologies]

  return (
    <div className="relative mx-auto h-11 w-full max-w-[300px] overflow-hidden rounded-2xl">
      {/* Gradient fade on left */}
      <div className="pointer-events-none absolute left-0 z-10 h-full w-12 bg-gradient-to-r from-zinc-900 to-transparent" />

      {/* Gradient fade on right */}
      <div className="pointer-events-none absolute right-0 z-10 h-full w-12 bg-gradient-to-l from-zinc-900 to-transparent" />

      <motion.div
        className="flex h-10 items-center"
        animate={{
          x: [0, -1800],
        }}
        transition={{
          x: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {duplicatedTech.map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className="group mx-4 flex h-11 items-center"
          >
            <div className="flex h-7 w-7 p-1 items-center justify-center rounded-full bg-white/5">
              <Image
                src={tech.icon || "/placeholder.svg"}
                alt={tech.name}
                width={16}
                height={16}
                className="h-4 w-4 object-contain"
              />
            </div>
            <span className="ml-2 text-xs text-zinc-400">{tech.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

