import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { blogPosts } from "../data/blog";

export function BlogIndexPage() {
  const [featuredPost, ...otherPosts] = blogPosts;

  return (
    <main className="bg-[#F5F0E8]">
      <section className="overflow-hidden border-b border-[rgba(139,94,60,0.12)] bg-[linear-gradient(180deg,#fdfaf6_0%,#f5f0e8_100%)] px-6 py-16 lg:px-16 lg:py-20">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10 max-w-3xl">
            <div
              className="mb-4 tracking-[0.18em] uppercase text-[#8B5E3C]"
              style={{ fontSize: "11px", fontFamily: "Jost, sans-serif" }}
            >
              Le média fleuri
            </div>
            <h1
              className="mb-6 text-[#2C2420]"
              style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(48px, 7vw, 84px)", fontWeight: 300, lineHeight: 1 }}
            >
              Le blog Kalis, pensé comme une respiration dans le site.
            </h1>
            <p
              className="max-w-2xl text-[#7A6A60]"
              style={{ fontSize: "16px", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.9 }}
            >
              Conseils, gestes d&apos;atelier et regard sur la composition florale. Une lecture calme, utile et visuelle.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to={`/blog/${featuredPost.slug}`}
              className="grid overflow-hidden rounded-[30px] border border-[rgba(139,94,60,0.12)] bg-white shadow-[0_24px_70px_rgba(44,36,32,0.08)] lg:grid-cols-[1.1fr_0.9fr]"
            >
              <div className="overflow-hidden">
                <ImageWithFallback
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="h-full min-h-[360px] w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center px-8 py-10 lg:px-12">
                <div className="mb-4 flex flex-wrap gap-3 text-[#8B5E3C]">
                  <span style={{ fontSize: "10px", fontFamily: "Jost, sans-serif", letterSpacing: "0.16em" }}>
                    {featuredPost.category}
                  </span>
                  <span style={{ fontSize: "10px", fontFamily: "Jost, sans-serif", letterSpacing: "0.16em" }}>
                    {featuredPost.date}
                  </span>
                  <span style={{ fontSize: "10px", fontFamily: "Jost, sans-serif", letterSpacing: "0.16em" }}>
                    {featuredPost.readingTime}
                  </span>
                </div>
                <h2
                  className="mb-4 text-[#2C2420]"
                  style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(36px, 4vw, 52px)", fontWeight: 300, lineHeight: 1.08 }}
                >
                  {featuredPost.title}
                </h2>
                <p
                  className="mb-6 text-[#7A6A60]"
                  style={{ fontSize: "15px", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.85 }}
                >
                  {featuredPost.coverNote}
                </p>
                <div
                  className="inline-flex items-center gap-2 text-[#8B5E3C]"
                  style={{ fontSize: "12px", fontFamily: "Jost, sans-serif", letterSpacing: "0.14em" }}
                >
                  OUVRIR L&apos;ARTICLE <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {otherPosts.length > 0 && (
        <section className="px-6 py-20 lg:px-16">
          <div className="mx-auto max-w-[1400px] grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {otherPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="overflow-hidden rounded-[24px] border border-[rgba(139,94,60,0.12)] bg-[#FDFAF6] shadow-[0_18px_40px_rgba(44,36,32,0.06)]"
              >
                <ImageWithFallback src={post.image} alt={post.title} className="aspect-[4/3] w-full object-cover" />
                <div className="p-6">
                  <h3
                    className="mb-3 text-[#2C2420]"
                    style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "32px", fontWeight: 300 }}
                  >
                    {post.title}
                  </h3>
                  <p
                    className="text-[#7A6A60]"
                    style={{ fontSize: "14px", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.8 }}
                  >
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
