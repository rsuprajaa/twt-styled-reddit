import Head from 'next/head'
import Exploretab from '../components/ExploreTab/Exploretab'
import SideBar from '../components/SideBar/SideBar'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className = {styles.home__grid}>
      <Exploretab />
      <SideBar/>
    </div>
  )
}
