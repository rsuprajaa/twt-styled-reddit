import Link from 'next/link'
import styles from './Card.module.scss'

const Card = ({ post }) => {
      const {title, author, subreddit_name_prefixed, ups} = post
      return (
            <div className = {styles.card}>
                  <p className = {styles.desc}><Link href = {subreddit_name_prefixed}><a><span className={styles.subreddit}>{subreddit_name_prefixed}</span></a></Link> &#x2022;  
                  <span className={styles.author}> Posted By <em>{author}</em></span></p>
                  <h4>{title}</h4>
                  <p className={styles.upvotes}> {ups} upvotes</p>
            </div>
      )
}

export default Card
