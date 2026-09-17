import Image from "next/image";
import CaseStudies from "./components/CaseStudies";
import FloatingTechIcons from "./components/FloatingTechIcons";
import LeadForm from "./components/LeadForm";
import Reveal from "./components/Reveal";
import { dictionaries } from "./i18n/dictionaries";

const dict = dictionaries.fr;

function Stars({ rating }: { rating: number }) {
  return (
    <span className="text-amber-400" aria-label={`${rating} sur 5 étoiles`}>
      {"★".repeat(rating)}
      <span className="text-zinc-700">{"★".repeat(5 - rating)}</span>
    </span>
  );
}

function Emphasized({ text }: { text: string }) {
  const parts = text.split(/(==[^=]+==|~~[^~]+~~)/g);
  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("==") && part.endsWith("==")) {
          return (
            <mark
              key={index}
              className="rounded bg-emerald-400/10 px-1 py-0.5 font-medium text-emerald-300 underline decoration-emerald-400/40 underline-offset-4"
            >
              {part.slice(2, -2)}
            </mark>
          );
        }
        if (part.startsWith("~~") && part.endsWith("~~")) {
          return (
            <mark
              key={index}
              className="rounded bg-rose-400/10 px-1 py-0.5 font-medium text-rose-300 underline decoration-rose-400/40 underline-offset-4"
            >
              {part.slice(2, -2)}
            </mark>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#07080a] text-zinc-100">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07080a]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="font-semibold tracking-tight">Karel Towanou</span>
          <nav className="hidden gap-8 text-sm text-zinc-400 sm:flex">
            <a href="#solution" className="hover:text-white">
              {dict.nav.solution}
            </a>
            <a href="#process" className="hover:text-white">
              {dict.nav.process}
            </a>
            <a href="#prix" className="hover:text-white">
              {dict.nav.pricing}
            </a>
            <a href="#faq" className="hover:text-white">
              {dict.nav.faq}
            </a>
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-medium text-black hover:bg-emerald-400"
          >
            {dict.nav.cta}
          </a>
        </div>
      </header>

      {/* 1. Offre — Hero */}
      <section className="relative overflow-hidden">
        <FloatingTechIcons />
        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 pb-20 pt-24 text-center">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            {dict.hero.titleBefore}
            <span className="text-emerald-400">{dict.hero.titleHighlight}</span>
            {dict.hero.titleAfter}
          </h1>
          <p className="max-w-2xl text-lg text-zinc-400">
            <Emphasized text={dict.hero.subtitle} />
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="rounded-full bg-emerald-500 px-6 py-3 font-medium text-black hover:bg-emerald-400"
            >
              {dict.hero.ctaPrimary}
            </a>
            <a
              href="#process"
              className="rounded-full border border-white/15 px-6 py-3 font-medium text-zinc-300 hover:bg-white/5"
            >
              {dict.hero.ctaSecondary}
            </a>
          </div>
          <p className="text-xs text-zinc-500">{dict.hero.note}</p>
        </div>
      </section>

      {/* 2. Les problèmes */}
      <section id="probleme">
        <Reveal className="mx-auto max-w-4xl px-6 py-24">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {dict.problems.title}
          </h2>
          <div className="mt-10 flex flex-col gap-4">
            {dict.problems.items.map((problem) => (
              <div
                key={problem}
                className="rounded-xl border border-white/10 bg-white/[0.02] p-5 text-zinc-300"
              >
                {problem}
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 3. Le déclic */}
      <section className="border-t border-white/10 bg-white/[0.02] py-24">
        <Reveal className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {dict.declic.title}
          </h2>
          <div className="mt-8 flex flex-col gap-6 text-zinc-300">
            <p>
              <Emphasized text={dict.declic.intro} />
            </p>
            <p className="text-lg font-medium text-white">{dict.declic.beat}</p>
            <p>
              <Emphasized text={dict.declic.costIntro} />
            </p>
            <ul className="flex flex-col gap-2">
              {dict.declic.costBullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2">
                  <span className="mt-1 text-emerald-400">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <p>
              <Emphasized text={dict.declic.costClosing} />
            </p>
            <p>
              <Emphasized text={dict.declic.risk} />
            </p>
            <p className="text-zinc-400">{dict.declic.credibility}</p>
            <p className="text-lg font-medium text-white">
              <Emphasized text={dict.declic.hook} />
            </p>
            <p>
              <Emphasized text={dict.declic.team} />
            </p>
            <p>
              <Emphasized text={dict.declic.insight} />
            </p>
            <p>
              <Emphasized text={dict.declic.contrast} />
            </p>
            <p className="font-medium text-white">{dict.declic.methodIntro}</p>
          </div>
          <div className="mt-6 rounded-xl border-l-4 border-emerald-400 bg-white/[0.03] p-5 text-zinc-200">
            <Emphasized text={dict.declic.method} />
          </div>
          <div className="mt-10 rounded-2xl border border-emerald-400/30 bg-emerald-400/5 p-6 text-center">
            <p className="text-xl font-semibold text-emerald-400 sm:text-2xl">
              {dict.declic.closing}
            </p>
          </div>
        </Reveal>
      </section>

      {/* 4. La solution */}
      <section id="solution">
        <Reveal className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {dict.solution.title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
            {dict.solution.description}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {[
              "Vue.js | Nuxt",
              "React",
              "TypeScript",
              "Tailwind CSS",
              "Directus",
              "Typesense",
              "Laravel",
              "Node.js | Express.js | Nest.js",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 5. La situation visée */}
      <section className="border-t border-white/10 bg-white/[0.02] py-24">
        <Reveal className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {dict.situation.title}
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {dict.situation.items.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-white/10 p-5 text-zinc-300"
              >
                <span className="mt-1 text-emerald-400">→</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 6. Les détails */}
      <section id="process">
        <Reveal className="mx-auto max-w-5xl px-6 py-24">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {dict.process.title}
          </h2>
          <p className="mt-3 max-w-2xl text-zinc-400">
            {dict.process.subtitle}
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {dict.process.phases.map((phase) => (
              <div
                key={phase.title}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
              >
                <span className="text-xs font-medium uppercase tracking-wide text-emerald-400">
                  {phase.duration}
                </span>
                <h3 className="mt-2 text-xl font-medium">{phase.title}</h3>
                <p className="mt-2 text-sm text-zinc-400">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Études de cas */}
      <section className="border-t border-white/10 bg-white/[0.02] py-24">
        <Reveal className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {dict.projects.title}
          </h2>
          <p className="mt-3 max-w-2xl text-zinc-400">
            {dict.projects.subtitle}
          </p>
          <CaseStudies dict={dict.projects} />
        </Reveal>
      </section>

      {/* 7. L'investissement */}
      <section
        id="prix"
        className="border-t border-white/10 bg-white/[0.02] py-24"
      >
        <Reveal className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {dict.pricing.title}
          </h2>
          <div className="mx-auto mt-6 inline-flex rounded-3xl border border-emerald-400/30 bg-emerald-400/5 px-10 py-6 sm:px-14 sm:py-8">
            <span className="text-6xl font-bold tracking-tight text-emerald-400 sm:text-7xl">
              {dict.pricing.priceLabel}
            </span>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-zinc-400">
            {dict.pricing.description}
          </p>
          <div className="mt-10 grid gap-4 text-left sm:grid-cols-3">
            {dict.pricing.bullets.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/10 p-4 text-sm text-zinc-300"
              >
                {item}
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 8. Les bonus */}
      <section>
        <Reveal className="mx-auto max-w-5xl px-6 py-24">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {dict.bonuses.title}
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {dict.bonuses.items.map((bonus) => (
              <div
                key={bonus.title}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
              >
                <h3 className="text-lg font-medium text-emerald-400">
                  {bonus.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-400">
                  {bonus.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 9. La garantie */}
      <section className="border-t border-white/10 bg-white/[0.02] py-24">
        <Reveal className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {dict.guarantee.title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-medium text-emerald-400">
            {dict.guarantee.lead}
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-300">
            {dict.guarantee.detail}
          </p>
        </Reveal>
      </section>

      {/* 10. La FAQ */}
      <section id="faq">
        <Reveal className="mx-auto max-w-3xl px-6 py-24">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {dict.faqSection.title}
          </h2>
          <div className="mt-10 flex flex-col gap-4">
            {dict.faqSection.items.map((item) => (
              <div
                key={item.question}
                className="rounded-xl border border-white/10 bg-white/[0.02] p-5"
              >
                <h3 className="font-medium text-white">{item.question}</h3>
                <p className="mt-2 text-sm text-zinc-400">{item.answer}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 11. La procédure d'achat + formulaire */}
      <section
        id="contact"
        className="border-t border-white/10 bg-white/[0.02] py-24"
      >
        <Reveal className="mx-auto grid max-w-5xl gap-12 px-6 sm:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {dict.contact.procedureTitle}
            </h2>
            <ol className="mt-8 flex flex-col gap-5">
              {dict.contact.procedure.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-sm font-semibold text-black">
                    {index + 1}
                  </span>
                  <span className="text-zinc-300">{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <h3 className="text-xl font-medium">{dict.contact.title}</h3>
            <p className="text-zinc-400">{dict.contact.description}</p>
            <LeadForm dict={dict.form} />
          </div>
        </Reveal>
      </section>

      {/* 12. Les témoignages */}
      <section>
        <Reveal className="mx-auto max-w-5xl px-6 py-24">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {dict.testimonials.title}
          </h2>
          <p className="mt-3 max-w-2xl text-zinc-400">
            {dict.testimonials.subtitle}
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dict.testimonials.items.map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
              >
                <Stars rating={testimonial.rating} />
                {testimonial.quote && (
                  <p className="mt-3 text-zinc-300">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                )}
                <p className="mt-4 text-sm text-zinc-500">
                  {testimonial.name} · {testimonial.date}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 13. À propos */}
      <section className="border-t border-white/10 bg-white/[0.02] py-24">
        <Reveal className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {dict.about.title}
          </h2>
          <div className="mt-8 flex flex-col gap-8 sm:flex-row sm:items-start">
            <Image
              src="/profile-karel.jpg"
              alt="Karel Towanou"
              width={384}
              height={384}
              priority
              className="h-64 w-64 shrink-0 rounded-2xl border border-white/10 object-cover object-top sm:h-80 sm:w-80"
            />
            <div className="flex flex-col gap-6 text-zinc-300">
              <p className="text-lg font-medium text-white">
                {dict.about.intro}
              </p>
              <p>{dict.about.trackRecordLead}</p>
              <div className="flex flex-col gap-2">
                {dict.about.trackRecordItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2 rounded-lg border border-white/10 bg-white/[0.02] px-4 py-2.5 text-sm text-zinc-300"
                  >
                    <span className="mt-0.5 text-emerald-400">→</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-6 text-zinc-300">
            <p>
              <Emphasized text={dict.about.trackRecordClosing} />
            </p>
            <p>
              <Emphasized text={dict.about.today} />
            </p>
            <p className="text-lg font-medium text-white">
              {dict.about.pivotQuestion}
            </p>
            <p>
              <Emphasized text={dict.about.pivotAnswer} />
            </p>
            <p className="text-lg font-medium text-white">
              {dict.about.forYouHeading}
            </p>
            <p>
              <Emphasized text={dict.about.forYouAnswer} />
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-emerald-400/30 bg-emerald-400/5 p-6 text-center">
            <p className="text-xl font-semibold text-emerald-400 sm:text-2xl">
              {dict.about.closing}
            </p>
          </div>

          <a
            href="#contact"
            className="mt-8 inline-block rounded-full bg-emerald-500 px-6 py-3 font-medium text-black hover:bg-emerald-400"
          >
            {dict.about.cta}
          </a>
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 text-center text-sm text-zinc-500">
        <p>{dict.footer.line}</p>
        <p className="mt-1 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:towanoukarel@gmail.com"
            className="hover:text-zinc-300"
          >
            towanoukarel@gmail.com
          </a>
          <span className="text-zinc-700">·</span>
          <a
            href="https://www.linkedin.com/in/karel-towanou-7602bb266/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-300"
          >
            {dict.footer.linkedin}
          </a>
        </p>
      </footer>
    </div>
  );
}
