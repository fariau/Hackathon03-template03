
import Image from "next/image";

export default function GearUp() {
  return (
    <section className="px-4 py-6">
      <h1 className="font-semibold text-2xl mb-6 text-center md:text-left">Gear Up</h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {/* Product 1 */}
        <div className="text-center">
          <Image width={200} height={300} alt="Nike Dri-FIT ADV TechKnit Ultra" src="/g1.png" />
          <p className="font-medium mt-3">Nike Dri-FIT ADV TechKnit Ultra</p>
          <p className="text-[#757575] text-sm">Men&apos;s Short-Sleeve Running Top</p>
          <p className="text-right font-semibold">₹ 3,895</p>
        </div>
        {/* Product 2 */}
        <div className="text-center">
          <Image width={200} height={300} alt="Nike Dri-FIT Challenger" src="/g2.png" />
          <p className="font-medium mt-3">Nike Dri-FIT Challenger</p>
          <p className="text-[#757575] text-sm">Men&apos;s 18cm (approx.) 2-in-1 Versatile Shorts</p>
          <p className="text-right font-semibold">₹ 2,495</p>
        </div>
        {/* Product 3 */}
        <div className="text-center">
          <Image width={200} height={300} alt="Nike Dri-FIT ADV Run Division" src="/g3.png" />
          <p className="font-medium mt-3">Nike Dri-FIT ADV Run Division</p>
          <p className="text-[#757575] text-sm">Women&apos;s Long-Sleeve Running Top</p>
          <p className="text-right font-semibold">₹ 5,295</p>
        </div>
        {/* Product 4 */}
        <div className="text-center">
          <Image width={200} height={300} alt="Nike Fast" src="/g4.png" />
          <p className="font-medium mt-3">Nike Fast</p>
          <p className="text-[#757575] text-sm">
            Women&apos;s Mid-Rise 7/8 Running Leggings with Pockets
          </p>
          <p className="text-right font-semibold">₹ 3,795</p>
        </div>
      </div>
    </section>
  );
}
