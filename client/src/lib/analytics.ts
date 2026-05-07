import { track } from "@vercel/analytics";

export type CtaLocation = "hero" | "help" | "faq" | "case_studies";
export type CtaVariant = "full" | "slim";

export function trackCtaClick(location: CtaLocation, variant: CtaVariant) {
  track("cta_click", { location, variant });
}

export function trackFaqOpen(question: string) {
  track("faq_open", { question });
}

export function trackCaseStudyView(caseStudy: string) {
  track("case_study_view", { case_study: caseStudy });
}

export function trackOutboundClick(link: string) {
  track("outbound_click", { link });
}
