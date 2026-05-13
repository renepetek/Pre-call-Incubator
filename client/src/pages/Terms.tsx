/*
Original Terms & Conditions draft for the Educator Incubator Program.
This is a starting template. Review with legal counsel before going live.
Placeholders to fill in: governing-law jurisdiction, contact email.
*/
import { useEffect } from "react";
import { trackOutboundClick } from "@/lib/analytics";

export default function Terms() {
  useEffect(() => {
    document.title = "KST Marketing";
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">
      <header className="border-b border-zinc-200 px-5 py-6 sm:px-8">
        <div className="mx-auto flex max-w-3xl items-center justify-between">
          <a
            href="/training"
            className="font-display text-base font-bold uppercase tracking-[0.16em] text-black sm:text-lg"
          >
            KST <span className="text-yellow-500">Marketing</span>
          </a>
          <a href="/training" className="text-sm text-zinc-600 hover:text-zinc-900">
            Back to site
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
        <h1 className="font-display text-3xl font-bold leading-[1.1] tracking-tight text-black sm:text-4xl">
          Terms and Conditions
        </h1>
        <div className="mt-5 h-1 w-32 bg-yellow-500" />
        <p className="mt-6 text-sm text-zinc-500">Last updated: May 6, 2026</p>

        <div className="mt-10 space-y-10 text-base leading-relaxed text-zinc-800">
          <section>
            <h2 className="font-display text-xl font-bold tracking-tight text-black sm:text-2xl">
              1. Acceptance of Terms
            </h2>
            <p className="mt-3">
              By accessing this site or enrolling in any KST Marketing offering, including
              the Educator Incubator Program, you agree to be bound by these Terms and
              Conditions. If you do not agree, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold tracking-tight text-black sm:text-2xl">
              2. Eligibility
            </h2>
            <p className="mt-3">
              The Educator Incubator Program is offered to tutors and online education
              business owners who are committed to building or scaling their business.
              We reserve the right to decline service to any applicant at our sole discretion.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold tracking-tight text-black sm:text-2xl">
              3. Description of Services
            </h2>
            <p className="mt-3">
              KST Marketing operates the Educator Incubator Program, which provides
              1-on-1 coaching, pre-built workflows and templates, outreach and acquisition
              training, and community access. Specific deliverables, schedules, and
              session formats are described to you during enrollment.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold tracking-tight text-black sm:text-2xl">
              4. Payment
            </h2>
            <p className="mt-3">
              Program fees are disclosed during the strategy call and confirmed in writing
              before you enrol. You authorise KST Marketing (or our payment processor) to
              charge the agreed amount on the agreed schedule. Failed or reversed payments
              may result in immediate suspension of access until resolved.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold tracking-tight text-black sm:text-2xl">
              5. 60-Day Satisfaction Guarantee
            </h2>
            <p className="mt-3">
              We offer a 60-day satisfaction guarantee. If you follow the program process
              and are not satisfied within the first 60 days from your enrolment date, you
              may request a full refund by emailing us within that window. Refund requests
              made after the 60-day period will not be honoured.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold tracking-tight text-black sm:text-2xl">
              6. Intellectual Property
            </h2>
            <p className="mt-3">
              All program materials, including videos, documents, scripts, templates, and
              standard operating procedures, are the intellectual property of KST
              Marketing and are licensed solely for your personal use within the program.
              Reproduction, redistribution, resale, or sharing of materials with non-members
              is prohibited without our prior written permission.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold tracking-tight text-black sm:text-2xl">
              7. Confidentiality
            </h2>
            <p className="mt-3">
              You agree to keep proprietary methods, materials, and community discussions
              confidential and not to disclose them to third parties without written
              permission from KST Marketing.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold tracking-tight text-black sm:text-2xl">
              8. No Guarantee of Results
            </h2>
            <p className="mt-3">
              We provide systems, coaching, and support designed to help you grow your
              tutoring business. We do not guarantee specific revenue, enrolment, or
              business outcomes. Your results depend on your effort, market conditions,
              and execution. Any case studies or testimonials shown reflect individual
              experiences and are not typical results.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold tracking-tight text-black sm:text-2xl">
              9. Limitation of Liability
            </h2>
            <p className="mt-3">
              To the maximum extent permitted by law, KST Marketing's total liability
              arising out of or relating to these Terms or your use of our services shall
              not exceed the total fees you have paid us in the twelve (12) months prior
              to the event giving rise to the claim. We are not liable for indirect,
              incidental, consequential, or punitive damages.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold tracking-tight text-black sm:text-2xl">
              10. Termination
            </h2>
            <p className="mt-3">
              We may suspend or terminate your access to the program for material breach of
              these Terms, including misuse of materials, abusive conduct toward staff or
              other members, or non-payment, without refund.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold tracking-tight text-black sm:text-2xl">
              11. Governing Law
            </h2>
            <p className="mt-3">
              These Terms are governed by the laws of [JURISDICTION TO BE CONFIRMED]. Any
              dispute arising out of or in connection with these Terms shall be resolved in
              the courts of that jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold tracking-tight text-black sm:text-2xl">
              12. Changes to These Terms
            </h2>
            <p className="mt-3">
              We may update these Terms from time to time. The "Last updated" date at the
              top reflects the most recent revision. Continued use of our services after a
              change constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold tracking-tight text-black sm:text-2xl">
              13. Contact
            </h2>
            <p className="mt-3">
              Questions about these Terms? Email us at{" "}
              <a
                href="mailto:hello@kst-marketing.com"
                className="font-bold text-yellow-600 hover:text-yellow-700"
              >
                hello@kst-marketing.com
              </a>
              .
            </p>
          </section>
        </div>
      </main>

      <footer className="border-t border-yellow-500 bg-zinc-100 px-5 py-8 text-center text-sm text-zinc-700 sm:px-8">
        <p className="font-bold">© 2026 KST Marketing. All rights reserved.</p>
        <p className="mt-2">
          <a href="/terms" className="hover:text-yellow-600">
            Terms and Conditions
          </a>
          {" | "}
          <a
            href="https://kst-marketing.com/policy/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackOutboundClick("privacy_policy")}
            className="hover:text-yellow-600"
          >
            Privacy Policy
          </a>
        </p>
      </footer>
    </div>
  );
}
