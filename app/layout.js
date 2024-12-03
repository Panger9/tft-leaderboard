import localFont from "next/font/local"
import "./globals.css"
import Script from 'next/script'

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
      <head>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-DQK6T956S1" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-DQK6T956S1');`}
      </Script>
      
      
<script async ></script>
<script>
  
</script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <div className="fixed inset-0 bg-black opacity-70 z-[-1]"></div>
        <div className="fixed inset-0 bg-[url('/background.jpg')] bg-cover bg-center filter blur-lg z-[-2]"></div>

        {children}
      </body>
    </html>
  )
}
