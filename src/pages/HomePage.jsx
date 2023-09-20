import EventRental from "../components/HomePageComponents/EventRental"
import Hero from "../components/HomePageComponents/Hero"
import OurServices from "../components/HomePageComponents/OurServices"
import Partners from "../components/HomePageComponents/Partners"
import Reasons from "../components/HomePageComponents/Reasons"
import StepsToRent from "../components/HomePageComponents/StepsToRent"


function HomePage() {
  return (
    <>
      <Hero />
      <StepsToRent />
      <EventRental />
      <OurServices />
      <Reasons />
      <Partners />
    </>
  )
}

export default HomePage