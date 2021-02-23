import Card from '../Card/Card'
import Sidebar from '../Sidebar/Sidebar'
import styles from './Exploretab.module.scss'

const Exploretab = ({ posts, popularSubreddits }) => {
      return (
            <div className={styles.grid_layout}>
                  <div className={styles.center_tab}>
                        {posts.map((post) => (
                              <Card key={post.data.id} post = {post.data}/>
                  ))}
                  </div>
                  <div className = {styles.sidebar}>
                        <Sidebar subreddits={popularSubreddits}/>
                  </div>
            </div>
      )
}

export default Exploretab
