import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const poppinsFont = Poppins({
  variable: "--poppins",
  subsets: ["latin"],
  weight: '500',
});

export const metadata = {
  title: "SOS AMBULANCE Rabat-Salé - Service Ambulance 24/7",
  description: "SOS AMBULANCE à Rabat-Salé propose un service d'ambulance rapide, fiable, et disponible 24h/24 et 7j/7 pour vos urgences médicales.",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <title>SOS AMBULANCE Rabat-Salé - Service Ambulance 24/7</title>
        <link rel="icon" href="/Assets/favicon.ico" type="image/x-icon" />
        
        {/* Basic SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="SOS AMBULANCE à Rabat-Salé propose un service d'ambulance rapide, fiable, et disponible 24h/24 et 7j/7 pour vos urgences médicales." />
        <meta name="keywords" content="ambulance Rabat salé, Consultation a domicile, Transport ambulance,Hôpital ,Cliniqu" />
        <meta name="author" content="WEBINA DIGITAL" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#16356e" />

        {/* Social Media Meta Tags (Facebook, Twitter, etc.) */}
        <meta property="og:title" content="SOS AMBULANCE Rabat-Salé - Service Ambulance 24/7" />
        <meta property="og:description" content="SOS AMBULANCE à Rabat-Salé vous offre un service rapide et fiable, disponible 24h/24 et 7j/7 pour toutes vos urgences médicales." />
        
        <meta property="og:image" content="/Assets/VB4.svg" />
        <meta property="og:url" content="https://sosamb.com" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="SOS AMBULANCE Rabat-Salé" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/svg" />
        <meta property="og:image:alt" content="Logo de SOS AMBULANCE Rabat-Salé" />

        
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SOS AMBULANCE Rabat-Salé - Service Ambulance 24/7" />
        <meta name="twitter:description" content="Service d'ambulance rapide et fiable à Rabat-Salé, disponible 24h/24 et 7j/7." />
        <meta name="twitter:site" content="@sosambulance" />
        <meta name="twitter:creator" content="@sosambulance" />
        <meta name="twitter:image" content="/Assets/VB4.svg" />


{/* Google tag (gtag.js) */}
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
      
    
        {/* Structured Data for SEO (Schema.org) */}

        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "SOS AMBULANCE Rabat-Salé",
            "description": "Service d'ambulance rapide et fiable, disponible 24h/24 et 7j/7 à Rabat-Salé.",
            "keyword": "ambulance Rabat salé, Consultation a domicile, Transport ambulance,Hôpital ,Cliniqu",
            "url": "https://sosamb.com",
            "logo": "https://sosamb.com/favicon.ico",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+212-0656561701",
              "contactType": "customer service",
              "availableLanguage": "French"
            },
            "sameAs": [
              "https://www.facebook.com/yourambulanceservice",
              "https://twitter.com/yourambulanceservice"
            ]
          }
          `}
        </script>

        {/* Font Awesome for icons */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </head>
      <body className={`${poppinsFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
