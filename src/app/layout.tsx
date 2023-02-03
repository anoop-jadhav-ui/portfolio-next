import "./globals.css";
import { Poppins, Zilla_Slab } from "@next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const zillaSlab = Zilla_Slab({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-zilla",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
