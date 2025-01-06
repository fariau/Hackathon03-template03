"use client";

import Image from "next/image";
import React from "react";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { Button } from "@/components/ui/button";

export default function ContactUs () {
  return (
    <main className="bg-white flex flex-col items-center w-full">
      <section className="w-full max-w-[1440px] px-4 py-8">
        <h1 className="text-center text-2xl font-medium text-[#111111]">
          GET HELP
        </h1>
        <div className="mt-4 flex justify-center">
          <input
            type="text"
            placeholder="What can we help you with?"
           className="border border-gray-600 rounded-full pl-4 pr-10 py-2 text-sm w-[457px]"
             />
        </div>

        <div className="mt-8 flex flex-col lg:flex-row gap-8">
          <article className="flex-1">
            <h2 className="text-xl font-medium text-[#111111]">
              WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
            </h2>
            <p className="mt-4 text-sm text-[#111111]">
              We want to make buying your favourite Nike shoes and gear online
              fast and easy, and we accept the following payment options:
            </p><br />
            <ul className="mt-2 list-disc pl-5 text-sm text-[#111111]">
              <p>Visa, Mastercard, Diners Club, Discover, American Express</p><br />
              <p>Visa Electron, Maestro</p><br />
              <p>Apple Pay</p>
            </ul>
            <p className="mt-4 text-sm text-[#111111]">
              Nike Members can store multiple debit or credit cards in their
              profile for faster checkout. If you&apos;re not already a Member,{" "}
              <a href="joinus" className="underline">
                join us
              </a>{" "}
              today.
            </p>

            <div className="mt-4 flex space-x-4">
              <Button color="primary">JOIN US</Button>
              <Button color="primary">SHOP NIKE</Button>
            </div><br />

            <div>
              <h1 className="text-xl font-medium text-[#111111]">FAQs</h1><br />
              <p className="font-bold">Does my card need international purchases enabled?</p>
              <p>Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.</p><br />
              <p>Please note, some banks may charge a small transaction fee for international orders.</p><br />
              <p className="font-bold">Can I pay for my order with multiple methods?</p>
              <p>No, payment for Nike orders can&apos;t be split between multiple payment methods.</p><br />
              <p className="font-bold">What payment method is accepted for SNKRS orders?</p>
              <p>You can use any accepted credit card to pay for your SNKRS order.</p><br />
              <p className="font-bold">Why don&apos;t I see Apple Pay as an option?</p>
              <p>To see Apple Pay as an option in the Nike App or on Nike.com, you&apos;ll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you&apos;ll need to use Safari to use Apple Pay on Nike.com.</p><br />
              <p>Was this answer helpful?</p>
              <div className="flex justify-start gap-2">
                <AiFillLike className="h-10 w-8" /><AiFillDislike className="h-10 w-8"/>
              </div> <br />
              <p className="text-[#757575]">RELATED</p><br />
              <p className="text-[#111111]">WHAT ARE NIKE&apos;S DELIVERY OPTIONS?</p>
              <p className="text-[#111111]">HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</p>
            </div>
          </article>

          <aside className="w-full lg:w-[300px]">
            <div className="flex justify-center items-center flex-col gap-3 p-10 text-center">
              <h3 className="text-3xl text-center font-bold text-[#111111]">CONTACT US</h3><br />
              <Image src="/mobile.png" alt="/" width={70} height={70} />
              <ul className="mt-4 space-y-4 text-sm text-[#111111] text-center">
                <p>000 800 919 0566</p>
                <p>Products & Orders: 24 hours a day,<br /> 7 days a week</p>
                <p>Company Info & Enquiries: 07:30 - 16:30, Monday - Friday</p>
              </ul>
            </div>

            <div className="text-center flex justify-center items-center flex-col gap-3 p-10 ">
              <Image width={70} height={70} src="/msg.png" alt="/" />
              <p>24 hours a day <br />
                7 days a week</p>
            </div>

            <div className="flex justify-center items-center flex-col gap-3 p-10 text-center">
              <Image width={70} height={70} src="/inbox.png" alt="/" />
              <p>We&apos;ll reply within <br />
                five business days</p>
            </div>

            <div className="flex justify-center items-center flex-col gap-2 p-10 text-center">
              <Image width={70} height={70} src="/location.png" alt="" />
              <p>STORE LOCATOR <br />
                Find Nike retail stores near you</p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

