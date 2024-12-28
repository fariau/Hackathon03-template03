import Image from "next/image";

export default function GearUp() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-3 ml-2">Gear Up</h1>
      <div className="md:flex space-y-10 md:space-y-0 md:space-x-10 flex justify-between">
      </div>
      <div className="flex justify-evenly  gap-5">
        <div>
          <Image width={200} height={300} alt="" src={"/g1.png"} />
          <p>Nike Dri-FIT ADV TechKnit Ultra</p>
          <p className="text-[#757575]">Men's Short-Sleeve <br /> Running Top</p>
          <p className='flex justify-end'>₹ 3 895</p>
        </div>

        <div>
          <Image width={200} height={300} alt="" src={"/g2.png"} />
          <p>Nike Dri-FIT Challenger</p>
          <p className="text-[#757575]">Men's 18cm (approx.) 2- <br />in-1 Versatile Shorts</p>
          <p className='flex justify-end'>₹ 2 495</p>
        </div>

        <div>
          <Image width={200} height={300} alt="" src={"/g3.png"} />
          <p>Nike Dri-FIT ADV Run Division</p>
          <p className="text-[#757575]">Women's Long-Sleeve <br />Running Top</p>
          <p className='flex justify-end'>₹ 5 295</p>
        </div>

        <div>
          <Image width={200} height={300} alt="" src={"/g4.png"} />
          <p>Nike Fast</p>
          <p className="text-[#757575]">Women's Mid-Rise 7/8 Running <br />Leggings with Pockets</p>
          <p className='flex justify-end'>₹ 3 795</p>
        </div>
      </div>
    </section>
  );
}