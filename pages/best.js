import Exploretab from "../components/ExploreTab/Exploretab"

const best = ({data, popularSubreddits}) => {
      return (
            <div>
                  <Exploretab posts={data} popularSubreddits={popularSubreddits}/>     
            </div>
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