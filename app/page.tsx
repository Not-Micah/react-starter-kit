import NavBar from "@/components/landing/NavBar"
import NavModal from "@/components/landing/NavModal"

import Heading from "@/components/common/Heading"
import Subheading from "@/components/common/Subheading"
import Text from "@/components/common/Text"
import ButtonLink from "@/components/common/ButtonLink"

import { HiLightningBolt } from "react-icons/hi"

import Hero from "@/components/landing/Hero"
import About from "@/components/landing/About"
import Demo from "@/components/landing/Demo"
import FAQ from "@/components/landing/FAQ"
import Testimonials from "@/components/landing/Testimonials"
import Footer from "@/components/landing/Footer"

import Loader from "@/components/common/Loader"

const Home = () => {
  return (
    <div className="">
      {/* <NavBar />
      <NavModal /> */}

      <Loader />

      {/* <div className="space-y-32 mb-[100px]">
        <Hero />
        <About />
        <Demo />
        <FAQ />
        <Testimonials />
      </div>

      <Footer /> */}
    </div>
  )
}

export default Home