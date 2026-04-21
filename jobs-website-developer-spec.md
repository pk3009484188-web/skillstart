
# Jobs Website Developer Specification (.MD)

## Suggested Brand Names
1. SkillStart Jobs
2. EasyApply Jobs
3. MatricJobs Hub
4. FreshStart Careers
5. QuickHire Pakistan
6. CareerStep Jobs
7. DailyStarter Jobs
8. EntryPoint Careers
9. ApplyFast Jobs
10. JobRasta

> Recommended for trust + growth: **SkillStart Jobs** or **FreshStart Careers**

---

# 1. Project Overview

Build a **static content-driven jobs website** focused on beginner-friendly jobs requiring:

- Basic computer knowledge
- Matric / Intermediate education
- Fresh / low experience candidates

Primary traffic source:

- Facebook
- Social media
- WhatsApp shares
- Organic search (secondary growth channel)

Primary monetization:

- Google AdSense

Architecture goal:

- No traditional backend
- Low maintenance
- Fast loading
- Easy content publishing
- AdSense-friendly
- Future blog expansion

---

# 2. Recommended Tech Stack

## Core

- Astro (preferred) OR Next.js static export
- Tailwind CSS
- Markdown content collections
- TypeScript

## Hosting

- Cloudflare Pages (preferred)
- Netlify
- Vercel static hosting

## Analytics

- Google Analytics 4
- Google Search Console
- Meta Pixel

## Ads

- Google AdSense Auto Ads + manual placements

---

# 3. Folder Structure

```bash
src/
  components/
  layouts/
  pages/
    index.astro
    jobs/
      [slug].astro
      [slug]/eligibility.astro
    blog/
      index.astro
      [slug].astro
    privacy-policy.astro
    terms.astro
    disclaimer.astro
    contact.astro
    about.astro
    cookie-policy.astro
    dmca.astro
    sitemap.xml.ts
    robots.txt.ts

  content/
    jobs/
      sample-job.md
    blog/
      sample-post.md

public/
  images/
  icons/
```

---

# 4. Global Site Layout

## Header

Include on all pages.

### Desktop

- Logo
- Navigation:
  - Home
  - Latest Jobs
  - Categories
  - Blog
  - About
  - Contact
- Search icon
- Mobile menu button

### Mobile

- Logo
- Hamburger menu
- Sticky header on scroll

## Footer

Include on all pages.

### Footer Sections

#### Column 1

- Logo
- Short trust statement

#### Column 2

- Latest Jobs
- Blog
- Categories

#### Column 3

- About
- Contact
- Advertise

#### Column 4 (Legal)

- Privacy Policy
- Terms & Conditions
- Disclaimer
- Cookie Policy
- DMCA
- Sitemap

#### Bottom Bar

- Copyright
- Year
- Powered by Site Name

---

# 5. Main Routes

```bash
/
/jobs/[slug]
/jobs/[slug]/eligibility
/blog
/blog/[slug]
/category/[slug]
/city/[slug]
/privacy-policy
/terms
/disclaimer
/cookie-policy
/about
/contact
/dmca
/sitemap.xml
/robots.txt
/404
```

---

# 6. Homepage Specification

## Hero Section

Headline:
Latest Beginner-Friendly Jobs in Pakistan

Subtext:
Matric, Inter & Basic Computer Jobs Updated Regularly

CTA Buttons:

- View Latest Jobs
- Read Career Guides

## Sections

### A. Featured Jobs (6 cards)

Each card:

- Title
- City
- Education
- Salary
- Posted date
- CTA: Check Eligibility

### B. Categories

- Matric Jobs
- Intermediate Jobs
- Computer Operator Jobs
- Office Jobs
- Lahore Jobs
- Remote Jobs

### C. Latest Blog Posts

3 cards

### D. Why Use This Site

- Fast updates
- Simple job guides
- Easy apply links

### E. FAQ

### F. Ad placements

- After hero
- After featured jobs
- Mid-page
- Before footer

---

# 7. Job Funnel Pages

# Page 1: Homepage Card Click

Button goes to:

```bash
/jobs/[slug]/eligibility
```

---

## Page 2: Eligibility Page

### Top Area

- Job title
- Salary
- Location
- Deadline

### Interactive Checklist

Example:

- I passed Matric or Intermediate
- I can use a mobile phone
- I know basic typing
- I can use WhatsApp / Email
- I can attend interview if selected

### Logic

If 3+ selected:

Show positive result:
Likely suitable for this role

Else:

You may still review details

### CTA

View Full Job Details

### Ad placements

- Below checklist
- Before CTA

---

## Page 3: Full Job Page

### Header Block

- Title
- Company
- City
- Salary
- Posted date
- Deadline

### Sections

## Job Overview

## Responsibilities

## Requirements

## Benefits

## How to Apply

## Important Notes

### CTA Buttons

- Apply Now
- Check More Jobs

### Related Jobs

3 to 6 cards

### Ad placements

- After overview
- Mid-content
- After related jobs

---

# 8. Blog System (.MD Content)

## Blog Folder

```bash
src/content/blog/
```

## Sample File

```md
---
title: "Best Jobs for Matric Pass Candidates"
slug: "best-jobs-for-matric-pass-candidates"
excerpt: "Top beginner-friendly opportunities."
publishedDate: "2026-04-19"
updatedDate: "2026-04-19"
author: "Admin"
category: "Career Guide"
tags:
  - Matric Jobs
  - Career Tips
featuredImage: "/images/blog/matric-guide.jpg"
draft: false
seoTitle: "Best Jobs for Matric Pass Candidates"
seoDescription: "Simple guide for Matric pass job seekers."
---

# Best Jobs for Matric Pass Candidates

Intro paragraph.

## Data Entry Jobs

Details.

## Office Assistant Jobs

Details.

## Final Thoughts

Text.
```

---

# 9. Blog Writing Rules

## Heading Structure

- H1 once only
- H2 for main sections
- H3 for subtopics

## Formatting

- Short paragraphs
- Bullet lists
- Bold important terms
- Internal links to jobs/categories

## Ideal Topics

- How to Make CV
- Best Jobs After Matric
- Interview Tips
- Basic Computer Skills
- How to Apply Online Jobs

---

# 10. Job Content Model (.MD)

```md
---
title: "Data Entry Operator"
slug: "data-entry-operator-lahore"
company: "Private Company"
location: "Lahore"
education: "Matric / Intermediate"
salary: "35,000 - 45,000 PKR"
deadline: "2026-04-30"
postedDate: "2026-04-19"
applyUrl: "https://skillstartjobs.online/apply"
active: true
featured: true
eligibility:
  - Matric or Intermediate
  - Basic computer knowledge
  - Can use WhatsApp
summary: "Entry level office role."
---

# Job Details

Write full description here.
```

---

# 11. Legal Pages (AdSense Essential)

## Privacy Policy (Required)

Must disclose:

- Cookies used
- Analytics usage
- Google AdSense usage
- Third-party advertising cookies
- How users can control cookies
- Contact method

Reference: Google requires publishers to clearly display a privacy policy and disclose cookie use. 

## Cookie Policy

Explain:

- What cookies are
- Why used
- Ad cookies
- Consent choices

## Terms & Conditions

Include:

- Informational use only
- No employment guarantee
- User responsibility
- External links disclaimer
- IP rights
- Changes to terms

## Disclaimer

Include:

- We are not employer unless stated
- We aggregate/share job info
- Verify details before applying
- We are not liable for third-party actions

## About

Who site helps and mission.

## Contact

Contact form or email.

## DMCA / Copyright

Report copied content or misuse.

---

# 12. AdSense Compliance Rules

## Must Do

- Clear navigation
- Real content on every page
- No misleading buttons near ads
- Mobile-friendly pages
- Privacy policy visible
- Valuable job + blog content

## Avoid

- Fake countdown traps
- Auto redirects
- Excessive ads above fold
- Copied thin content
- Misleading Apply buttons near ad units

---

# 13. SEO Requirements

## Technical

- sitemap.xml
- robots.txt
- canonical tags
- Open Graph tags
- fast Core Web Vitals
- image compression

## Content

- unique titles
- unique descriptions
- internal linking
- category pages
- city pages

## Structured Data

### Jobs

JobPosting JSON-LD where accurate and current.

### Blog

Article / Breadcrumb schema.

### Sitewide

Organization schema.

---

# 14. Search / Filter Features

## Homepage Search

Search by:

- title
- city
- keyword

## Filters

- Education
- Category
- City
- Newest

---

# 15. Accessibility

- Keyboard navigable
- Proper contrast
- Alt text on images
- Semantic headings
- Focus states
- Skip to content link

---

# 16. Performance Targets

- Lighthouse 90+
- Mobile-first design
- Lazy load images
- Minified CSS/JS
- Static prerender pages

---

# 17. Content Update Workflow

## New Job

1. Duplicate job markdown file
2. Edit frontmatter
3. Write content
4. Publish / deploy

## Expired Job

- Set active: false
OR
- Auto-hide if deadline passed

## New Blog

1. Duplicate blog template
2. Fill metadata
3. Write article
4. Deploy

---

# 18. Suggested Components

```bash
Header
Footer
MobileMenu
JobCard
BlogCard
EligibilityChecklist
RelatedJobs
AdBlock
SearchBar
CategoryGrid
Breadcrumbs
FAQSection
NewsletterBox (optional)
```

---

# 19. Analytics Events

Track:

- Homepage job clicks
- Eligibility continue clicks
- Apply clicks
- Search usage
- Category clicks
- Blog reads
- Scroll depth

---

# 20. Security / Trust

- HTTPS only
- No pop-under scripts
- No suspicious outbound links
- Validate external apply URLs
- Spam comment system disabled unless moderated

---

# 21. Future Upgrades

- Newsletter
- Saved jobs
- Telegram alerts
- AI CV builder
- Job alerts by city
- Urdu language version

---

# 22. Launch Checklist

## Before Go Live

- All legal pages live
- AdSense code installed
- GA4 installed
- Search Console verified
- Favicon added
- Sitemap submitted
- 20+ quality pages live
- Contact page works
- Mobile tested
- Page speed tested

---

# 23. Developer Final Notes

This project should feel like a **helpful job discovery platform**, not a click-funnel.

Prioritize:

1. Trust
2. Speed
3. Clean UI
4. Useful content
5. Low friction
6. Ad compliance
7. Easy maintenance

