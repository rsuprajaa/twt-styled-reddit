import SubredditAbout from './SubredditAbout'
import SubredditPosts from './SubredditPosts'
import styles from './SubredditTab.module.scss'
import TrendingSubreddits from './TrendingSubreddits'

const SubredditTab = ({ about, posts, trendingSubreddits }) => {
      return (
            <div className = {styles.subreddittab}>
                  <SubredditAbout about={about}/>
                  <SubredditPosts posts={posts} />
                  <TrendingSubreddits trendingSubreddits={trendingSubreddits}/>
            </div>
      )
}

export default SubredditTab
