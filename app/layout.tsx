import type { Metadata, Viewport } from "next";
import Link from "next/link";
import "/node_modules/flag-icons/css/flag-icons.min.css";

import Analytics from "@/components/analytics";
import Header from "@/components/header";
import { Nexa } from "@/utils/fonts";

import "the-new-css-reset/css/reset.css";
import "./globals.scss";

// global metadata (default values)
export const metadata: Metadata = {
  title: "Pogoda / klalo.pl",
  description:
    "Prosta aplikacja pogodowa stworzona z wykorzystaniem publicznego API map OpenWeather.",
  icons: {
    icon: ["/favicons/favicon.ico", "/favicons/icon.svg"],
    apple: "/favicons/apple-icon.png",
  },
};

// global viewport
export const viewport: Viewport = {
  themeColor: "#000000",
};

// app project layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={Nexa.className}>
      <body>
        {process.env.NODE_ENV === "production" && <Analytics />}

        <header>
          <Header />
        </header>

        <main>
          <section>{children}</section>
        </main>

        <footer>
          <section>
            <p>
              Stworzone przez{" "}
              <Link href="https://github.com/Quanosek">Jakuba Kłało</Link>
            </p>

            <p>
              Wszelkie prawa zastrzeżone &#169; {new Date().getFullYear()}
              {" | "}
              <Link href="https://www.klalo.pl">domena klalo.pl</Link>
            </p>
          </section>
        </footer>
      </body>
    </html>
  );
}
