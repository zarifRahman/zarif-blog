import { cx } from '@/src/utils';
import './globals.css'
import { Inter, Manrope } from "next/font/google";
import Header from '@/src/components/Header';
import Script from "next/script";
import Footer from '../components/Footer';

export const metadata = {
  title: 'Zarif Blog',
  description: 'My personal blog site',
}
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-in",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mr",
});

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={cx(
          inter.variable,
          manrope.variable,
          "font-mr bg-light dark:bg-dark"
        )}
      >
        <Script id='theme-switcher' strategy='beforeInteractive'>
          {`if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }`}
        </Script>
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
