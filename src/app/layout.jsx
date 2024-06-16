"use client";
import { Inter } from "next/font/google";
import InitProvider from "@/utils/QueryProvider";
import "./globals.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Hear4U Admin",
//   description: "Admin web dashboard for manage application data.",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dark:bg-boxdark-2 dark:text-bodydark">
        <InitProvider>{children}</InitProvider>
      </body>
    </html>
  );
}
