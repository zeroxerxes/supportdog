import type { Metadata } from "next";
import { Poppins, Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChristmasDiscountPopup from "@/components/ChristmasDiscountPopup";
import { LocalizationProvider } from "@/context/LocalizationContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ESA & Service Dog Hub",
  description: "Find your perfect emotional support or service dog companion. Professionally trained dogs for emotional support and assistance needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${quicksand.variable}`}>
        <LocalizationProvider>
          <Navbar />
          <main style={{ minHeight: '100vh', paddingTop: '80px' }}>
            {children}
          </main>
          <Footer />
          <ChristmasDiscountPopup />
        </LocalizationProvider>
        <script dangerouslySetInnerHTML={{
          __html: `
            // Scroll Reveal Observer
            const observerOptions = {
              threshold: 0.1,
              rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  entry.target.classList.add('visible');
                }
              });
            }, observerOptions);

            const setupObserver = () => {
              document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
                observer.observe(el);
              });
            };

            // Run after DOM is ready
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', setupObserver);
            } else {
              setupObserver();
            }

            // Watch for DOM changes to observe new elements
            const mutationObserver = new MutationObserver(setupObserver);
            mutationObserver.observe(document.body, { childList: true, subtree: true });
        `}} />
      </body>
    </html>
  );
}
