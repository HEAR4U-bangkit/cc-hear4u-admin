import { Inter } from "next/font/google";
import InitProvider from "@/utils/QueryProvider";
import "./globals.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hear4U",
  description: "Bridging to Interact with the World",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="dark:bg-boxdark-2 dark:text-bodydark">
        <InitProvider>{children}</InitProvider>
      </body>
    </html>
  );
}
