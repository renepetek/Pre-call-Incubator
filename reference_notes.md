# Reference Page Inspection Notes

Source URL: https://go.clientascension.ai/precall-info

Initial viewport observations:

- Page title shown in browser: **AI Assisted Agency**.
- Top logo reads **CLIENT ASCENSION** in black and red, with a small red geometric mark.
- Above the hero headline is a green-dot status line: **YOUR MEETING IS SCHEDULED**.
- Main hero headline: **WATCH THE VIDEO BELOW IN FULL BEFORE MOVING ON TO THE REST OF THE PAGE 👇**.
- The hero uses a white background, bold condensed all-caps black typography, and strong red accent dividers.
- Main video is centered below the headline with a red rectangular border and a visible play button overlay. The current thumbnail reads **AI Assisted Agency Program** and includes AI/tool logos.
- Below the first video is a red button with white text: **ACCESS THE GAMMA DOC**.
- The next visible section starts on a light gray background with the heading **FREQUENTLY ASKED QUESTIONS** and a red divider beneath it.
- Browser element list shows multiple embedded video/article blocks after the hero, suggesting a long pre-call page with several FAQ or proof videos.

Extracted markdown text:

- Main heading in extracted text: **AI Assisted Agency**.
- Subheading: **We Give You Proven, Copy & Paste AI Workflows You Can Sell to Businesses—Zero Technical Skills Required**.
- Proof/customer names and outcomes captured in page text:
  - matt huang: **$20,000 in the first 3 months. Working nights and weekends from his corporate job before quitting.**
  - Doby Lanete: **$12,000 collected in his first 30 days inside the program.**
  - Daniel Werner: **0 to $30,000/mo in 3 months.**
  - Cameron Ottello: **$50,000 in 3 months from a single ecommerce email retainer track.**
  - James Pimble: **0 to $14,500/mo in 2 months.**
  - Chris Burns (Indonesia, 53): **Went from zero agency experience at 53 to a functioning book of clients, working from a different continent.**
  - Supporting claim: **We have 100+ more of these, with screenshots, full context, and the exact playbook each of them used.**

Implementation direction:

- Recreate as a static React page with replaceable video placeholders.
- Preserve the direct-response structure: scheduled confirmation, mandatory video, Gamma doc CTA, FAQ video grid, offer explanation, proof/results, and final conversion reminders.
- Use strong black condensed display type, red accents, white/gray section backgrounds, and rectangular video frames.

## Additional Scroll Findings

The FAQ section appears on a light-gray background and uses a two-column desktop grid of embedded video cards. Each card has a dark purple thumbnail with gold/yellow control accents, white uppercase question text, and a centered play button. Visible FAQ questions include **How do I know which business model to run?**, **How long will it take to sign my first client?**, **How many hours per day will this take?**, **How much revenue can I make doing this?**, **What if I don’t get any results?**, **What is the guarantee?**, **Our actual refund & dispute rates**, and **I’ve never sold anything, will that hold me back?**.

After the FAQ grid, the page transitions back to a white section titled **Our Case Studies** with the same bold condensed all-caps typography and red divider. The subheading repeats the AI workflow positioning statement. Case study cards are light-gray rectangular panels in a two-column grid, each with a bold name, short revenue result copy, and a video thumbnail or proof visual beneath it. This confirms the recreated page should have a long direct-response funnel flow: hero video, Gamma document CTA, FAQ video grid, case studies, testimonials/proof, and footer policies.

## Case Study Section Findings

The case study section uses simple light-gray cards with a two-column arrangement on desktop. Each card leads with a bold condensed name, a plain-language revenue outcome, and a large embedded video thumbnail beneath. Visible cards include **Matt Huang**, **Cameron Ottello**, **Doby Lanete**, **James Pimble**, **Daniel Werner**, and **Chris Burns (Indonesia, 53)**. The thumbnails are red/black result-style images with large dollar figures, blurred faces, and play overlays. Near the bottom of the case study grid, the page repeats the claim that there are **100+ more** results with screenshots, full context, and playbooks.

For implementation, the recreated page should use the extracted names and outcomes exactly where visible, but video embeds should be represented as modular placeholders or configurable iframe slots so the user can replace them with their own links later.
