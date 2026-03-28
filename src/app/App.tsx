import { PropsWithChildren, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router";
import { AnnouncementBar } from "./components/AnnouncementBar";
import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation";
import { CartProvider } from "./context/CartContext";
import { ScrollToTop } from "./components/ScrollToTop";
import { WhatsAppWidget } from "./components/WhatsAppWidget";
import { BlogArticlePage } from "./pages/BlogArticlePage";
import { BlogIndexPage } from "./pages/BlogIndexPage";
import { CartPage } from "./pages/CartPage";
import { HomePage } from "./pages/HomePage";
import { ProductPage } from "./pages/ProductPage";
import { ProductsPage } from "./pages/ProductsPage";
import { DecorationPage } from "./pages/DecorationPage";
import { NotreMetierPage } from "./pages/NotreMetierPage";
import { DeuilPage } from "./pages/DeuilPage";
import { ContactPage } from "./pages/ContactPage";

function RouteScrollRestoration() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

function SiteLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen">
      <AnnouncementBar />
      <Navigation />
      {children}
      <Footer />
      <ScrollToTop />
      <WhatsAppWidget />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <>
        <RouteScrollRestoration />
        <Routes>
          <Route
            path="/"
            element={
              <SiteLayout>
                <HomePage />
              </SiteLayout>
            }
          />
          <Route
            path="/produit/:slug"
            element={
              <SiteLayout>
                <ProductPage />
              </SiteLayout>
            }
          />
          <Route
            path="/collection"
            element={
              <SiteLayout>
                <ProductsPage />
              </SiteLayout>
            }
          />
          <Route
            path="/panier"
            element={
              <SiteLayout>
                <CartPage />
              </SiteLayout>
            }
          />
          <Route
            path="/decoration-cadeaux"
            element={
              <SiteLayout>
                <DecorationPage />
              </SiteLayout>
            }
          />
          <Route
            path="/notre-metier"
            element={
              <SiteLayout>
                <NotreMetierPage />
              </SiteLayout>
            }
          />
          <Route
            path="/deuil"
            element={
              <SiteLayout>
                <DeuilPage />
              </SiteLayout>
            }
          />
          <Route
            path="/contact"
            element={
              <SiteLayout>
                <ContactPage />
              </SiteLayout>
            }
          />
          <Route
            path="/blog"
            element={
              <SiteLayout>
                <BlogIndexPage />
              </SiteLayout>
            }
          />
          <Route
            path="/blog/:slug"
            element={
              <SiteLayout>
                <BlogArticlePage />
              </SiteLayout>
            }
          />
          <Route
            path="*"
            element={
              <SiteLayout>
                <HomePage />
              </SiteLayout>
            }
          />
        </Routes>
      </>
    </CartProvider>
  );
}
