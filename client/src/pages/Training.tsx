/*
Design philosophy: VSL training landing page. After the hero, prospects see what's
inside the program (4 pillars), a primary CTA, an accordion FAQ that pre-empts common
objections, a repeat CTA, and case study video proof. Same KST gold branding throughout.
*/
import { useEffect, useRef, useState } from "react";

const VIDEO_LINKS = {
  sajib: "https://www.youtube.com/watch?v=Wpvz6uusSZY",
  fatima: "https://www.youtube.com/watch?v=Dg3qBjnz9uo",
  mobin: "https://www.youtube.com/watch?v=CxMD9RkxYKc",
  kazi: "https://www.youtube.com/watch?v=C-BT3nrbzgQ",
  hergis: "https://www.youtube.com/watch?v=sSniAyWE-ro",
  mario: "https://www.youtube.com/watch?v=EsxysTKse7I",
  kiaan: "https://www.youtube.com/watch?v=HvJbgtaskCA",
  patrick: "https://www.youtube.com/watch?v=g0-8LlyDsZA",
};

const VIDALYTICS_ACCOUNT = "HjA51wM6";
const HERO_EMBED_ID = "nZh3ZMAQKBFmQv7m"; // placeholder — same VSL as /thankyou

// TODO: replace with real booking URL (Calendly, GHL, etc.)
const BOOK_CALL_URL = "#book-call";

const pillars = [
  {
    title: "1-on-1 Coaching",
    body: "We'll work with you personally to choose your niche, craft your offer, and build your student acquisition system.",
  },
  {
    title: "Proven Tutoring Systems",
    body: "You get access to our library of pre-built tutoring workflows, scripts, and SOPs, so you can deliver high-quality results from day one.",
  },
  {
    title: "Student Acquisition Machine",
    body: "We'll teach you the exact outreach methods our clients are using to sign $2k–$5k/month tutoring contracts without spending money on ads.",
  },
  {
    title: "Direct Support & Community",
    body: "You get direct access to me and my team, plus a community of other tutoring business owners to keep you accountable.",
  },
];

const faqs = [
  {
    q: "What is the investment?",
    a: "We share the full pricing on the 1-on-1 strategy call once we've understood your situation and confirmed it's the right fit. The program is positioned for tutors who want to build a real business, not a low-ticket course.",
  },
  {
    q: "How much time do I need to commit?",
    a: "Most of our clients start while still tutoring full-time and dedicate 1-2 hours per day to building the business in their first 90 days. The systems are designed to compound — you put more in early, then it scales.",
  },
  {
    q: "What if I have no tech skills or business experience?",
    a: "You don't need either. Every workflow is plug-and-play, and we've onboarded tutors with zero business background. You bring the teaching expertise; we bring the systems, scripts, and 1-on-1 coaching.",
  },
  {
    q: "Is there a guarantee?",
    a: "Yes. We have a 60-day satisfaction guarantee. If you follow the process and aren't satisfied within the first 60 days, you receive a full refund.",
  },
  {
    q: "How is this different from other programs?",
    a: "Most programs sell you a course and disappear. We work with you 1-on-1 — choosing your niche, refining your offer, and walking through every step of student acquisition. You're not buying information, you're buying access to a system and a team.",
  },
];

const caseStudies = [
  { key: "sajib", name: "Sajib Al Rashid", transformation: "£54,238 in 90 Days" },
  { key: "fatima", name: "Fatima Galal", transformation: "£8,425K in 30 Days" },
  { key: "mobin", name: "Mobin Naybin", transformation: "$40,000 in 60 Days" },
  { key: "kazi", name: "Kazi Mahathir", transformation: "£15,000/Mo" },
  { key: "hergis", name: "Hergis Nkote", transformation: "$0 to $9,8K" },
  { key: "mario", name: "Mario Sison", transformation: "$6,500 in 5 Days" },
  { key: "kiaan", name: "Kiaan Patel", transformation: "£9,000/mo" },
  { key: "patrick", name: "Patrick Choi", transformation: "$12k/m to $70k/m" },
] as const;

function normalizeEmbedUrl(url: string) {
  if (!url) return "";
  if (url.includes("youtube.com/watch?v=")) {
    const id = url.split("v=")[1]?.split("&")[0];
    return id ? `https://www.youtube.com/embed/${id}` : url;
  }
  if (url.includes("youtu.be/")) {
    const id = url.split("youtu.be/")[1]?.split("?")[0];
    return id ? `https://www.youtube.com/embed/${id}` : url;
  }
  return url;
}

let vidalyticsReady: Promise<void> | null = null;

function ensureVidalyticsLoaded(accountId: string, firstEmbedId: string): Promise<void> {
  if (vidalyticsReady) return vidalyticsReady;

  vidalyticsReady = new Promise((resolve) => {
    const w = window as any;
    if (!w.Vidalytics) w.Vidalytics = {};
    if (!w.VidalyticsL) w.VidalyticsL = {};
    if (!w._vidalytics) w._vidalytics = {};

    const baseUrl = `https://fast.vidalytics.com/embeds/${accountId}/${firstEmbedId}/`;
    const s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = baseUrl + "loader.min.js";
    s.onload = () => {
      const LoaderClass = w.VidalyticsL?.Loader;
      if (LoaderClass) {
        const loader = new LoaderClass();
        loader.loadScript(baseUrl + "player.min.js", () => resolve());
      }
    };
    document.head.appendChild(s);
  });

  return vidalyticsReady;
}

function VidalyticsEmbed({ embedId, accountId }: { embedId: string; accountId: string }) {
  const divId = `vidalytics_embed_${embedId}`;
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    ensureVidalyticsLoaded(accountId, HERO_EMBED_ID).then(() => {
      const w = window as any;
      const EmbedClass = w.Vidalytics?.Embed;
      if (EmbedClass) {
        const embed = new EmbedClass();
        embed.run(divId);
      }
    });
  }, [visible, accountId, divId]);

  return (
    <div className="overflow-hidden rounded-lg border-4 border-yellow-500" ref={containerRef}>
      <div id={divId} style={{ width: "100%", position: "relative", paddingTop: "56.25%" }} />
    </div>
  );
}

function CtaBlock() {
  return (
    <section className="bg-black px-5 py-14 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-4xl md:text-5xl">
          Ready to Build Your Own{" "}
          <span className="text-yellow-500">Online Tutoring Business?</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base text-zinc-300 sm:text-lg">
          If you want my help doing it{" "}
          <span className="font-bold text-white">1-on-1</span>, book in a call with us by clicking the button below:
        </p>
        <div className="mx-auto mt-6 h-1.5 w-32 bg-yellow-500" />

        <a
          href={BOOK_CALL_URL}
          className="mt-8 inline-block rounded-md bg-yellow-500 px-8 py-5 font-display text-base font-black uppercase tracking-wide text-black transition hover:bg-yellow-400 sm:text-lg"
        >
          Yes, I Want to Build a Tutoring Business
        </a>
        <p className="mt-3 text-sm font-bold uppercase tracking-wide text-yellow-500">
          Book In My Free 1:1 Roadmap Session
        </p>
      </div>
    </section>
  );
}

export default function Training() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero / VSL Section */}
      <header className="border-b border-zinc-200 px-5 py-10 sm:px-8 sm:py-14">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-wide">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
            <span className="text-emerald-600">Success</span>
            <span className="text-zinc-700">Free Training Unlocked</span>
          </div>

          <h1 className="mx-auto mt-5 max-w-3xl font-display text-3xl font-black uppercase leading-[1.05] tracking-tight text-black sm:text-4xl md:text-5xl">
            <span className="text-yellow-500">Watch Now</span>{" "}
            The Step-By-Step Blueprint To Building An Online Tutoring Business From 0 To $10k, $30k, Or Even $50k Per Month
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base text-zinc-700 sm:text-lg">
            Make sure to watch until the end where I reveal the{" "}
            <em className="font-bold not-italic text-yellow-600">exact strategies and offers</em>{" "}
            working for our tutoring clients right now.
          </p>

          <div className="mx-auto mt-6 h-1.5 w-32 bg-yellow-500" />

          <div className="mx-auto mt-6 max-w-2xl overflow-hidden">
            <VidalyticsEmbed embedId={HERO_EMBED_ID} accountId={VIDALYTICS_ACCOUNT} />
          </div>
        </div>
      </header>

      <main>
        {/* How We Can Help Section */}
        <section className="px-5 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="font-display text-3xl font-black uppercase leading-[1.05] tracking-tight text-black sm:text-4xl md:text-5xl text-center">
              Here's How We Can Help You Inside{" "}
              <span className="text-yellow-500">The Online Tutoring Business Program</span>
            </h2>
            <div className="mx-auto mt-6 h-1.5 w-32 bg-yellow-500" />

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {pillars.map((p) => (
                <div
                  key={p.title}
                  className="rounded-lg border-l-4 border-yellow-500 bg-zinc-100 p-6 sm:p-8"
                >
                  <h3 className="font-display text-xl font-black uppercase tracking-tight text-black sm:text-2xl">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-base text-zinc-800">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaBlock />

        {/* FAQ Section */}
        <section className="bg-zinc-100 px-5 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-3xl">
            <p className="text-center text-sm font-black uppercase tracking-[0.16em] text-zinc-500">
              Frequently Asked Questions
            </p>
            <h2 className="mt-2 font-display text-3xl font-black uppercase leading-[1.05] tracking-tight text-black sm:text-4xl md:text-5xl text-center">
              Questions You May Have…
            </h2>
            <div className="mx-auto mt-6 h-1.5 w-32 bg-yellow-500" />

            <div className="mt-10 space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-lg border border-zinc-200 bg-white p-5 sm:p-6 [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-black uppercase tracking-tight text-black sm:text-xl">
                    <span>{faq.q}</span>
                    <span className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-md border-2 border-yellow-500 text-yellow-500 transition group-open:rotate-45">
                      <span className="block text-2xl leading-none">+</span>
                    </span>
                  </summary>
                  <p className="mt-4 text-base leading-relaxed text-zinc-700">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <CtaBlock />

        {/* Case Studies Section */}
        <section className="px-5 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-display text-4xl font-black uppercase leading-none tracking-tight text-black sm:text-5xl md:text-6xl text-center">
              Our Case Studies
            </h2>
            <div className="mx-auto mt-6 h-1.5 w-48 bg-yellow-500" />

            <p className="mx-auto mt-8 max-w-2xl text-center text-lg font-semibold text-zinc-800">
              We Give You Proven, Copy & Paste Tutoring Business Workflows You Can Use—Zero Technical Skills Required
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {caseStudies.map((study) => (
                <article key={study.key} className="rounded-lg bg-zinc-100 p-6">
                  <p className="text-base font-semibold text-yellow-600">{study.transformation}</p>
                  <h3 className="mt-2 font-display text-2xl font-black text-black">{study.name}</h3>
                  <div className="relative mt-5 aspect-video overflow-hidden rounded-lg bg-black">
                    <iframe
                      src={normalizeEmbedUrl(VIDEO_LINKS[study.key])}
                      title={study.name}
                      className="h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </article>
              ))}
            </div>

            <p className="mx-auto mt-10 max-w-3xl text-center text-lg text-zinc-900">
              We have <strong>dozens more of these</strong>, with screenshots, full context, and the exact playbook each of them used.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-yellow-500 bg-zinc-100 px-5 py-8 text-center text-sm text-zinc-700 sm:px-8">
        <p className="font-bold">© 2025 KST Marketing. All rights reserved.</p>
        <p className="mt-2">Terms and Conditions | Privacy Policy</p>
      </footer>
    </div>
  );
}
