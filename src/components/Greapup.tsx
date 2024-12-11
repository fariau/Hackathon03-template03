import Image from "next/image";
export default function GearUp() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-3 ml-2">Gear Up</h1>
      <div className="md:flex space-y-10 md:space-y-0 md:space-x-10">
      </div>
      <div className="flex justify-evenly  gap-5">
        <Image width={200} height={300} alt="" src={"/g1.png"} />
        <Image width={200} height={300} alt="" src={"/g2.png"} />
        <Image width={200} height={300} alt="" src={"/g3.png"} />
        <Image width={200} height={300} alt="" src={"/g4.png"} />
      </div>
    </section>

  
  );
}