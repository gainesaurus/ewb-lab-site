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
              <li key={link.href}>
                <Link
                  className={styles.navLink}
                  href={link.href}>{link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <div className={styles.homeImgContainer}>
        <img
          src='https://images.unsplash.com/photo-1538385838701-51d6b218a676?auto=format&fit=crop&q=80&w=2610&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='Quay Train Station aerial photo'
          className={styles.homeImg}
        />
        <div className={styles.greetingBox}>
          <h2>Emotional Wellbeing Lab</h2>
          <button className={styles.button}>GET TO KNOW US</button>
        </div>
      </div>
      <footer>
        35 Stirling Hwy, Crawley WA 6009 | Phone: (08) 6488 3096 | Email: wellbeinglabUWA@gmail.com
      </footer>
    </main>
  )
}
