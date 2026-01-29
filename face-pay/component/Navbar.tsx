import Link from 'next/link'

const Navbar = () => {
  return (
    <>
    <nav className='flex p-[2rem] justify-between '>
        <div>
            <Link href="/" className='font-space text-[2rem] font-bold  ' >Face<span className='text-[#03b303] ' >Pay</span></Link>
        </div>
        <div className='flex gap-[2rem] justify-center items-center text-[1.5rem] font-semibold font-inter ' >
            <Link className='hover:text-[#03b303] hover:scale-[1.05] transition-all ' href="/">Home</Link>
            <Link className='hover:text-[#03b303] hover:scale-[1.05] transition-all ' href="/">About</Link>
            <Link className='bg-[#03b303] px-[1rem] py-[0.5rem] text-white rounded-[5px] hover:scale-[1.03] transition-all ' href="/auth/login">Get Started</Link>
        </div>
    </nav>
    </>
  )
}

export default Navbar