import { Link, useParams } from "react-router";
import { ArrowLeft } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { blogPosts } from "../data/blog";

export function BlogArticlePage() {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <main className="bg-[#F5F0E8] px-6 py-24 lg:px-16">
        <div className="mx-auto max-w-3xl rounded-[28px] border border-[rgba(139,94,60,0.14)] bg-[#FDFAF6] px-8 py-16 text-center shadow-[0_24px_80px_rgba(44,36,32,0.08)]">
          <div
            className="mb-4 tracking-[0.18em] uppercase text-[#8B5E3C]"
            style={{ fontSize: "11px", fontFamily: "Jost, sans-serif" }}
          >
            Article introuvable
          </div>
          <h1
            className="mb-4 text-[#2C2420]"
            style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(42px, 6vw, 64px)", fontWeight: 300 }}
          >
            Cet article n&apos;est plus disponible.
          </h1>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 rounded-[2px] border border-[#8B5E3C] px-6 py-3 text-[#8B5E3C] transition-all duration-300 hover:bg-[#8B5E3C] hover:text-white"
            style={{ fontSize: "12px", fontFamily: "Jost, sans-serif", letterSpacing: "0.14em" }}
          >
            <ArrowLeft className="h-4 w-4" />
            RETOUR AU BLOG
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#F5F0E8]">
      <section className="border-b border-[rgba(139,94,60,0.12)] bg-[linear-gradient(180deg,#fdfaf6_0%,#f5f0e8_100%)] px-6 py-12 lg:px-16 lg:py-16">
        <div className="mx-auto max-w-[1200px]">
          <Link
            to="/blog"
            className="mb-8 inline-flex items-center gap-2 text-[#8B5E3C] transition-colors hover:text-[#5C3D2E]"
            style={{ fontSize: "11px", fontFamily: "Jost, sans-serif", letterSpacing: "0.16em" }}
          >
            <ArrowLeft className="h-4 w-4" />
            RETOUR AU BLOG
          </Link>

          <div className="mb-6 flex flex-wrap gap-3 text-[#8B5E3C]">
            <span style={{ fontSize: "10px", fontFamily: "Jost, sans-serif", letterSpacing: "0.16em" }}>{post.category}</span>
            <span style={{ fontSize: "10px", fontFamily: "Jost, sans-serif", letterSpacing: "0.16em" }}>{post.date}</span>
            <span style={{ fontSize: "10px", fontFamily: "Jost, sans-serif", letterSpacing: "0.16em" }}>{post.readingTime}</span>
          </div>

          <h1
            className="mb-6 max-w-4xl text-[#2C2420]"
            style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(48px, 7vw, 82px)", fontWeight: 300, lineHeight: 1 }}
          >
            {post.title}
          </h1>
          <p
            className="max-w-3xl text-[#7A6A60]"
            style={{ fontSize: "17px", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.9 }}
          >
            {post.coverNote}
          </p>
        </div>
      </section>

      <section className="px-6 py-12 lg:px-16 lg:py-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="overflow-hidden rounded-[30px] border border-[rgba(139,94,60,0.12)] shadow-[0_24px_70px_rgba(44,36,32,0.08)]">
            <ImageWithFallback src={post.image} alt={post.title} className="h-[320px] w-full object-cover md:h-[520px]" />
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-16">
        <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[260px_1fr]">
          <aside className="lg:sticky lg:top-28 lg:h-fit">
            <div className="rounded-[24px] border border-[rgba(139,94,60,0.12)] bg-[#FDFAF6] p-6">
              <div
                className="mb-4 tracking-[0.18em] uppercase text-[#8B5E3C]"
                style={{ fontSize: "10px", fontFamily: "Jost, sans-serif" }}
              >
                Lecture
              </div>
              <p
                className="text-[#7A6A60]"
                style={{ fontSize: "14px", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.8 }}
              >
                {post.excerpt}
              </p>
            </div>
          </aside>

          <article className="rounded-[30px] bg-[#FDFAF6] px-6 py-8 shadow-[0_18px_60px_rgba(44,36,32,0.06)] md:px-10 md:py-12">
            <p
              className="mb-10 text-[#5F4B3E]"
              style={{ fontSize: "18px", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.95 }}
            >
              {post.intro}
            </p>

            <div className="space-y-10">
              {post.sections.map((section) => (
                <section key={section.heading}>
                  <h2
                    className="mb-4 text-[#2C2420]"
                    style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(34px, 4vw, 44px)", fontWeight: 300 }}
                  >
                    {section.heading}
                  </h2>
                  <div className="space-y-5">
                    {section.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-[#5F4B3E]"
                        style={{ fontSize: "16px", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.95 }}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
