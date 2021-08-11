import Link from 'next/link'
import styles from './TrendingSubreddits.module.scss'
import Sidebar from '../Sidebar/Sidebar'

const TrendingSubreddits = ({ trendingSubreddits }) => {
      return (
            <div className={styles.container}>
                 {trendingSubreddits.length > 0 && <> <h4>Trending Subreddits</h4>
                  <ul>
                        {trendingSubreddits.map((subreddit, idx) => (
                              <Link href={`/r/${subreddit}`} key = {idx}>
                              <li className={styles.list_item}>r/{subreddit}</li>
                              </Link>
                  ))}
                  </ul></>}
            </div>
      )
}

export default TrendingSubreddits
