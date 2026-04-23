import ShaderBackground from "@/components/ShaderBackground"
import HeroContent from "@/components/HeroContent"
import Header from "@/components/Header"
import Portfolio from "@/components/Portfolio"
import Services from "@/components/Services"
import Footer from "@/components/Footer"

const Index = () => {
  return (
    <>
      <ShaderBackground>
        <Header />
        <HeroContent />
      </ShaderBackground>
      <Portfolio />
      <Services />
      <Footer />
    </>
  )
}

export default Index