import { Link } from "react-router-dom";

export default function ProjectPage({
  title,
  subtitle,
  tech = [],
  problem,
  highlights = [],
  images = [],
  sourceUrl,
  sourceLabel = "View Source",
  year,
  role,
}:{
    title: string,
    subtitle?: string,
    tech?: string[],
    problem: string,
    highlights?: { title?: string, description: string }[],
    images?: { src: string, alt?: string, caption?: string }[],
    sourceUrl?: string,
    sourceLabel?: string,
    year?: string,
    role?: string,
}) {
  return (
    <main className="min-h-screen bg-[#7e2a0c] px-6 py-12 text-[#fffbeb] md:px-12">
      {/* Back navigation */}
      <Link
        to="/projects"
        className="
          inline-block
          text-sm uppercase tracking-[0.2em]
          opacity-60
          transition-opacity duration-300
          hover:opacity-100
        "
      >
        ← Projects
      </Link>

      <div className="mx-auto mt-16 max-w-5xl">
        {/* Header */}
        <header className="border-b border-[#fffbeb]/40 pb-10">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] opacity-60">
            Selected Project
          </p>

          <h1 className="max-w-4xl text-left text-5xl font-semibold tracking-tight md:text-7xl">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-5 max-w-2xl text-left text-lg leading-relaxed opacity-70">
              {subtitle}
            </p>
          )}

          <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4 text-left text-sm">
            {year && (
              <div>
                <p className="text-xs uppercase tracking-[0.2em] opacity-50">
                  Year
                </p>
                <p className="mt-1">{year}</p>
              </div>
            )}

            {role && (
              <div>
                <p className="text-xs uppercase tracking-[0.2em] opacity-50">
                  Role
                </p>
                <p className="mt-1">{role}</p>
              </div>
            )}

            {tech.length > 0 && (
              <div>
                <p className="text-xs uppercase tracking-[0.2em] opacity-50">
                  Tech
                </p>

                <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1">
                  {tech.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Problem */}
        <section className="grid gap-6 border-b border-[#fffbeb]/40 py-12 md:grid-cols-[220px_1fr]">
          <h2 className="text-left text-sm uppercase tracking-[0.25em] opacity-60">
            The Problem
          </h2>

          <div className="max-w-3xl text-left text-lg leading-8">
            {problem}
          </div>
        </section>

        {/* Technical highlights */}
        {highlights.length > 0 && (
          <section className="grid gap-6 border-b border-[#fffbeb]/40 py-12 md:grid-cols-[220px_1fr]">
            <h2 className="text-left text-sm uppercase tracking-[0.25em] opacity-60">
              Technical Highlights
            </h2>

            <div className="space-y-8">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="border-b border-[#fffbeb]/20 pb-8 last:border-none"
                >
                  {highlight.title && (
                    <h3 className="text-left text-2xl font-medium">
                      {highlight.title}
                    </h3>
                  )}

                  <p className="mt-3 max-w-3xl text-left leading-7 opacity-75">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Optional media */}
        {images.length > 0 && (
          <section className="border-b border-[#fffbeb]/40 py-12">
            <p className="mb-6 text-left text-sm uppercase tracking-[0.25em] opacity-60">
              Project Media
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              {images.map((image, index) => (
                <figure
                  key={index}
                  className="overflow-hidden rounded-[2rem] bg-[#fffbeb]/10"
                >
                  <img
                    src={image.src}
                    alt={image.alt || ""}
                    className="h-full w-full object-cover"
                  />

                  {image.caption && (
                    <figcaption className="px-4 py-3 text-left text-sm opacity-60">
                      {image.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </section>
        )}

        {/* Optional source */}
        {sourceUrl && (
          <section className="py-12">
            <a
              href={sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex items-center gap-3
                rounded-full
                border-2 border-[#fffbeb]
                px-6 py-3
                text-sm uppercase tracking-[0.2em]
                transition-colors duration-300
                hover:bg-[#fffbeb]
                hover:text-[#7e2a0c]
              "
            >
              {sourceLabel}
              <span>↗</span>
            </a>
          </section>
        )}
      </div>
    </main>
  );
}