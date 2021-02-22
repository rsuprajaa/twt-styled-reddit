import SubredditAbout from './SubredditAbout'
import SubredditPosts from './SubredditPosts'
import styles from './SubredditTab.module.scss'

const SubredditTab = ({about, posts}) => {
      return (
            <div className = {styles.subreddittab}>
                  <SubredditAbout about={about}/>
                  <SubredditPosts posts={posts}/>
            </div>
      )
}

export default SubredditTab
