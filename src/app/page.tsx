import DontMiss from "@/components/Dontmiss";
import Essential from "@/components/Essential";
import Featured from "@/components/Featured";
import GearUp from "@/components/Greapup";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Best from "@/components/Best";


export default function Home() {
  return (
  <main>
 
    <Hero/>
    <Best/>
    <Featured/>
    <GearUp/>
    <DontMiss/>
    <Essential/>
    <Navigation/>
  </main>
  )
}