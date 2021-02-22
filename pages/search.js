import Exploretab from "../components/ExploreTab/Exploretab"
import Layout from '../components/Layout/Layout'

const search = ({ data, popularSubreddits }) => {
      return (
            <Layout title = "Search Results">
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