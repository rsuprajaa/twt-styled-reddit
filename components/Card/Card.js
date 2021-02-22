import Link from 'next/link'
import styles from './Card.module.scss'

const Card = ({ post }) => {
      const { title, author, subreddit, subreddit_name_prefixed, ups, permalink } = post
      return (
            <div className = {styles.card}>
                  <p className = {styles.desc}><Link href = {`/r/${subreddit}`}><a><span className={styles.subreddit}>{subreddit_name_prefixed}</span></a></Link> &#x2022;  
                  <span className={styles.author}> Posted By <em>{author}</em></span></p>
                  <h4><a href = {`https://www.reddit.com${permalink}`}>{title}</a></h4>
                  <p className={styles.upvotes}> {ups} upvotes</p>
            </div>
      )
}

export default Card
