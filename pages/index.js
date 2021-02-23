import Exploretab from '../components/Exploretab/Exploretab'
import Layout from '../components/Layout/Layout'

export default function Home({data, popularSubreddits}) {
  return (
    <Layout title = "Reddit Clone">
    <div>
      <Exploretab posts={data} popularSubreddits={popularSubreddits}/>
    </div>
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const response = await fetch('https://www.reddit.com/new.json')
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