"use client"
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <>
        <div className='flex justify-around items-center flex-wrap mt-[3rem]  '>
            <div className='w-[45%] flex flex-col gap-[1.5rem] items-center   ' >
                <h2  className='text-[3rem] font-bold font-space '  >Pay Smarter Without Your Phone, Anywhere Anytime💸</h2>
                <p className='text-[1.5rem]  text-gray-800 ' >
                  A secure wallet that lets you send, receive, and manage money effortlessly.Pay via QR today — unlock face-based payments tomorrow.Built for speed, security, and real-life moments.
                </p>
                  <div className='w-full flex gap-[1rem] text-[1.5rem] font-semibold font-inter' >
                    <Link className='bg-[#03b303] px-[1rem] py-[0.5rem] text-white rounded-[5px] hover:scale-[1.03] transition-all ' href={"/"}>Get Started</Link>
                    <Link className='bg-[#0e0f0ed7] px-[1rem] py-[0.5rem] text-white rounded-[5px] hover:scale-[1.03] transition-all ' href={"/"}>Learn More</Link>
                  </div>
            </div>
            <div className='w-[45%] ' >
                <Image alt='hero' src="/assets/hero.png" className='w-[100%] h-[100%]' width={600} height={400}   />
            </div>
        </div>
    </>
  )
}

export default Hero