import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import navStyles from './navStyles.module.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Emotional Wellbeing Lab',
  description: 'The website for The University of Western Australia, Kristin Naragon-Gainey and the Emotional Wellbeing Lab',
}

const links = [
  {href: '/', label: 'home'},
  {href: '/about', label: 'about'},
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <header>
        <nav className={navStyles.navbar}>
          <ul className={navStyles.linkList}>
            {links.map(link => (
              <li key={link.href} className={navStyles.navLink}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
