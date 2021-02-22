import Layout from "../../components/Layout/Layout"
import SubredditTab from "../../components/Subreddit/SubredditTab"

const subreddit = ({about, posts}) => {
      return (
            <Layout title = {about.title}>
            <div>
                        <SubredditTab about={about} posts={posts}/>
            </div>
            </Layout>
      )
}

export default subreddit

export const getServerSideProps = async({ params }) => {
      const aboutResponse = await fetch(`https://www.reddit.com/r/${params.subredditName}/about.json`)
      const about = await aboutResponse.json()
      const postsResponse = await fetch(`https://www.reddit.com/r/${params.subredditName}.json`)
      const posts = await postsResponse.json()
      return {
            props: {
                  about: about.data,
                  posts: posts.data.children
            }
      }
}