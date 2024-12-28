import React from 'react'
import Image from 'next/image'

const Best = () => {
    return (
        <div>
            <h1 className="font-semibold text-xl mb-3 ml-2">Best of Air Max</h1>
            <div className="flex justify-evenly flex-wrap gap-5">
                <div>
                    <Image width={300} height={300} alt="" src={"/b1.png"} />
                    <p>Nike Air Max Pulse </p>
                    <p className='text-[#757575]'>Women's Shoes</p>
                    <p className='flex justify-end'>₹ 13 995</p>
                </div>

                <div>
                    <Image width={300} height={300} alt="" src={"/b2.png"} />
                    <p>Nike Air Max Pulse </p>
                    <p className='text-[#757575]'>Men's Shoes</p>
                    <p className='flex justify-end'>₹ 13 995</p>
                </div>

                <div>
                    <Image width={300} height={300} alt="" src={"/b3.png"} />
                    <p>Nike Air Max 97 SE </p>
                    <p className='text-[#757575]'>Men's Shoes</p>
                    <p className='flex justify-end'>₹ 16 995</p>
                </div>

            </div>
        </div>
    )
}
export default Best

