import Banner from '@/components/Banner'
import CardPanel from '@/components/CardPanel'
import TopMenu from '@/components/TopMenu'
export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950">

    <TopMenu></TopMenu>

      <Banner />

      <CardPanel />

    </div>
  )
}