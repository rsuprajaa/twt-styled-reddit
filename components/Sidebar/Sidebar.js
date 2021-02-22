import Link from 'next/link'
import styles from './Sidebar.module.scss'

const Sidebar = ({ subreddits }) => {
      return (
            <div className = {styles.sidebar}> 
                  <h4 className={styles.sidebar_heading}>Popular Subcommunities</h4>
                  <ul>
                        {subreddits.slice(0,10).map((subreddit) => (
                              <li key = {subreddit.data.id}>
                                    <Link href= {`/${subreddit.data.display_name_prefixed}`}>
                                          <a>{subreddit.data.display_name_prefixed}</a>
                                    </Link>
                              </li>
                        ))}
                  </ul>
            </div>
      )
}

export default Sidebar