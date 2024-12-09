import localFont from "next/font/local"
import "./globals.css"
import Script from "next/script"
import { GoogleTagManager } from '@next/third-parties/google' 

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const metadata = {
  title: "TFT Leaderboard",
  description:
    "Schon die Indianer pflegten zu sagen 'am Ende der Jagd werden die Hasen gezählt'. ",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-KFQ95DGQ" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KFQ95DGQ"
        height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
        <div className="fixed inset-0 bg-black opacity-70 z-[-1]"></div>
        <div className="fixed inset-0 bg-[url('/background.jpg')] bg-cover bg-center filter blur-lg z-[-2]"></div>
        {children}
      </body>
    </html>
  )
}
