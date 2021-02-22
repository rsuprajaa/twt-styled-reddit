import { FaRegComment } from 'react-icons/fa'
import {BiUpvote} from 'react-icons/bi'
import styles from './SubredditCard.module.scss'

const SubredditCard = ({ post}) => {
      const { title, author, ups, num_comments, subreddit, subreddit_name_prefixed, post_hint, url_overridden_by_dest } = post
      return (
            <div className = {styles.card}>
                  <div className={styles.profileimg}><span className={styles.firstletter}>{author[0].toUpperCase()}</span></div>
                  <div className = {styles.content}>
                        <div className={styles.details}><span className={styles.subreddit}>{subreddit_name_prefixed}</span> &#x2022; <span className={styles.author}><em>{`u/${author}`}</em></span></div>
                        <div className={styles.title}>{title}</div>
                        {post_hint === 'image' && <div><img src={url_overridden_by_dest} className={styles.post_image}></img></div>}
                        <div className={styles.stats}>
                              <div className={styles.comments}><span className={styles.icons}><FaRegComment /></span>{num_comments}</div>
                              <div className={styles.upvotes}><span className={styles.icons}><BiUpvote /></span>{ups}</div>
                        </div>
                  </div>
            </div>
      )
}

export default SubredditCard
