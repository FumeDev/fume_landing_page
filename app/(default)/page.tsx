export const metadata = {
  title: 'Fume | AI SWE',
  description: '10x engineering efficiency',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import PricingPage from '@/components/pricing'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesBlocks />
      <PricingPage />
      <Testimonials />
    </>
  )
}
