import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Footer from "@/src/components/layout/Footer";
import Header from "@/src/components/layout/Header";
import LetUsHelp from "@/src/components/sections/LetUsHelp";
import Testimonials from "@/src/components/sections/Testimonials";
import { blogPosts } from "@/src/data/blogs";

import styles from "./blog-detail.module.css";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | EasyBoyWeb`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      images: [
        {
          url: post.featuredImage,
          width: 1200,
          height: 630,
          alt: post.imageAlt,
        },
      ],
      type: "article",
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const sameCategoryPosts = blogPosts.filter(
    (item) => item.categoryKey === post.categoryKey && item.slug !== post.slug,
  );

  const relatedPosts =
    sameCategoryPosts.length > 0
      ? sameCategoryPosts.slice(0, 3)
      : blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

  const articleUrl = `https://easyboyweb.com/blog/${post.slug}`;
  const shareLinks = [
    {
      name: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`,
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M13.5 8.25V6.3c0-.9.6-1.1 1.1-1.1H16V2.3h-2.7c-2.8 0-4.3 1.8-4.3 4.3v1.7H6.8v3.2h2.2V21h3.7v-9.5h2.6l.4-3.2h-3z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(articleUrl)}&text=${encodeURIComponent(post.title)}`,
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.9 2h3.5l-7.7 8.8 9 12.2h-7.1l-5.5-7.7-6.3 7.7H-1l7.8-8.9L-1 2h7.2l4.9 7 5.8-7zm-1.3 18.4h1.9L7.1 3.5H5.1l12.5 16.9z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 2.5h10A4.5 4.5 0 0 1 21.5 7v10A4.5 4.5 0 0 1 17 21.5H7A4.5 4.5 0 0 1 2.5 17V7A4.5 4.5 0 0 1 7 2.5zm0 2.25A2.25 2.25 0 0 0 4.75 7v10A2.25 2.25 0 0 0 7 19.25h10A2.25 2.25 0 0 0 19.25 17V7A2.25 2.25 0 0 0 17 4.75H7zm5 2.5A5.25 5.25 0 1 1 12 19.5 5.25 5.25 0 0 1 12 9.75zm0 2.25a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.25-2.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <Header variant="blogDetail" className={styles.blogDetailHeader} />

      <main className={styles.blogDetailPage}>
        <div className={`container ${styles.blogDetailShell}`}>
          <div className={styles.blogDetailHeaderRow}>
            <Link href="/blog" className={`${styles.blogDetailBackLink} font-inter`}>
              ← Back to Blog
            </Link>
          </div>

          <article className={styles.blogDetailArticle}>
            <header className={styles.blogDetailHeaderContent}>
              <span className={`${styles.blogDetailCategory} font-inter`}>{post.category}</span>
              <h1 className={`${styles.blogDetailTitle} font-aloevera`}>{post.title}</h1>

              <div className={styles.blogDetailMetaRow}>
                <div className={`${styles.blogDetailMeta} font-inter`}>
                  <span>By {post.author}</span>
                  <span>{post.publishedDate}</span>
                  <span>{post.readingTime}</span>
                </div>

                <div className={styles.blogDetailShare} aria-label="Share this article">
                  {shareLinks.map((share) => (
                    <a
                      key={share.name}
                      href={share.href}
                      target={share.name === "Instagram" ? undefined : "_blank"}
                      rel={share.name === "Instagram" ? undefined : "noreferrer noopener"}
                      aria-label={`Share on ${share.name}`}
                      title={`Share on ${share.name}`}
                      className={styles.blogDetailShareLink}
                    >
                      {share.icon}
                    </a>
                  ))}
                </div>
              </div>
            </header>

            <div className={styles.blogDetailFeaturedImage}>
              <Image
                src={post.featuredImage}
                alt={post.imageAlt}
                width={1200}
                height={700}
                priority
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </div>

            <div className={`${styles.blogDetailContent} font-inter`}>
              {post.content.map((block, index) => {
                if (block.type === "heading") {
                  return (
                    <h2 key={`${post.slug}-heading-${index}`} className={styles.blogDetailHeading}>
                      {block.text}
                    </h2>
                  );
                }

                if (block.type === "subheading") {
                  return (
                    <h3 key={`${post.slug}-subheading-${index}`} className={styles.blogDetailSubheading}>
                      {block.text}
                    </h3>
                  );
                }

                if (block.type === "list") {
                  return (
                    <div key={`${post.slug}-list-${index}`} className={styles.blogDetailListWrap}>
                      {block.title ? <p className={styles.blogDetailListTitle}>{block.title}</p> : null}
                      <ul className={styles.blogDetailList}>
                        {block.items.map((item, itemIndex) => (
                          <li key={`${post.slug}-list-item-${itemIndex}`}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  );
                }

                return (
                  <p key={`${post.slug}-paragraph-${index}`} className={styles.blogDetailParagraph}>
                    {block.text}
                  </p>
                );
              })}
            </div>
          </article>

          <section className={styles.blogRelatedSection} aria-labelledby="related-posts-title">
            <div className={styles.blogRelatedHeader}>
              <h2 id="related-posts-title" className="font-aloevera">
                You May Also Like
              </h2>
            </div>

            <div className={styles.blogRelatedGrid}>
              {relatedPosts.map((relatedPost) => (
                <article key={relatedPost.id} className={styles.blogRelatedCard}>
                  <div className={styles.blogRelatedImage}>
                    <Image
                      src={relatedPost.featuredImage}
                      alt={relatedPost.imageAlt}
                      width={600}
                      height={360}
                      sizes="(max-width: 768px) 100vw, 360px"
                    />
                  </div>

                  <div className={styles.blogRelatedBody}>
                    <span className={`${styles.blogRelatedCategory} font-inter`}>{relatedPost.category}</span>
                    <Link href={`/blog/${relatedPost.slug}`} className={`${styles.blogRelatedTitle} font-aloevera`}>
                      {relatedPost.title}
                    </Link>
                    <p className="font-inter">{relatedPost.excerpt}</p>
                    <Link href={`/blog/${relatedPost.slug}`} className={`${styles.blogRelatedLink} font-inter`}>
                      Read More
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>

        </div>

        <section className={styles.blogDetailCtaFull}>
          <div className={`container ${styles.blogDetailCtaWrap}`}>
            <div className={styles.blogDetailCtaImage}>
              <Image
                src="/imgs/attract-convert-retain-leads.png"
                alt="Attract, convert, and retain leads illustration"
                width={560}
                height={420}
              />
            </div>

            <div className={styles.blogDetailCtaContent}>
              <h2 className={`${styles.blogDetailCtaHeading} font-aloevera`}>
                We build websites and mobile apps that <span>Attract, Convert, and Retain Leads</span> so you can focus on building your business!
              </h2>

              <Link href="/contact" className={`${styles.blogDetailCtaButton} font-inter`}>
                Get a Free Estimate <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>

        <div className={styles.blogDetailHelpFull}>
          <LetUsHelp />
        </div>

        <div className={styles.blogDetailTestimonialsFull}>
          <Testimonials />
        </div>
      </main>

      <Footer />
    </>
  );
}