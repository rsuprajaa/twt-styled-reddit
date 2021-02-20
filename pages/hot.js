import Exploretab from "../components/ExploreTab/Exploretab"

const hot = ({data}) => {
      return (
            <div>
                  <Exploretab posts={data}/>
            </div>
      )
}

export default hot

export const getServerSideProps = async () => {
      const response = await fetch('https://www.reddit.com/hot.json')
      const {data} = await response.json()
      return {
        props: {
          data: data.children
        }
      }
}