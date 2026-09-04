

import TopLeftMenu from "../components/TopLeftMenu";
import { Link } from "react-router-dom";
import { projects } from "../components/projects";

export default function Projects() {

    

  return (
    <main className="min-h-screen bg-orange-900 text-amber-50 border-8 border-amber-50 px-6 py-16 md:px-12">
      
      <TopLeftMenu items={[
        { message: "Home", link: "/" },
        { message: "About", link: "/about" }
      ]}
      side="top-left"
      ></TopLeftMenu>

        
      
        <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-5xl flex-col justify-center">

        {/* Heading */}
        <div className="mb-10 flex items-end justify-between border-b border-[#fffbeb]/40 pb-5">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.3em] opacity-60">
              Selected Work
            </p>

            <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
              Projects
            </h1>
          </div>

          <span className="hidden text-sm opacity-50 md:block">
            {String(projects.length).padStart(2, "0")} projects
          </span>
        </div>

        {/* Project list */}
        <div>
          {projects.map((project, index) => (
            <Link
              key={project.title}
              to={project.path}
              className="
                group
                relative
                flex items-center justify-between
                border-b border-[#fffbeb]/40
                py-7
                transition-all duration-300
                hover:px-5
                hover:bg-[#fffbeb]
                hover:text-[#7e2a0c]
                md:py-9
              "
            >
              <div className="flex min-w-0 items-center gap-5 md:gap-10">
                <span className="w-6 shrink-0 text-xs opacity-50">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="text-left">
                  <h2
                    className="
                      text-3xl font-medium tracking-tight
                      transition-transform duration-300
                      group-hover:translate-x-1
                      md:text-5xl
                    "
                  >
                    {project.title}
                  </h2>

                  <p className="mt-2 text-sm opacity-60">
                    {project.category}
                  </p>
                </div>
              </div>

              <div className="ml-4 flex shrink-0 items-center gap-6">
                <span className="hidden text-sm opacity-50 sm:block">
                  {project.year}
                </span>

                <span
                  className="
                    text-2xl
                    transition-transform duration-300
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}