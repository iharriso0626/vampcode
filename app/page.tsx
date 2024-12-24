import Image from 'next/image';
import Logo from '../Images/Logo.svg';

export default function Home() {
  return (
    <div className="flex h-screen w-screen bg-[#0C0004] text-white overflow-hidden">
      {/* LEFT SECTION */}
      <div className="relative w-[35%] h-full px-8 py-12 overflow-hidden  items-center">

      <Image src={Logo} alt={'Logo'} className='w-36 h-36 border-2 border-[#670A0D] rounded-xl'/>

        {/* Main info */}
        <h2 className="text-2xl mb-6 mt-[30%] ml-[20%] font-semibold uppercase tracking-wider">
          Ian Harrison
        </h2>
        <p className="text-lg ml-[20%]">
          Security Analyst, Penetration Tester, Developer
        </p>
        <p className="mt-2 text-lg leading-relaxed max-w-sm ml-[20%]">
          Creating, Monitoring, Testing, and Securing software in Birmingham,
          Alabama.
        </p>
      </div>

      {/* RIGHT SECTION */}
      <div className="w-[65%] h-full flex items-center justify-center overflow-hidden">
        {/* Large headings: SECURITY / SOFTWARE / SIMPLE */}
        <div className="text-left space-y-2">
          <h1 className="text-[150px] md:text-[200px] leading-none">
            SECURITY
          </h1>
          <h1 className="text-[150px] md:text-[200px] leading-none">
            SOFTWARE
          </h1>
          <h1 className="text-[150px] md:text-[200px] leading-none text-[#670A0D]">SIMPLE</h1>
        </div>
      </div>
    </div>
  );
}
