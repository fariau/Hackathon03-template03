import DontMiss from "@/components/Dontmiss";
import Essential from "@/components/Essential";
import Featured from "@/components/Featured";
import GearUp from "@/components/Greapup";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";


export default function Home() {
  return (
  <main>
 
    <Hero/>
    <Featured/>
    <GearUp/>
    <DontMiss/>
    <Essential/>
    <Navigation/>
  </main>
  )
}