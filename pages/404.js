import styles from '../styles/ErrorPage.module.scss'
import Layout from '../components/Layout/Layout'

const ErrorPage = () => {
      return (
            <Layout title = 'Page Not Found'>
                  <div  className={styles.error}>
                  <h2>Sorry, that page doesn’t exist!</h2>
                  </div>
            </Layout>
      )
}

export default ErrorPage
