import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hav'dor",
  description: "Experience precision-engineered doors with durability, aesthetics, and performance.",
  keywords: [
    "Hav'dor",
    "Premium Doors",
    "Designer Doors",
    "Moisture Resistant Doors",
    "Termite Proof Doors",
    "Luxury Door Manufacturer"
  ],
  openGraph: {
    title: "Hav'dor | Premium & Durable Designer Doors",
    description:
      "Every Hav'dor door is engineered for lasting strength, sound insulation, and contemporary aesthetics. Discover the modern standard in door technology.",
    url: "https://havdor.com/",
    siteName: "Hav'dor",
    images: [
      {
        url: "/asset/favicon.png",
        width: 800,
        height: 600,
        alt: "Hav'dor Doors",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://havdor.com/",
  },
  icons: {
    icon: "/asset/favicon.png",
    shortcut: "/asset/favicon.png",
    apple: "/asset/favicon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/asset/favicon.png",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* ✅ Google Tag Manager */}
      <Script id="gtm" strategy="beforeInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TXBJQ6CG');
        `}
      </Script>

      {/* ✅ Meta Pixel (Facebook Pixel) */}
      <Script id="fb-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '761861462929836');
          fbq('track', 'PageView');
        `}
      </Script>

      <body className={inter.className}>
        {/* ✅ Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TXBJQ6CG"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* ✅ Meta Pixel (noscript) */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=761861462929836&ev=PageView&noscript=1"
            alt="Meta Pixel"
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}
