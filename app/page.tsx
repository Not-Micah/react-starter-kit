import NavBar from "@/components/default/NavBar"
import NavModal from "@/components/default/NavModal"

import Heading from "@/components/default/Heading"
import Subheading from "@/components/default/Subheading"
import Text from "@/components/default/Text"

import FAQ from "@/components/default/FAQ"
import About from "@/components/default/About"

const Home = () => {
  return (
    <div className="default-container">
      <NavBar />
      <NavModal />

      <Heading className="mt-[200px]">Your Personalized Cambridge Tutor</Heading>
      <Subheading>Get the help you need to succeed</Subheading>
      <Text className="mb-[100px]">Our platform is designed to provide you with the support you need to succeed. Whether you're a beginner or a seasoned pro, we've got you covered.</Text>
      
      <div className="space-y-32 mb-[100px]">
        <About />
        <FAQ />
      </div>
    </div>
  )
}

export default Home