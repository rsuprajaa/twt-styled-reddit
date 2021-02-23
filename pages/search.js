import { useRouter } from "next/router"
import Exploretab from '../components/Exploretab/Exploretab'
import Layout from '../components/Layout/Layout'

const search = ({ data, popularSubreddits }) => {
      const router = useRouter()
      const { q } = router.query
      return (
            <Layout title = {`${q} - search results`}>
                  <div>
                  <Exploretab posts = {data} popularSubreddits={popularSubreddits}/>
                  </div>
            </Layout>
      )
}

export default search

export const getServerSideProps = async ({ query }) => {
      const response = await fetch(`https://www.reddit.com/r/subreddit/search.json?q=${query.q}`)
      const { data } = await response.json()
      const popularSubredditsResponse = await fetch('https://www.reddit.com/subreddits/popular.json')
      const popularSubreddits = await popularSubredditsResponse.json()
      return {
            props: {
                  data: data.children,
                  popularSubreddits: popularSubreddits.data.children
            }
      }
}