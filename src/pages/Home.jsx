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
import News from "../components/News"

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
          <p className="title-info">We understand that buying medication can be frustrating and time-consuming.Often,visting a pharmacy can be disappointing when the desired product is unavailable. To address this isssue,our platform aims to provide a conveniet online experience for purchasing drugs,saving you time and reducing stress associated with in-store visits.</p>
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
        <section className="news-section">
          <Title text={'Health News'}/>
          <News/>
        </section>
      </section>
    </>
  )
}

export default Home
