'use client'
import Background from '@/components/Background'
import PrintButton from '@/components/PrintButton'
import WorkPortfolio from '@/components/WorkPortfolio'

export default function Home() {
  return (
    <main>
      <Background>
        <WorkPortfolio />
      </Background>
      <PrintButton />
    </main>
  )
}
