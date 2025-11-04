import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const poppinsFont = Poppins({
  variable: "--poppins",
  subsets: ["latin"],
  weight: "500",
});

export const metadata = {
  title: "SOS AMBULANCE Rabat-Salé - Service Ambulance 24/7",
  description:
    "SOS AMBULANCE à Rabat-Salé propose un service d'ambulance rapide, fiable, et disponible 24h/24 et 7j/7 pour vos urgences médicales.",
  keywords: "ambulance Rabat Salé, consultation à domicile, transport ambulance, hôpital, clinique",
  authors: [{ name: "WEBINA DIGITAL" }],
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "SOS AMBULANCE Rabat-Salé - Service Ambulance 24/7",
    description: "SOS AMBULANCE à Rabat-Salé vous offre un service rapide et fiable, disponible 24h/24 et 7j/7 pour toutes vos urgences médicales.",
    url: "https://ambulancerabatsale.com",
    siteName: "SOS AMBULANCE Rabat-Salé",
    images: [
      {
        url: "https://ambulancerabatsale.com/Assets/VB4.svg",
        width: 1200,
        height: 630,
        alt: "Logo de SOS AMBULANCE Rabat-Salé",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SOS AMBULANCE Rabat-Salé - Service Ambulance 24/7",
    description: "Service d'ambulance rapide et fiable à Rabat-Salé, disponible 24h/24 et 7j/7.",
    site: "@sosambulance",
    creator: "@sosambulance",
    images: ["https://ambulancerabatsale.com/Assets/VB4.svg"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#16356e",
};

export default function RootLayout({ children }) {
  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SOS AMBULANCE Rabat-Salé",
    description:
      "Service d'ambulance rapide et fiable, disponible 24h/24 et 7j/7 à Rabat-Salé.",
    url: "https://ambulancerabatsale.com",
    logo: "https://ambulancerabatsale.com/favicon.ico",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+212-0752921397",
      contactType: "customer service",
      availableLanguage: "French",
    },
    sameAs: [
      "https://www.facebook.com/ambulancerabatsale",
      "https://twitter.com/ambulancerabatsale",
    ],
  };

  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={poppinsFont.variable} suppressHydrationWarning>
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaOrg),
          }}
        />
        
        {/* Google Tag */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-16912349818"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16912349818');
          `}
        </Script>
        
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
