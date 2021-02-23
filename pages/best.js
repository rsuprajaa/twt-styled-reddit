import Exploretab from '../components/Exploretab/Exploretab'
import Layout from "../components/Layout/Layout"

const best = ({data, popularSubreddits}) => {
      return (
            <Layout title = "reddit | Best">
            <div>
                  <Exploretab posts={data} popularSubreddits={popularSubreddits}/>     
            </div>
            </Layout>
      )
}

export default best

export const getServerSideProps = async () => {
      const response = await fetch('https://www.reddit.com/best.json')
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