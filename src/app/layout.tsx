import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/layout/header";
import { CartProvider } from "@/context/cart-provider";
import ClientOnly from "./components/client-only";

export const metadata: Metadata = {
  title: "Taggerz Hub",
  description: "Welcome to Taggerz Hub!",
};

function FooterYear() {
  const [year, setYear] = React.useState(new Date().getFullYear());

  React.useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return <span id="year">{year}</span>;
}


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
      </head>
      <body>
        <CartProvider>
          <Header />
          {children}
          <footer>
            <div className="container">
              <p>
                ©{" "}
                <ClientOnly>
                  <>{new Date().getFullYear()}</>
                </ClientOnly>{" "}
                Taggerz Hub. All rights reserved.
              </p>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
