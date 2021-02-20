import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './Navbar.module.scss'

const Navbar = () => {
      const router = useRouter()
      return (
            <div className = {styles.navbar}> 
                  <div><input type="text"></input></div>
                  <div className={styles.nav__links}>                    
                              <li className={router.pathname == '/' ? 'active' : ''}>
                                    <Link href='/'><a>Top</a></Link>
                              </li>
                              <li className = {router.pathname == '/best' ? 'active': ''}>
                                    <Link href='/best'><a>Best</a></Link>
                              </li>
                              <li className = {router.pathname == '/hot' ? 'active': ''}>
                                    <Link href='/hot'><a>Hot</a></Link>
                              </li>
                  </div>
            </div>
      )
}

export default Navbar
