import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';
import Navbar from '../Navbar/Navbar'
import styles from './Layout.module.scss'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const Layout = ({ children, title = 'reddit' }) => {
      return (
            <>
            <Head>
                  <title>{title}</title>
                  <meta></meta>      
                  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==" crossorigin="anonymous" />      
            </Head>
            <Menu></Menu>      
            <Navbar/>
            <div className = {styles.container}>
                  {children}
            </div>
            <Footer/>      
            </>
      )
}

export default Layout
