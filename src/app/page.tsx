'use client'
import Background from '@/components/Background'
import WorkPortfolio from '@/components/WorkPortfolio'
import PrintButton from '@/components/PrintButton'
import ThemeSwitcher from '@/components/ThemeSwitcher'

export default function Home() {
  return (
    <main>
      <Background>
        <WorkPortfolio />
      </Background>
      <ThemeSwitcher />
      <PrintButton />
    </main>
  )
}
