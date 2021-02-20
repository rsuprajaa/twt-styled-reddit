import Card from '../Card/Card'
import styles from './Exploretab.module.scss'

const Exploretab = ({ posts }) => {
      return (
            <div className={styles.center_tab}>
                  {posts.map((post) => (
                        <Card post = {post.data}/>
                 ))}
            </div>
      )
}

export default Exploretab
