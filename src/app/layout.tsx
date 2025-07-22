import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/layout/header";
import Script from "next/script";
import { CartProvider } from "@/context/cart-provider";

export const metadata: Metadata = {
  title: "Taggerz Hub",
  description: "Welcome to Taggerz Hub!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=PT+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <Script src="https://cdn.jsdelivr.net/npm/lucide@latest/dist/lucide.min.js" />
      </head>
      <body>
        <CartProvider>
          <Header />
          {children}
          <footer>
            <div className="container">
              <p>
                © <span id="year">{new Date().getFullYear()}</span> Taggerz Hub.
                All rights reserved.
              </p>
            </div>
          </footer>
          <Script id="lucide-icons" strategy="lazyOnload">
            {`lucide.createIcons();`}
          </Script>
        </CartProvider>
      </body>
    </html>
  );
}