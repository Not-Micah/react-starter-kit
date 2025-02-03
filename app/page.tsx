import NavBar from "@/components/landing/NavBar"
import NavModal from "@/components/landing/NavModal"

import Heading from "@/components/common/Heading"
import Subheading from "@/components/common/Subheading"
import Text from "@/components/common/Text"
import ButtonLink from "@/components/common/ButtonLink"

import { HiLightningBolt } from "react-icons/hi"

import About from "@/components/landing/About"
import Demo from "@/components/landing/Demo"
import FAQ from "@/components/landing/FAQ"
import Testimonials from "@/components/landing/Testimonials"
import Footer from "@/components/landing/Footer"

const Home = () => {
  return (
    <div className="">
      <NavBar />
      <NavModal />

      <div className="default-container">
        <Heading className="mt-[200px]">Your Personalized Cambridge Tutor</Heading>
        <Subheading>Get the help you need to succeed</Subheading>
        <Text className="mb-[100px]">Our platform is designed to provide you with the support you need to succeed. Whether you're a beginner or a seasoned pro, we've got you covered.</Text>
        <ButtonLink href="/login" className="mb-[100px]" icon={<HiLightningBolt />}>Login</ButtonLink>
      </div>
      
      <div className="space-y-32 mb-[100px]">
        <About />
        <Demo />
        <FAQ />
        <Testimonials />
      </div>

      <Footer />
    </div>
  )
}

export default Home