import { Instrument_Sans, Manrope } from "next/font/google";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import SmoothScroll from "@/components/shared/SmoothScroll";
import "./globals.css";
import ScrollToTop from "@/components/shared/ScrollToTop";

const instrumentSans = Instrument_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Accusense Advisors",
  description: "Accusense Advisors delivers expert accounting, bookkeeping, tax, advisory consultancy, and corporate services to help businesses manage finances, comply with regulations, and grow with confidence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${instrumentSans.variable} ${manrope.variable} min-h-full flex flex-col font-body antialiased`}
      >
        <SmoothScroll>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </SmoothScroll>
      </body>
    </html>
  );
}
