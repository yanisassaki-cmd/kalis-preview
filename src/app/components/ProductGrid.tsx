import { Link } from "react-router";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { products } from "../data/products";

export function ProductGrid() {
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="bg-[#F5F0E8] px-6 lg:px-16 py-20 lg:py-28">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div 
          className="text-[#8B5E3C] tracking-[0.2em] uppercase mb-4"
          style={{ fontSize: '10px', fontFamily: 'Jost, sans-serif' }}
        >
          NOS CRÉATIONS
        </div>
        <h2 
          className="text-[#2C2420] mb-6"
          style={{ 
            fontFamily: 'Cormorant Garamond, serif', 
            fontSize: 'clamp(40px, 5vw, 56px)',
            fontWeight: 300,
            fontStyle: 'italic'
          }}
        >
          Bouquets signature
        </h2>
        <p 
          className="text-[#7A6A60] max-w-2xl mx-auto"
          style={{ fontSize: '15px', fontFamily: 'Jost, sans-serif', fontWeight: 300 }}
        >
          Chaque composition est unique, pensée selon les saisons, la lumière et votre sensibilité.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {featuredProducts.map((product, index) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -6 }}
          >
            {product.slug ? (
              <Link
                to={`/produit/${product.slug}`}
                className="group block overflow-hidden rounded-[4px] bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {product.badge && (
                    <div
                      className="absolute left-3 top-3 rounded-full bg-[#8B5E3C] px-3 py-1 text-white uppercase tracking-[0.12em]"
                      style={{ fontSize: '9px', fontFamily: 'Jost, sans-serif' }}
                    >
                      {product.badge}
                    </div>
                  )}
                  <div
                    className="absolute bottom-3 left-3 rounded-full bg-white/92 px-4 py-2 text-[#8B5E3C] shadow-lg backdrop-blur-sm"
                    style={{ fontSize: '10px', fontFamily: 'Jost, sans-serif', letterSpacing: '0.14em' }}
                  >
                    VOIR LE PRODUIT
                  </div>
                </div>

                <div className="p-5">
                  <h3
                    className="mb-2 text-[#2C2420]"
                    style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', fontWeight: 400 }}
                  >
                    {product.name}
                  </h3>
                  <p
                    className="mb-3 text-[#7A6A60]"
                    style={{ fontSize: '13px', fontFamily: 'Jost, sans-serif', fontWeight: 300 }}
                  >
                    {product.desc}
                  </p>
                  <div
                    className="text-[#8B5E3C]"
                    style={{ fontSize: '14px', fontFamily: 'Jost, sans-serif', fontWeight: 400 }}
                  >
                    {product.price}
                  </div>
                </div>
              </Link>
            ) : (
              <div className="group overflow-hidden rounded-[4px] bg-white shadow-sm transition-all duration-300 hover:shadow-xl">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {product.badge && (
                    <div
                      className="absolute left-3 top-3 rounded-full bg-[#8B5E3C] px-3 py-1 text-white uppercase tracking-[0.12em]"
                      style={{ fontSize: '9px', fontFamily: 'Jost, sans-serif' }}
                    >
                      {product.badge}
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <h3
                    className="mb-2 text-[#2C2420]"
                    style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', fontWeight: 400 }}
                  >
                    {product.name}
                  </h3>
                  <p
                    className="mb-3 text-[#7A6A60]"
                    style={{ fontSize: '13px', fontFamily: 'Jost, sans-serif', fontWeight: 300 }}
                  >
                    {product.desc}
                  </p>
                  <div
                    className="text-[#8B5E3C]"
                    style={{ fontSize: '14px', fontFamily: 'Jost, sans-serif', fontWeight: 400 }}
                  >
                    {product.price}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center">
        <Link
          to="/collection"
          className="inline-flex bg-transparent border border-[#8B5E3C] text-[#8B5E3C] px-10 py-4 rounded-[2px] tracking-[0.15em] uppercase hover:bg-[#8B5E3C] hover:text-white transition-all duration-300"
          style={{ fontSize: '13px', fontFamily: 'Jost, sans-serif' }}
        >
          VOIR TOUTE LA COLLECTION
        </Link>
      </div>
    </section>
  );
}
