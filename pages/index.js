import Exploretab from '../components/ExploreTab/Exploretab'
import SideBar from '../components/SideBar/SideBar'
import styles from '../styles/Home.module.scss'

export default function Home({data}) {
  return (
    <div>
      <Exploretab posts={data}/>
      <SideBar/>
    </div>
  )
}

export const getServerSideProps = async () => {
  const response = await fetch('https://www.reddit.com/top.json')
  const {data} = await response.json()
  return {
    props: {
      data: data.children
    }
  }
}