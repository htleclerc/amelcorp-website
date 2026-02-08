import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Open_Sans, Merriweather } from "next/font/google";
import "../globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-merriweather",
  display: "swap",
});

export const metadata = {
  title: "Amelcorp Logistics Inc | Sourcing Intelligence",
  description: "Sourcing Intelligence, Not Just Logistics. We bridge the gap between global demand and reliable supply chains with expert sourcing and QC services.",
  openGraph: {
    title: "Amelcorp Logistics Inc",
    description: "Sourcing Intelligence, Not Just Logistics.",
    url: "https://armelcorp.com",
    siteName: "Amelcorp",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amelcorp Logistics Inc",
    description: "Sourcing Intelligence, Not Just Logistics.",
    images: ["/assets/og-image.png"],
  },
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${openSans.variable} ${merriweather.variable}`}>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
