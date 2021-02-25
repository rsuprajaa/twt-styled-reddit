import Link from 'next/link'
import styles from './TrendingSubreddits.module.scss'
const TrendingSubreddits = ({ trendingSubreddits }) => {
      return (
            <div className={styles.container}>
                  <h4>Trending Subreddits</h4>
                  <ul>
                        {trendingSubreddits.map((subreddit, idx) => (
                              <Link href={`/r/${subreddit}`} key = {idx}>
                              <li className={styles.list_item}>r/{subreddit}</li>
                              </Link>
                  ))}
                  </ul>
            </div>
      )
}

export default TrendingSubreddits
