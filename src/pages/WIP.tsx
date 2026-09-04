import { Link } from "react-router-dom";
import TopCornerMenu from "../components/TopLeftMenu";

export default function WorkInProgress() {
  return (
    <main className="min-h-screen bg-[#7e2a0c] px-6 py-12 text-[#fffbeb] md:px-12">
      {/* Back navigation */}
      <TopCornerMenu
        items={[
          { message: "Home", link: "/" },
          { message: "Projects", link: "/projects" },
        ]}
        side="top-left"
      ></TopCornerMenu>

      <div className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-5xl items-center">
        <div className="w-full">
          <div className="border-b border-[#fffbeb]/40 pb-8">
            <p className="mb-3 text-left text-xs uppercase tracking-[0.3em] opacity-60">
              Work in Progress
            </p>

            <h1 className="max-w-4xl text-left text-5xl font-semibold tracking-tight md:text-7xl">
              This page is still being built.
            </h1>
          </div>

          <div className="grid gap-8 border-b border-[#fffbeb]/40 py-10 md:grid-cols-[220px_1fr]">
            <p className="text-left text-sm uppercase tracking-[0.25em] opacity-60">
              Status
            </p>

            <div className="max-w-2xl text-left">
              <p className="text-lg leading-8 opacity-80">
                I’m currently refining the content, layout, and project details
                for this section.
              </p>

              <p className="mt-4 leading-7 opacity-60">
                Check back soon for the completed version.
              </p>
            </div>
          </div>
        </div>
      </div>


    </main>
  );
}