export const homeHeroImage =
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80";

const jobImageBySlug: Record<string, string> = {
  "data-entry-operator-lahore":
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
  "office-assistant-karachi":
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
  "customer-chat-support-remote":
    "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=1200&q=80",
  "computer-operator-islamabad":
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
};

const fallbackJobImages = [
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
];

export const blogFallbackImages = [
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80"
];

const blogCategoryImages: Record<string, string> = {
  "career guide": blogFallbackImages[0],
  "cv tips": blogFallbackImages[1],
  "interview prep": blogFallbackImages[2]
};

export const categoryCards = [
  {
    title: "Matric Jobs",
    description: "Jobs suitable for candidates who completed Matric and want to start earning.",
    href: "/category/matric-jobs/",
    image:
      "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Intermediate Jobs",
    description: "Office, support, and private jobs for Inter pass candidates.",
    href: "/category/matric-jobs/",
    image:
      "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Computer Operator",
    description: "Ideal for users with basic computer knowledge, typing, MS Word, or email skills.",
    href: "/category/matric-jobs/",
    image:
      "https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Data Entry Jobs",
    description: "Entry-level opportunities for fresh candidates.",
    href: "/category/matric-jobs/",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Lahore Jobs",
    description: "Beginner-friendly openings in Lahore and surrounding areas.",
    href: "/city/lahore/",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Remote Jobs",
    description: "Online and work-from-home roles when available.",
    href: "/category/matric-jobs/",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80"
  }
];

export function getJobImage(slug: string, index = 0): string {
  return jobImageBySlug[slug] ?? fallbackJobImages[index % fallbackJobImages.length];
}

export function getBlogImage(featuredImage: string, category: string, index = 0): string {
  if (featuredImage.startsWith("https://images.unsplash.com/")) return featuredImage;
  return blogCategoryImages[category.toLowerCase()] ?? blogFallbackImages[index % blogFallbackImages.length];
}
