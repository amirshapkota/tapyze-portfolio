import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tapyze - Digital Wallet & NFC Payment Solutions",
  description:
    "Revolutionary digital wallet with tap-to-pay technology. Affordable NFC solutions for businesses of all sizes.",
  keywords: "digital wallet, NFC payments, tap to pay, payment solutions, mobile payments",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
