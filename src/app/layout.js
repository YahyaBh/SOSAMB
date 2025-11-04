import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Head from "next/head"; 
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
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <Head>
        <title>SOS AMBULANCE Rabat-Salé - Service Ambulance 24/7</title>
        <meta
          name="description"
          content="SOS AMBULANCE à Rabat-Salé propose un service d'ambulance rapide, fiable, et disponible 24h/24 et 7j/7 pour vos urgences médicales."
        />
        <meta
          name="keywords"
          content="ambulance Rabat Salé, consultation à domicile, transport ambulance, hôpital, clinique"
        />
        <meta name="author" content="WEBINA DIGITAL" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#16356e" />

        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="SOS AMBULANCE Rabat-Salé - Service Ambulance 24/7"
        />
        <meta
          property="og:description"
          content="SOS AMBULANCE à Rabat-Salé vous offre un service rapide et fiable, disponible 24h/24 et 7j/7 pour toutes vos urgences médicales."
        />
        <meta property="og:image" content="https://ambulancerabatsale.com/Assets/VB4.svg" />
        <meta property="og:url" content="https://ambulancerabatsale.com" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta
          property="og:site_name"
          content="SOS AMBULANCE Rabat-Salé"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/svg+xml" />
        <meta
          property="og:image:alt"
          content="Logo de SOS AMBULANCE Rabat-Salé"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="SOS AMBULANCE Rabat-Salé - Service Ambulance 24/7"
        />
        <meta
          name="twitter:description"
          content="Service d'ambulance rapide et fiable à Rabat-Salé, disponible 24h/24 et 7j/7."
        />
        <meta name="twitter:site" content="@sosambulance" />
        <meta name="twitter:creator" content="@sosambulance" />
        <meta
          name="twitter:image"
          content="https://ambulancerabatsale.com/Assets/VB4.svg"
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

        {/* Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify({
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
          })}
        </script>

        {/* FontAwesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>
      <body className={poppinsFont.variable}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
