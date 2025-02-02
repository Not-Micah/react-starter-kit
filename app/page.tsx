import NavBar from "@/components/default/NavBar"
import NavModal from "@/components/default/NavModal"

import Heading from "@/components/default/Heading"
import Subheading from "@/components/default/Subheading"
import Text from "@/components/default/Text"

import ButtonLink from "@/components/default/ButtonLink"

import { HiLightningBolt } from "react-icons/hi";

import FAQ from "@/components/default/FAQ"
import About from "@/components/default/About"
import Demo from "@/components/default/Demo"
import Footer from "@/components/default/Footer"

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
        <FAQ />
        <Demo />
      </div>

      <Footer />
    </div>
  )
}

export default Home