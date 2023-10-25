import styles from './page.module.css'
import Link from 'next/link'


const links = [
  {href: '/', label: 'home'},
  {href: '/about', label: 'about'},
  {href: '/publications', label: 'publications'},
  {href: '/students', label: 'students'},
  {href: '/contact', label: 'contact'},
]

export default function Home() {
  return (
    <main className={styles.main}>
           <header>
        <nav className={styles.navbar}>
          <img
            src='http://emotionalwellbeinglab.com.au/wp-content/uploads/2020/09/cropped-Two-logos-1024x152.png' 
            alt='emotional wellbeing lab logo'
            className={styles.navImg}
          />
          <ul className={styles.linkList}>
            {links.map(link => (
              <li key={link.href} className={styles.navLink}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
     <p>hello</p>
     <footer>
        35 Stirling Hwy, Crawley WA 6009 | Phone: (08) 6488 3096 | Email: wellbeinglabUWA@gmail.com
      </footer>
    </main>
  )
}
