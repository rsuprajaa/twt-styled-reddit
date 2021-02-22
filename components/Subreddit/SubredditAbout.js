import { HiOutlineSparkles } from 'react-icons/hi'
import styles from './SubredditAbout.module.scss'

const SubredditAbout = ({ about }) => {
      const { display_name, display_name_prefixed, title, public_description, header_title, subscribers, accounts_active } = about
      return (
            <div className = {styles.about}>
                  <div className={styles.header}>
                        <span className={styles.header_title}>{display_name_prefixed}</span>
                        <div className={styles.profile_img}><span className={styles.firstletter}>{display_name[0].toUpperCase()}</span>
                        </div>
                  </div>
                  <div className={styles.content}>
                        <div><a href = {`https://www.reddit.com/r/${display_name}/`}className = {styles.btn}>View on Reddit</a></div>
                        <h3 className={styles.name}>{title}</h3>
                        <p className={styles.url}>{display_name_prefixed}</p>
                        {public_description && <div className={styles.bio}><span className={styles.sparkle}><HiOutlineSparkles /></span> {public_description}</div>}
                        <div className={styles.description}>{header_title}</div>
                        <div className={styles.stats}>
                              <p><strong><span className={styles.highlight}>{subscribers}</span></strong> Members</p>
                              <p><strong><span className={styles.highlight}>{accounts_active}</span></strong> Online</p>
                        </div>
                  </div>
            </div>
      )
}

export default SubredditAbout
