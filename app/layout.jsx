import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import { GlobalStateProvider } from "@/hooks/useGlobalState";
import "./globals.css";

const montserratFont = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const hiatusFont = localFont({
  src: [{ path: "../public/fonts/Hiatus.ttf" }],
  variable: "--font-hiatus",
});

export const metadata = {
  title: "Sandeep Sharma",
  description: "May the force be with you!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GlobalStateProvider>
        <body
          className={`${montserratFont.variable} ${hiatusFont.variable} antialiased`}
        >
          {children}
        </body>
      </GlobalStateProvider>
    </html>
  );
}
