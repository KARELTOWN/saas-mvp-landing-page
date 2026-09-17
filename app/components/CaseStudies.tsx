"use client";

import Image from "next/image";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { Dictionary } from "../i18n/dictionaries";

type Project = Dictionary["projects"]["items"][number];

function renderDescription(description: string): ReactNode[] {
  return description.split("\n\n").map((block, index) => {
    const lines = block.split("\n");
    const firstLine = lines[0];

    if (lines.every((line) => line.startsWith("- "))) {
      return (
        <ul key={`${firstLine}-${index}`} className="list-disc space-y-2 pl-5">
          {lines.map((line) => (
            <li key={line}>{line.slice(2)}</li>
          ))}
        </ul>
      );
    }

    if (firstLine.startsWith("### ")) {
      return (
        <h4
          key={`${firstLine}-${index}`}
          className="pt-2 text-lg font-semibold text-emerald-300"
        >
          {firstLine.slice(4)}
        </h4>
      );
    }

    if (firstLine.startsWith("## ")) {
      return (
        <h4
          key={`${firstLine}-${index}`}
          className="pt-3 text-xl font-semibold text-emerald-300"
        >
          {firstLine.slice(3)}
        </h4>
      );
    }
    if (firstLine.startsWith("> ")) {
      return (
        <blockquote
          key={`${firstLine}-${index}`}
          className="border-l-2 border-emerald-400 pl-5 text-lg italic text-white"
        >
          {firstLine.slice(2)}
        </blockquote>
      );
    }

    if (
      firstLine.startsWith(
        "Rendre le transfert de fichiers aussi simple qu’un email",
      )
    ) {
      return (
        <blockquote
          key={`${firstLine}-${index}`}
          className="border-l-2 border-emerald-400 pl-5 text-lg italic text-white"
        >
          {firstLine}
        </blockquote>
      );
    }

    return (
      <p key={`${firstLine}-${index}`}>
        {lines.map((line, lineIndex) => (
          <span key={`${line}-${lineIndex}`}>
            {line}
            {lineIndex < lines.length - 1 && <br />}
          </span>
        ))}
      </p>
    );
  });
}

export default function CaseStudies({
  dict,
}: {
  dict: Dictionary["projects"];
}) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedProject(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {dict.items.map((project) => (
          <button
            key={project.name}
            type="button"
            onClick={() => setSelectedProject(project)}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] text-left transition-colors hover:border-emerald-400/50 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          >
            <div className="relative aspect-video w-full overflow-hidden border-b border-white/10 bg-zinc-900">
              <Image
                src={project.image}
                alt={project.name}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-medium text-white">{project.name}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                {project.summary}
              </p>
              <span className="mt-4 inline-flex text-sm font-medium text-emerald-400">
                {dict.detailsLabel} →
              </span>
            </div>
          </button>
        ))}
      </div>

      {typeof document !== "undefined" && selectedProject
        ? createPortal(
            <div
              role="presentation"
              className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
              onMouseDown={(event) => {
                if (event.target === event.currentTarget)
                  setSelectedProject(null);
              }}
            >
              <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="case-study-title"
                className="max-h-[calc(100vh-2rem)] w-full max-w-3xl overflow-y-auto rounded-2xl border border-white/10 bg-[#101214] p-6 shadow-2xl sm:p-8"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
                      {dict.modalEyebrow}
                    </p>
                    <h3
                      id="case-study-title"
                      className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl"
                    >
                      {selectedProject.name}
                    </h3>
                  </div>
                  <button
                    type="button"
                    aria-label={dict.closeLabel}
                    onClick={() => setSelectedProject(null)}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-xl text-zinc-400 hover:border-white/30 hover:text-white"
                  >
                    ×
                  </button>
                </div>

                <div className="mt-6 space-y-5 leading-7 text-zinc-300">
                  {renderDescription(selectedProject.description)}
                </div>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-zinc-400">
                    {dict.stackLabel}
                  </h4>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {selectedProject.stack.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5 text-sm text-emerald-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedProject.links?.length || selectedProject.url ? (
                  <div className="mt-8 flex flex-wrap gap-3">
                    {(selectedProject.links?.length
                      ? selectedProject.links
                      : [
                          {
                            label: dict.projectLinkLabel,
                            url: selectedProject.url,
                          },
                        ]
                    ).map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex rounded-full bg-emerald-500 px-5 py-3 font-medium text-black hover:bg-emerald-400"
                      >
                        {link.label} ↗
                      </a>
                    ))}
                  </div>
                ) : (
                  <span className="mt-8 inline-flex rounded-full border border-white/10 px-5 py-3 text-sm text-zinc-500">
                    {dict.linkUnavailableLabel}
                  </span>
                )}
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
