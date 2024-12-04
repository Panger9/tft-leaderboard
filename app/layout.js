import localFont from "next/font/local"
import "./globals.css"
import Script from "next/script"

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
        <Script>
          {(function (w, d, s, l, i) {
            w[l] = w[l] || []
            w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" })
            var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s),
              dl = l != "dataLayer" ? "&l=" + l : ""
            j.async = true
            j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl
            f.parentNode.insertBefore(j, f)
          })(window, document, "script", "dataLayer", "GTM-KFQ95DGQ")}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DQK6T956S1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-DQK6T956S1');`}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KFQ95DGQ"
            height="0"
            width="0"
            style="display:none;visibility:hidden"
          ></iframe>
        </noscript>
        <div className="fixed inset-0 bg-black opacity-70 z-[-1]"></div>
        <div className="fixed inset-0 bg-[url('/background.jpg')] bg-cover bg-center filter blur-lg z-[-2]"></div>

        {children}
      </body>
    </html>
  )
}
