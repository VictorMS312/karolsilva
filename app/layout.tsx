import type { Metadata } from "next"
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google"
import "../globals.css"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Karol Luz — Criadora de Conteúdo UGC",
  description:
    "Conteúdo UGC autêntico que conecta sua marca ao público certo e gera resultados reais. 4+ anos de experiência, 10+ reels entregues.",
  openGraph: {
    title: "Karol Luz — Criadora de Conteúdo UGC",
    description:
      "Transforme a presença digital da sua marca com conteúdo autêntico e estratégico.",
    images: ["/images/karolhero.jpg"],
    locale: "pt_BR",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${cormorant.variable} ${jakarta.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
