import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import navStyles from './navStyles.module.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Emotional Wellbeing Lab',
  description: 'The website for The University of Western Australia, Dr. Kristin Naragon-Gainey and the Emotional Wellbeing Lab',
}

const links = [
  {href: '/', label: 'home'},
  {href: '/about', label: 'about'},
  {href: '/publications', label: 'publications'},
  {href: '/students', label: 'students'},
  {href: '/contact', label: 'contact'},
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
          <img
            src='http://emotionalwellbeinglab.com.au/wp-content/uploads/2020/09/cropped-Two-logos-1024x152.png' 
            alt='emotional wellbeing lab logo'
            className={navStyles.navImg}
          />
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
      <footer>
        35 Stirling Hwy, Crawley WA 6009 | Phone: (08) 6488 3096 | Email: wellbeinglabUWA@gmail.com
      </footer>
    </html>
  )
}
