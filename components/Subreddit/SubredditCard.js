import {RiPushpin2Fill} from 'react-icons/ri'
import { FaRegComment } from 'react-icons/fa'
import {BiUpvote} from 'react-icons/bi'
import styles from './SubredditCard.module.scss'

const SubredditCard = ({ post}) => {
      const { title, author, ups, num_comments, subreddit_name_prefixed, post_hint, url_overridden_by_dest, stickied, permalink } = post
      return (
            <div className={styles.card}>
                  {stickied && <div className = {styles.pinned}><RiPushpin2Fill></RiPushpin2Fill><em>Pinned by moderators</em></div>}
                  <div className={styles.info}>
                  <div className={styles.profileimg}><span className={styles.firstletter}>{author[0].toUpperCase()}</span></div>
                  <div className={styles.content}>
                        <div className={styles.details}><span className={styles.subreddit}>{subreddit_name_prefixed}</span> &#x2022; <span className={styles.author}><em>{`u/${author}`}</em></span></div>
                        <div className={styles.title}><a href = {`https://www.reddit.com${permalink}`}>{title}</a></div>
                        {post_hint === 'image' && <div><img src={url_overridden_by_dest} className={styles.post_image}></img></div>}
                        <div className={styles.stats}>
                              <div className={styles.comments}><span className={styles.icons}><FaRegComment /></span>{num_comments}</div>
                              <div className={styles.upvotes}><span className={styles.icons}><BiUpvote /></span>{ups}</div>
                        </div>
                  </div>
                  </div>
            </div>
      )
}

export default SubredditCard
