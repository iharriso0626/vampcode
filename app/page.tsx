"use client";

import { useEffect, useRef, useState } from "react";
import { MotionConfig, motion } from "framer-motion";
import Image from "next/image";
import Logo from "../Images/Logo.svg";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import { PROFILE } from "./data/resume";

const NAV = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;

type SectionId = (typeof NAV)[number]["id"];

const isSectionId = (value: string): value is SectionId =>
  NAV.some((item) => item.id === value);

const PANELS: Record<SectionId, React.ReactNode> = {
  home: <Hero />,
  experience: <Experience />,
  skills: <Skills />,
  contact: <Contact />,
};

export default function Home() {
  const [section, setSection] = useState<SectionId>("home");
  const panelRef = useRef<HTMLElement>(null);

  // Sections are shareable as #experience / #skills / #contact. Applied after
  // mount so the prerendered HTML and the first client render still match.
  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash.slice(1);
      setSection(isSectionId(hash) ? hash : "home");
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  // Each panel is its own "page", so start it at the top rather than inheriting
  // the scroll position of the section the visitor just left.
  const goTo = (id: SectionId) => {
    setSection(id);
    const { pathname, search } = window.location;
    window.history.replaceState(
      null,
      "",
      id === "home" ? pathname + search : `#${id}`,
    );
    panelRef.current?.scrollTo({ top: 0 });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    // reducedMotion="user" honours the OS "reduce motion" setting — panels
    // still swap, they just skip the slide/fade.
    <MotionConfig reducedMotion="user">
    <div className="flex min-h-[100dvh] flex-col bg-ink text-white xl:h-[100dvh] xl:flex-row xl:overflow-hidden">
      {/* IDENTITY RAIL — a header when stacked, a fixed left column at xl.
          The split needs xl rather than lg: at ~1024px the 35% rail is too
          narrow to hold the nav on one row. */}
      <header className="shrink-0 px-6 pb-6 pt-8 sm:px-10 xl:flex xl:h-full xl:w-[35%] xl:flex-col xl:justify-center xl:px-12 xl:py-12">
        {/* Identity lockup — the V mark reads as a monogram beside the name
            rather than a floating tile above it. */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => goTo("home")}
            aria-label="Back to home"
            className="shrink-0 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blood"
          >
            <Image
              src={Logo}
              alt=""
              className="h-14 w-14 cursor-pointer transition-opacity hover:opacity-80 sm:h-16 sm:w-16"
            />
          </button>
          <div>
            <h1 className="text-2xl font-semibold uppercase tracking-wider sm:text-3xl">
              {PROFILE.name}
            </h1>
            <p className="mt-1 text-base text-blood-light sm:text-lg">
              {PROFILE.role}
            </p>
          </div>
        </div>

        <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70 sm:text-base">
          {PROFILE.tagline}
        </p>

        {/* NAVIGATION */}
        <nav className="mt-6 flex flex-wrap gap-2 sm:gap-3 xl:mt-8 xl:gap-2">
          {NAV.map(({ id, label }) => {
            const active = section === id;
            return (
              <button
                key={id}
                onClick={() => goTo(id)}
                aria-current={active ? "page" : undefined}
                className={`rounded-lg border px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blood sm:px-4 sm:text-base xl:px-3 xl:text-sm ${
                  active
                    ? "border-blood bg-blood text-white"
                    : "border-blood/50 bg-transparent text-white/80 hover:border-blood hover:bg-blood/20 hover:text-white"
                }`}
              >
                {label}
              </button>
            );
          })}
        </nav>
      </header>

      {/* CONTENT PANEL */}
      <main
        ref={panelRef}
        className="hide-scrollbar flex-1 overflow-y-auto px-6 pb-16 pt-4 sm:px-10 xl:h-full xl:w-[65%] xl:px-12 xl:py-16"
      >
        {/* Every panel stays mounted so the whole resume ships in the static
            HTML — search engines and AI crawlers that do not click the tabs
            still read all of it. Only the active panel is displayed. */}
        {NAV.map(({ id, label }) => {
          const active = section === id;
          return (
            <section key={id} hidden={!active} aria-label={label}>
              {active ? (
                <motion.div
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                >
                  {PANELS[id]}
                </motion.div>
              ) : (
                PANELS[id]
              )}
            </section>
          );
        })}
      </main>
    </div>
    </MotionConfig>
  );
}
