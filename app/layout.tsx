
import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import { Client, HydrationProvider } from "react-hydration-provider";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import StoreProvider from "./store-provider";

const inter = Cairo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HydrationProvider>
          <Client>
            <StoreProvider>
              {children}
            </StoreProvider>
          </Client>

        </HydrationProvider>
      </body>
    </html>
  );
}
