"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import Footer from "@/src/components/layout/Footer";
import Header from "@/src/components/layout/Header";
import { blogPosts } from "@/src/data/blogs";

type TechnologyCategory =
  | "all"
  | "mobile"
  | "website"
  | "software"
  | "ai"
  | "seo";

const technologyCategories: {
  label: string;
  value: TechnologyCategory;
}[] = [
  { label: "All", value: "all" },
  { label: "Mobile Apps", value: "mobile" },
  { label: "Web Development", value: "website" },
  { label: "Custom Software", value: "software" },
  { label: "Artificial Intelligence", value: "ai" },
  { label: "SEO & Automation", value: "seo" },
];

export default function BlogPage() {
  const [activeTechnology, setActiveTechnology] = useState<TechnologyCategory>("all");

  const filteredTechnologyCards = useMemo(
    () =>
      activeTechnology === "all"
        ? blogPosts
        : blogPosts.filter((card) => card.categoryKey === activeTechnology),
    [activeTechnology],
  );

  return (
    <main className="blog-index-page">
      <Header />

      <section className="blog-banner-section blog-hero">
        <div className="container">
          <div className="work-banner-content blog-hero-copy">
            <div className="blog-banner-content blog-hero-copy-group">
              <h1 className="blog-banner-heading blog-hero-title font-aloevera">Blog</h1>

              <p className="blog-banner-subtitle blog-hero-subtitle font-inter">
                A helpful collection of tips and resources
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="technology-cards-section">
        <div className="container">
          <div className="technology-cards-content">
            <div
              className="technology-category-buttons"
              role="tablist"
              aria-label="Technology categories"
            >
              {technologyCategories.map((category) => (
                <button
                  type="button"
                  role="tab"
                  key={category.value}
                  aria-selected={activeTechnology === category.value}
                  className={`technology-category-button font-inter ${
                    activeTechnology === category.value ? "technology-category-button-active" : ""
                  }`}
                  onClick={() => setActiveTechnology(category.value)}
                >
                  {category.label}
                </button>
              ))}
            </div>

            <div className="technology-cards-grid">
              {filteredTechnologyCards.map((card) => (
                <article className="technology-blog-card" key={card.id}>
                  <div className="technology-card-image">
                    <Image
                      src={card.featuredImage}
                      alt={card.imageAlt}
                      fill
                      sizes="(max-width: 786px) calc(100vw - 32px), (max-width: 1140px) 47vw, 470px"
                    />
                  </div>

                  <div className="technology-card-body">
                    <Link href={`/blog/${card.slug}`} className="technology-card-title-link">
                      <h3 className="font-inter">{card.title}</h3>
                    </Link>

                    <p className="font-inter">{card.excerpt}</p>

                    <Link href={`/blog/${card.slug}`} className="technology-read-more font-inter">
                      Read More
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {filteredTechnologyCards.length === 0 && (
              <p className="technology-empty-message font-inter">
                No articles are available in this category.
              </p>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
