"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Code, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import TechSlider from "@/components/tech-slider";

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
//   const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <main className="flex min-h-screen flex-col items-center bg-black text-white">
      {/* Hero Section */}
      <section
        ref={ref}
        className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, rgba(16, 16, 32, 0.8) 0%, rgba(0, 0, 0, 1) 100%)",
            y: backgroundY,
          }}
        />

        <div className="absolute inset-0 z-10 bg-grid-white/[0.02] bg-[length:50px_50px]" />

        <div className="container relative z-20 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-block rounded-full border border-white/10 bg-white/5 p-2 backdrop-blur-sm"
            >
              <div className="rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 p-px">
                <div className="rounded-full bg-black p-2">
                  <Code className="h-6 w-6 text-white" />
                </div>
              </div>
            </motion.div>

            <motion.h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block">Hi, I&apos;m </span>
              <span className="mt-2 block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Fede
              </span>
            </motion.h1>

            <motion.p
              className="mx-auto mb-8 max-w-lg text-lg text-zinc-400 sm:text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Full-stack developer specializing in modern web technologies
            </motion.p>

            <motion.div
              className="flex justify-center space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                href="https://github.com"
                target="_blank"
                className="rounded-full bg-white/10 p-3 transition-colors hover:bg-white/20"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="rounded-full bg-white/10 p-3 transition-colors hover:bg-white/20"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="rounded-full bg-white/10 p-3 transition-colors hover:bg-white/20"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            repeatDelay: 0.2,
          }}
        >
          <ArrowDown className="h-6 w-6 text-white/60" />
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="w-full py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-zinc-400">
              A showcase of my recent work using cutting-edge technologies
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-1 backdrop-blur-sm"
              >
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative z-10 flex h-full flex-col rounded-lg bg-black p-6">
                  <div className="mb-4 flex-1">
                    <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                    <p className="text-sm text-zinc-400">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-4">
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-white/10 px-3 py-1 text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      className="inline-flex items-center text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300"
                    >
                      View Project
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-1 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="w-full bg-gradient-to-b from-black to-zinc-900 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Technologies
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-zinc-400">
              The tools and frameworks I use to bring ideas to life
            </p>
          </motion.div>

          <div className="mb-16">
            <TechSlider />
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <div className="mb-4 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 p-4">
                  <Image
                    src={tech.icon || "/placeholder.svg"}
                    alt={tech.name}
                    width={48}
                    height={48}
                    className="h-12 w-12 object-center object-contain"
                  />
                </div>
                <h3 className="mb-2 text-xl font-bold">{tech.name}</h3>
                <p className="text-center text-sm text-zinc-400">
                  {tech.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-white/10 bg-black py-8">
        <div className="container mx-auto px-4 text-center text-zinc-500">
          <p>© {new Date().getFullYear()} Fede. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

// Sample data
const projects = [
  {
    id: 1,
    title: "Gym Website",
    description:
      "A modern and dynamic website for a gym, featuring class schedules, membership plans, and a blog for fitness tips.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "https://gym-web-mauve.vercel.app/", // Reemplázalo con el enlace real
  },
  {
    id: 2,
    title: "Personal Portfolio",
    description:
      "A sleek and interactive personal portfolio showcasing my projects, skills, and experience as a web developer.",
    technologies: ["Next.js", "React", "Framer Motion", "TypeScript"],
    link: "https://portfolio-personal-eight-lemon.vercel.app/", // Reemplázalo con el enlace real
  },
];


const technologies = [
  {
    name: "Next.js",
    icon: "/icons/nextjs-icon.png",
    description:
      "React framework for production-grade applications with server-side rendering and static site generation.",
  },
  {
    name: "React",
    icon: "/icons/react-icon.png",
    description:
      "JavaScript library for building user interfaces with reusable components.",
  },
  {
    name: "TypeScript",
    icon: "/icons/typescript-icon.png",
    description:
      "Strongly typed programming language that builds on JavaScript for better tooling.",
  },
  {
    name: "Tailwind CSS",
    icon: "/icons/tailwind-icon.png",
    description:
      "Utility-first CSS framework for rapidly building custom user interfaces.",
  },
  {
    name: "Node.js",
    icon: "/icons/node-icon.png",
    description:
      "JavaScript runtime built on Chrome's V8 JavaScript engine for server-side applications.",
  },
  {
    name: "Framer Motion",
    icon: "/icons/framer-motion-icon.png",
    description:
      "Production-ready motion library for React to create fluid animations.",
  },
];

