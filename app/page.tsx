import Image from "next/image";
import FloatingTechIcons from "./components/FloatingTechIcons";
import LeadForm from "./components/LeadForm";
import Reveal from "./components/Reveal";
import { dictionaries } from "./i18n/dictionaries";

const dict = dictionaries.fr;

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
          <span className="text-sm font-semibold tracking-tight sm:text-base">
            Karel Towanou
          </span>
          <nav className="hidden gap-8 text-sm text-zinc-400 sm:flex">
            <a href="#masterclass" className="hover:text-white">
              {dict.nav.masterclass}
            </a>
            <a href="#contact" className="hover:text-white">
              {dict.nav.benefits}
            </a>
            <a href="#faq" className="hover:text-white">
              {dict.nav.faq}
            </a>
            <a href="#apropos" className="hover:text-white">
              {dict.nav.about}
            </a>
          </nav>
          <a
            href="#contact"
            className="shrink-0 whitespace-nowrap rounded-full bg-emerald-500 px-3 py-2 text-xs font-medium text-black hover:bg-emerald-400 sm:px-4 sm:text-sm"
          >
            <span className="sm:hidden">{dict.nav.ctaShort}</span>
            <span className="hidden sm:inline">{dict.nav.cta}</span>
          </a>
        </div>
      </header>

      {/* 1. Hero — masterclass */}
      <section id="masterclass" className="relative overflow-hidden">
        <FloatingTechIcons />
        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-8 px-4 pb-8 pt-16 text-center sm:px-6 sm:pt-24">
          <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {dict.hero.titleBefore}
            <span className="text-emerald-400">{dict.hero.titleHighlight}</span>
            {dict.hero.titleAfter}
          </h1>
          <p className="max-w-2xl text-base text-zinc-400 sm:text-lg">
            <Emphasized text={dict.hero.subtitle} />
          </p>

          {/* Ce que tu vas tirer de la masterclass */}
          <div className="w-full max-w-3xl rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-left sm:p-7">
            <h2 className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-400">
              {dict.hero.takeawaysTitle}
            </h2>
            <ul className="mt-5 flex flex-col gap-3">
              {dict.hero.takeaways.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 text-emerald-400">✓</span>
                  <span className="text-sm leading-relaxed text-zinc-300 sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* La masterclass */}
          <div className="aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl shadow-emerald-500/10">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${dict.hero.videoId}`}
              title={dict.hero.videoTitle}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

        </div>
      </section>

      {/* 2. Les bénéfices de l'appel + formulaire */}
      <section
        id="contact"
        className="border-t border-white/10 bg-white/[0.02] pb-20 pt-10 sm:pb-24 sm:pt-12"
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
            <p className="text-zinc-400">{dict.contact.description}</p>
            <LeadForm dict={dict.form} />
          </div>
        </Reveal>
      </section>

      {/* 3. La FAQ */}
      <section id="faq">
        <Reveal className="mx-auto max-w-3xl px-6 py-20 sm:py-24">
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

      {/* 4. À propos */}
      <section
        id="apropos"
        className="border-t border-white/10 bg-white/[0.02] py-20 sm:py-24"
      >
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
      </footer>
    </div>
  );
}
