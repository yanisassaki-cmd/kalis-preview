import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { featuredBlogPost } from "../data/blog";

export function BlogTeaser() {
  return (
    <section className="bg-[#FDFAF6] px-6 py-20 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div
              className="mb-3 tracking-[0.18em] uppercase text-[#8B5E3C]"
              style={{ fontSize: "10px", fontFamily: "Jost, sans-serif" }}
            >
              Journal floral
            </div>
            <h2
              className="text-[#2C2420]"
              style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(38px, 5vw, 56px)", fontWeight: 300 }}
            >
              Des articles posés en bas du site, sans casser l&apos;équilibre.
            </h2>
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-[#8B5E3C] transition-colors hover:text-[#5C3D2E]"
            style={{ fontSize: "12px", fontFamily: "Jost, sans-serif", letterSpacing: "0.14em" }}
          >
            VOIR LE BLOG <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to={`/blog/${featuredBlogPost.slug}`}
            className="grid overflow-hidden rounded-[30px] border border-[rgba(139,94,60,0.12)] bg-[linear-gradient(135deg,#f8eee4_0%,#fdfaf6_55%,#f3e6d8_100%)] shadow-[0_22px_70px_rgba(44,36,32,0.08)] lg:grid-cols-[1.05fr_0.95fr]"
          >
            <div className="relative min-h-[320px] overflow-hidden">
              <ImageWithFallback
                src={featuredBlogPost.image}
                alt={featuredBlogPost.title}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(44,36,32,0.22)_100%)]" />
            </div>

            <div className="flex flex-col justify-center px-8 py-10 lg:px-12">
              <div className="mb-4 flex flex-wrap gap-3 text-[#8B5E3C]">
                <span style={{ fontSize: "10px", fontFamily: "Jost, sans-serif", letterSpacing: "0.16em" }}>
                  {featuredBlogPost.category}
                </span>
                <span style={{ fontSize: "10px", fontFamily: "Jost, sans-serif", letterSpacing: "0.16em" }}>
                  {featuredBlogPost.date}
                </span>
                <span style={{ fontSize: "10px", fontFamily: "Jost, sans-serif", letterSpacing: "0.16em" }}>
                  {featuredBlogPost.readingTime}
                </span>
              </div>
              <h3
                className="mb-4 text-[#2C2420]"
                style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(34px, 4.2vw, 52px)", fontWeight: 300, lineHeight: 1.05 }}
              >
                {featuredBlogPost.title}
              </h3>
              <p
                className="mb-6 max-w-xl text-[#7A6A60]"
                style={{ fontSize: "15px", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.85 }}
              >
                {featuredBlogPost.excerpt}
              </p>
              <div
                className="inline-flex items-center gap-2 text-[#8B5E3C]"
                style={{ fontSize: "12px", fontFamily: "Jost, sans-serif", letterSpacing: "0.14em" }}
              >
                LIRE L&apos;ARTICLE <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
