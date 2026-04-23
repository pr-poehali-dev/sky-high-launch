import { useState } from 'react'
import ShaderBackground from "@/components/ShaderBackground"
import HeroContent from "@/components/HeroContent"
import Header from "@/components/Header"
import LeadModal from "@/components/LeadModal"
import Portfolio from "@/components/Portfolio"
import Services from "@/components/Services"
import Footer from "@/components/Footer"

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <ShaderBackground>
        <Header />
        <HeroContent onOpenModal={() => setModalOpen(true)} />

      </ShaderBackground>
      <Portfolio />
      <Services />
      <Footer />
      <LeadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}

export default Index