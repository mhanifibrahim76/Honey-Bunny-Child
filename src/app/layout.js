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
    "Klinik tumbuh kembang anak profesional dengan layanan terapi wicara, terapi okupasi, sensori integrasi, psikologi, dan konsultasi tumbuh kembang.",

  verification: {
    google: "7hvkr2WfhiEMys2znkHLABcSlSqLkqUn3KPte0_d-lE",
  },

  keywords: [
    "klinik tumbuh kembang anak",
    "terapi wicara",
    "terapi okupasi",
    "psikologi anak",
    "sensori integrasi",
    "fisioterapi anak",
    "klinik synapse",
  ],

  icons: {
    icon: "/logo.jpeg",
    apple: "/logo.jpeg",
    shortcut: "/logo.jpeg",
  },

  openGraph: {
    title: "Honey Bunny Child – Terapi & Tumbuh Kembang Anak",
    description:
      "Klinik profesional yang menangani tumbuh kembang anak melalui terapi wicara, terapi okupasi, fisioterapi, psikologi, dan asesmen anak.",
    url: "https://domainkamu.com", // ganti kalau sudah ada domain
    siteName: "Honey Bunny Child",
    type: "website",
    locale: "id_ID",
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://domainkamu.com", // ganti nanti
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
