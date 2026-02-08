import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Open_Sans, Merriweather } from "next/font/google";
import { SpeedInsights } from '@vercel/speed-insights/next';
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
  title: "Amelcorp Logistics",
  description: "Sourcing Intelligence, Not Just Logistics.",
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${openSans.variable} ${merriweather.variable}`}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
