/*
Design philosophy: Exact replica of the Client Ascension precall page structure, with KST Marketing gold branding replacing red accents. Maintains the original layout, typography hierarchy, video frame styling, FAQ grid, case studies, and proof section—but uses gold/yellow (#EAB308) instead of red (#DC2626).
*/
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

const faqVideos = [
  { embedId: "tzAPcWInNVOqL6WR", accountId: "HjA51wM6" },
] as const;

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

function VidalyticsEmbed({ embedId, accountId }: { embedId: string; accountId: string }) {
  const html = `<!DOCTYPE html>
<html><head><meta charset="utf-8"><style>*{margin:0;padding:0}body{overflow:hidden}</style></head>
<body>
<div id="${embedId}" style="width:100%;position:relative;padding-top:56.25%"></div>
<script type="text/javascript">
(function(v,i,d,a,l,y,t,c,s){
  y='_'+d.toLowerCase();if(!v[y]){v[y]={}}if(!v[y].embeds){v[y].embeds={}}
  t=function(){if(v[d]&&v[d].Embed){var ve=v[d].Embed;c=new ve();c.run(a);c.loadCss();}else{setTimeout(t,1000)}};
  s=new XMLHttpRequest();s.open("GET",l+'?ac='+(new Date()).getTime(),true);
  s.onreadystatechange=function(){if(s.readyState==4){if((s.status==200||s.status==304)){var sd=JSON.parse(s.responseText);v[y].embeds[a]={type:"video",options:sd};t();}}};s.send();
})(window,document,'Vidalytics','${embedId}','https://fast.vidalytics.com/embeds/${accountId}/${embedId}/player.settings.json');
<\/script>
</body></html>`;

  return (
    <div className="overflow-hidden rounded-lg border-4 border-yellow-500">
      <iframe
        srcDoc={html}
        className="w-full border-0"
        style={{ aspectRatio: "16/9" }}
        allow="autoplay; fullscreen"
        allowFullScreen
      />
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
            <VideoFrame title="KST Marketing Program" src={VIDEO_LINKS.main} thumbnail={HERO_THUMB} />
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
              {faqVideos.map((item) => (
                <div key={item.embedId}>
                  <VidalyticsEmbed embedId={item.embedId} accountId={item.accountId} />
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

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "Student 1", role: "Testimonial", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" },
                { name: "Student 2", role: "Testimonial", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" },
                { name: "Student 3", role: "Testimonial", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop" },
                { name: "Student 4", role: "Testimonial", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop" },
                { name: "Student 5", role: "Testimonial", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" },
                { name: "Student 6", role: "Testimonial", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" },
              ].map((testimonial) => (
                <div key={testimonial.name} className="rounded-lg overflow-hidden bg-white border-4 border-zinc-200 shadow-lg">
                  <img src={testimonial.image} alt={testimonial.name} className="h-64 w-full object-cover" />
                  <div className="p-6">
                    <h3 className="font-display text-lg font-black uppercase text-black">{testimonial.name}</h3>
                    <p className="mt-2 text-sm text-zinc-600">{testimonial.role}</p>
                    <p className="mt-4 text-zinc-700">Add your testimonial text here.</p>
                  </div>
                </div>
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
