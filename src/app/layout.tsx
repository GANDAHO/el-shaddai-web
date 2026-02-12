import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ['300', '400', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "EL-SHADDAÏ | L'Excellence par la Rigueur",
  description: "Site officiel du Complexe Scolaire EL-SHADDAÏ - Cotonou.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}