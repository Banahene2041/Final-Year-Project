import Banner from "../components/Banner"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Intro from "../components/Intro"
import "../styles/Home.css"
import Title from '../components/Title'
import RecentDrugs from "../components/RecentDrugs"
import NurseContact from "../components/NurseContact"
import TopPicksDrugs from "../components/TopPicksDrugs"
import Backbone from "../components/Backbone"

const Home = () => {
  return (
    <>
      <Header />
      <section className='home-section'>
        <Intro />
        <Banner />
        <Hero />
        <div className='pharm-info'>
          <Title text={"Pharmacy Service"} />
          <p>We provide</p>
        </div>
        <Title text={"Recent Added Drugs"} />
        <section className="recent-section">
          <RecentDrugs />
        </section>
        <NurseContact/>
        <section className="top-picks">
          <Title text={'Top Pick Drugs'}/>
          <TopPicksDrugs/>
        </section>
        <Backbone/>
      </section>
    </>
  )
}

export default Home
