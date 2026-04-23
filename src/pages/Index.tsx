import { useState } from 'react'
import ShaderBackground from "@/components/ShaderBackground"
import HeroContent from "@/components/HeroContent"
import PulsingCircle from "@/components/PulsingCircle"
import Header from "@/components/Header"
import LeadModal from "@/components/LeadModal"

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <ShaderBackground>
        <Header />
        <HeroContent onOpenModal={() => setModalOpen(true)} />
        <PulsingCircle />
      </ShaderBackground>
      <LeadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}

export default Index
