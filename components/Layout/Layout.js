import Navbar from '../Navbar/Navbar'
import styles from './Layout.module.scss'

const Layout = ({ children }) => {
      return (
            <>
            <Navbar/>
            <div className = {styles.container}>
                  {children}
            </div>
            </>
      )
}

export default Layout
