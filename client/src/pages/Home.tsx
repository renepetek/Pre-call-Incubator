/*
Design philosophy: Exact replica of the Client Ascension precall page structure, with KST Marketing gold branding replacing red accents. Maintains the original layout, typography hierarchy, video frame styling, FAQ grid, case studies, and proof section—but uses gold/yellow (#EAB308) instead of red (#DC2626).
*/
import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

const HERO_THUMB = "https://d2xsxph8kpxj0f.cloudfront.net/310519663612998084/bzRRo8PuWrPWmxD9Qqyapo/precall-hero-ai-workflows-6b784JMa5H6cSzmSDomTs4.webp";
const FAQ_THUMB = "https://d2xsxph8kpxj0f.cloudfront.net/310519663612998084/bzRRo8PuWrPWmxD9Qqyapo/precall-faq-video-frame-YR4CCcjXLi8qGDFS5s9TZ4.webp";

const VIDEO_LINKS = {
  main: "",
  sajib: "https://www.youtube.com/watch?v=Wpvz6uusSZY",
  fatima: "https://www.youtube.com/watch?v=Dg3qBjnz9uo",
  mobin: "https://www.youtube.com/watch?v=CxMD9RkxYKc",
  kazi: "https://www.youtube.com/watch?v=C-BT3nrbzgQ",
  hergis: "https://www.youtube.com/watch?v=sSniAyWE-ro",
  mario: "https://www.youtube.com/watch?v=EsxysTKse7I",
  kiaan: "https://www.youtube.com/watch?v=HvJbgtaskCA",
  patrick: "https://www.youtube.com/watch?v=g0-8LlyDsZA",
  mobinBreakdown: "https://www.youtube.com/watch?v=kz18oOMh0tM",
  hassanAmmaBreakdown: "https://www.youtube.com/watch?v=sscfZJ14gWY",
  martaBreakdown: "https://www.youtube.com/watch?v=fouYAJShOCM",
};

const VIDALYTICS_ACCOUNT = "HjA51wM6";

const faqVideos = [
  "tzAPcWInNVOqL6WR",
  "iqw7DUGpGdUjBwlM",
  "UkH8uI0lQJE4pn8m",
  "etwXnhzI_wfEmg8x",
  "jFiS_uI2EmO37ZxI",
  "q9CNciRaHtXL5CmZ",
  "JeyRGtPS7NKzvg7_",
] as const;

const TESTIMONIAL_IMAGES = [
  "/testimonials/t-100.png", "/testimonials/t-008.png", "/testimonials/t-043.png",
  "/testimonials/t-086.png", "/testimonials/t-143.png", "/testimonials/t-090.png",
  "/testimonials/t-110.png", "/testimonials/t-003.png", "/testimonials/t-007.png",
  "/testimonials/t-020.png", "/testimonials/t-098.png", "/testimonials/t-064.png",
  "/testimonials/t-101.png", "/testimonials/t-062.png", "/testimonials/t-054.png",
  "/testimonials/t-021.png", "/testimonials/t-014.png", "/testimonials/t-125.png",
  "/testimonials/t-004.png", "/testimonials/t-022.png", "/testimonials/t-012.png",
  "/testimonials/t-131.png", "/testimonials/t-079.png", "/testimonials/t-138.png",
  "/testimonials/t-119.png", "/testimonials/t-066.png", "/testimonials/t-027.png",
  "/testimonials/t-071.png", "/testimonials/t-068.png", "/testimonials/t-084.png",
  "/testimonials/t-002.png", "/testimonials/t-082.png", "/testimonials/t-104.png",
  "/testimonials/t-023.png", "/testimonials/t-130.png", "/testimonials/t-093.png",
  "/testimonials/t-137.png", "/testimonials/t-146.png", "/testimonials/t-152.jpg",
  "/testimonials/t-009.png", "/testimonials/t-148.png", "/testimonials/t-107.png",
  "/testimonials/t-080.png", "/testimonials/t-091.png", "/testimonials/t-033.png",
  "/testimonials/t-147.png", "/testimonials/t-011.png", "/testimonials/t-025.png",
  "/testimonials/t-151.png", "/testimonials/t-126.png", "/testimonials/t-032.png",
  "/testimonials/t-095.png", "/testimonials/t-118.png", "/testimonials/t-018.png",
  "/testimonials/t-116.png", "/testimonials/t-149.png", "/testimonials/t-001.png",
  "/testimonials/t-089.png", "/testimonials/t-056.png", "/testimonials/t-060.png",
  "/testimonials/t-077.png", "/testimonials/t-117.png", "/testimonials/t-029.png",
  "/testimonials/t-102.png", "/testimonials/t-065.png", "/testimonials/t-046.png",
  "/testimonials/t-106.png", "/testimonials/t-038.png", "/testimonials/t-092.png",
  "/testimonials/t-129.png", "/testimonials/t-036.png", "/testimonials/t-083.png",
  "/testimonials/t-078.png", "/testimonials/t-028.png", "/testimonials/t-048.png",
  "/testimonials/t-040.png", "/testimonials/t-026.jpg", "/testimonials/t-142.png",
  "/testimonials/t-154.png", "/testimonials/t-127.png", "/testimonials/t-112.png",
  "/testimonials/t-103.png", "/testimonials/t-114.png", "/testimonials/t-047.png",
  "/testimonials/t-144.png", "/testimonials/t-013.png", "/testimonials/t-006.png",
  "/testimonials/t-037.png", "/testimonials/t-075.png", "/testimonials/t-113.png",
  "/testimonials/t-108.png", "/testimonials/t-061.png", "/testimonials/t-139.png",
  "/testimonials/t-045.png", "/testimonials/t-050.png", "/testimonials/t-063.png",
  "/testimonials/t-073.png", "/testimonials/t-133.png", "/testimonials/t-017.png",
  "/testimonials/t-141.png", "/testimonials/t-044.png", "/testimonials/t-085.png",
  "/testimonials/t-005.png", "/testimonials/t-030.png", "/testimonials/t-096.png",
  "/testimonials/t-072.png", "/testimonials/t-076.png", "/testimonials/t-094.png",
  "/testimonials/t-136.png", "/testimonials/t-042.png", "/testimonials/t-128.png",
  "/testimonials/t-039.png", "/testimonials/t-132.png", "/testimonials/t-088.png",
  "/testimonials/t-031.png", "/testimonials/t-070.png", "/testimonials/t-109.png",
  "/testimonials/t-105.png", "/testimonials/t-122.png", "/testimonials/t-150.png",
  "/testimonials/t-055.png", "/testimonials/t-135.png", "/testimonials/t-123.png",
  "/testimonials/t-124.png", "/testimonials/t-049.png", "/testimonials/t-015.png",
  "/testimonials/t-087.png", "/testimonials/t-121.png", "/testimonials/t-024.png",
  "/testimonials/t-120.png", "/testimonials/t-134.png", "/testimonials/t-034.png",
  "/testimonials/t-010.png", "/testimonials/t-053.png", "/testimonials/t-051.png",
  "/testimonials/t-099.png", "/testimonials/t-111.png", "/testimonials/t-097.png",
  "/testimonials/t-074.png", "/testimonials/t-140.png", "/testimonials/t-067.png",
  "/testimonials/t-058.png", "/testimonials/t-069.png", "/testimonials/t-115.png",
  "/testimonials/t-052.png", "/testimonials/t-035.png", "/testimonials/t-145.png",
  "/testimonials/t-041.png", "/testimonials/t-057.png", "/testimonials/t-059.png",
  "/testimonials/t-081.png",
];

const caseStudies = [
  {
    key: "sajib",
    name: "Sajib Al Rashid",
    transformation: "£54,238 in 90 Days",
  },
  {
    key: "fatima",
    name: "Fatima Galal",
    transformation: "£8,425K in 30 Days",
  },
  {
    key: "mobin",
    name: "Mobin Naybin",
    transformation: "$40,000 in 60 Days",
  },
  {
    key: "kazi",
    name: "Kazi Mahathir",
    transformation: "£15,000/Mo",
  },
  {
    key: "hergis",
    name: "Hergis Nkote",
    transformation: "$0 to $9,8K",
  },
  {
    key: "mario",
    name: "Mario Sison",
    transformation: "$6,500 in 5 Days",
  },
  {
    key: "kiaan",
    name: "Kiaan Patel",
    transformation: "£9,000/mo",
  },
  {
    key: "patrick",
    name: "Patrick Choi",
    transformation: "$12k/m to $70k/m",
  },
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

function Logo() {
  return (
    <div className="inline-flex items-center gap-2 border-b-2 border-yellow-500 pb-1">
      <div className="relative h-5 w-6 rotate-45 bg-yellow-500">
        <span className="absolute inset-1 bg-white/90" />
      </div>
      <span className="font-display text-xl font-black uppercase tracking-[0.16em] text-black sm:text-2xl">
        KST <span className="text-yellow-500">Marketing</span>
      </span>
    </div>
  );
}

// Load Vidalytics library once, then init all embeds
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

    ensureVidalyticsLoaded(accountId, "nZh3ZMAQKBFmQv7m").then(() => {
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

function VideoFrame({
  title,
  src,
  thumbnail,
}: {
  title: string;
  src?: string;
  thumbnail: string;
}) {
  const embedUrl = normalizeEmbedUrl(src || "");

  return (
    <div className="relative aspect-video overflow-hidden rounded-lg border-4 border-yellow-500 bg-black">
      {embedUrl ? (
        <iframe
          className="h-full w-full"
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <>
          <img src={thumbnail} alt={title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-md bg-black/70 text-white shadow-2xl ring-4 ring-white/25">
            <Play className="ml-1 h-8 w-8 fill-current" />
          </div>
        </>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <header className="border-b border-zinc-200 px-5 py-10 sm:px-8 sm:py-14">
        <div className="mx-auto max-w-3xl text-center">
          <div className="font-display text-xl font-black uppercase tracking-[0.16em] text-yellow-500 sm:text-2xl border-b-2 border-yellow-500 pb-2 inline-block">
            Important Next Steps Below
          </div>

          <div className="mt-5 flex justify-center">
            <div className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-wide text-emerald-600">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              Your meeting is scheduled
            </div>
          </div>

          <h1 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-black uppercase leading-[1] tracking-tight text-black sm:text-4xl md:text-5xl">
            Watch the video below in full before moving on to the rest of the page{" "}
            <span className="inline-block">👇</span>
          </h1>

          <div className="mx-auto mt-6 h-1.5 w-32 bg-yellow-500" />

          <div className="mx-auto mt-6 max-w-2xl overflow-hidden">
            <VidalyticsEmbed embedId="nZh3ZMAQKBFmQv7m" accountId={VIDALYTICS_ACCOUNT} />
          </div>
        </div>
      </header>

      <main>
        {/* FAQ Section */}
        <section className="bg-zinc-100 px-5 py-12 sm:px-8 sm:py-14">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-display text-3xl font-black uppercase leading-none tracking-tight text-black sm:text-4xl md:text-5xl text-center">
              Frequently Asked Questions
            </h2>
            <div className="mx-auto mt-5 h-1.5 w-32 bg-yellow-500" />

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {faqVideos.map((embedId, i) => (
                <div key={embedId} className={faqVideos.length % 2 !== 0 && i === faqVideos.length - 1 ? "md:col-span-2 md:mx-auto md:w-1/2" : ""}>
                  <VidalyticsEmbed embedId={embedId} accountId={VIDALYTICS_ACCOUNT} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="px-5 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-display text-4xl font-black uppercase leading-none tracking-tight text-black sm:text-5xl md:text-6xl text-center">
              Our Case Studies
            </h2>
            <div className="mx-auto mt-6 h-1.5 w-48 bg-yellow-500" />

            <p className="mx-auto mt-8 max-w-2xl text-center text-lg font-semibold text-zinc-800">
              We Give You Proven, Copy & Paste AI Workflows You Can Sell to Businesses—Zero Technical Skills Required
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

        {/* Testimonials Section */}
        <section className="px-5 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-display text-4xl font-black uppercase leading-none tracking-tight text-black sm:text-5xl md:text-6xl text-center">
              Testimonials
            </h2>
            <div className="mx-auto mt-6 h-1.5 w-48 bg-yellow-500" />

            <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
              {TESTIMONIAL_IMAGES.map((src) => (
                <img
                  key={src}
                  src={src}
                  alt="Student testimonial"
                  className="mb-4 w-full rounded-lg border border-zinc-200 shadow-sm"
                  loading="lazy"
                />
              ))}
            </div>
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
