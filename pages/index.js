import Exploretab from '../components/ExploreTab/Exploretab'

export default function Home({data, popularSubreddits}) {
  return (
    <div>
      <Exploretab posts={data} popularSubreddits={popularSubreddits}/>
    </div>
  )
}

export const getServerSideProps = async () => {
  const response = await fetch('https://www.reddit.com/top.json')
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