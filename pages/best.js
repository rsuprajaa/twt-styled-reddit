import Exploretab from "../components/ExploreTab/Exploretab"

const best = ({data}) => {
      return (
            <div>
                  <Exploretab posts={data}/>     
            </div>
      )
}

export default best

export const getServerSideProps = async () => {
      const response = await fetch('https://www.reddit.com/best.json')
      const {data} = await response.json()
      return {
        props: {
          data: data.children
        }
      }
}