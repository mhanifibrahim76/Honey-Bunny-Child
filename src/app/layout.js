import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Honey Bunny Child",
    template: "%s | Honey Bunny Child",
  },

  description:
    "Honey Bunny Child Development Center menyediakan layanan terapi wicara, terapi okupasi, sensori integrasi, ABA, fisioterapi, serta asesmen tumbuh kembang anak.",

  verification: {
    google: "",
  },

  keywords: [
    "Honey Bunny Child",
    "Honey Bunny Child Development Center",
    "klinik tumbuh kembang anak",
    "terapi wicara anak",
    "terapi okupasi anak",
    "terapi sensori integrasi",
    "terapi perilaku ABA",
    "fisioterapi anak",
    "psikologi anak",
    "asesmen tumbuh kembang anak",
    "klinik anak berkebutuhan khusus",
    "speech delay",
    "autisme",
    "adhd",
  ],

  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
    shortcut: "/favicon.ico",
  },

  openGraph: {
    title: "Honey Bunny Child – Terapi & Tumbuh Kembang Anak",
    description:
      "Honey Bunny Child Development Center menyediakan layanan terapi wicara, terapi okupasi, sensori integrasi, ABA, fisioterapi, serta asesmen tumbuh kembang anak.",
    url: "https://www.honeybunnytherapy.com", // ganti kalau sudah ada domain
    siteName: "Honey Bunny Child",
    type: "website",
    locale: "id_ID",
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://www.honeybunnytherapy.com", // ganti nanti
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
