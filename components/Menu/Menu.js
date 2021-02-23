import Link from 'next/link'
import { GoHome } from 'react-icons/go'
import { FaHashtag } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'
import styles from './Menu.module.scss'
import { useRouter } from 'next/router'

const Menu = () => {
      const router = useRouter()
      return (
            <div className = {styles.menu}>
                  <Link href = '/'><a><div className={styles.logo_wrapper}><img src='/bat.png' alt = "logo" className = {styles.logo}></img></div></a></Link>
                  
                  <Link href='/'><a className={router.pathname === '/' ? 'active_menu' : ''}>
                        <div className={styles.menu_option}>
                              <div className={styles.icon}><GoHome></GoHome></div>
                              <div className={styles.option}>Home</div>
                        </div>
                        </a></Link>
                  <Link href='/top'><a className={(router.pathname === '/top' || router.pathname === '/best' || router.pathname === '/hot') ? 'active_menu' : ''}>
                        <div className={styles.menu_option}>
                              <div className={styles.icon}><FaHashtag></FaHashtag></div>
                              <div className={styles.option}>Explore</div>
                        </div>
                  </a></Link>
                  <a href='https://github.com/supraja-ram/reddit-wrapper'>
                        <div className={styles.menu_option}>
                              <div className={styles.icon}><FiGithub></FiGithub></div>
                              <div className={styles.option}>Github Repo</div>
                        </div>
                  </a>
            </div>
      )
}

export default Menu
