
import imageDesktop from '@/assets/home/background-home-desktop.jpg'
import imageTablet from '@/assets/home/background-home-tablet.jpg'
import imageMobile from '@/assets/home/background-home-mobile.jpg'
export default function HomePage() {
  return (
    <div>
        <div
        className="fixed inset-0 -z-10 h-screen w-full bg-cover bg-center block sm:hidden"
        style={{ backgroundImage: `url(${imageMobile})` }}
      />
      <div
        className="fixed inset-0 -z-10 h-screen w-full bg-cover bg-center hidden sm:block lg:hidden"
        style={{ backgroundImage: `url(${imageTablet})` }}
      />
      <div
        className="fixed inset-0 -z-10 h-screen w-full bg-cover bg-center hidden lg:block"
        style={{ backgroundImage: `url(${imageDesktop})` }}
      />
        <div className="flex flex-col justify-center text-center items-center gap-20 lg:flex-row lg:items-start lg:text-start  lg:gap-50  md:p-30  ">
        <div className="max-w-lg ">
          <p className="tracking-widest text-sm text-[#D0D6F9] font-barlow lg:text-2xl">SO, YOU WANT TO TRAVEL TO</p>
          <h1 className="mt-4 text-5xl sm:text-7xl text-white lg:text-8xl font-bellefair tracking-widest font-light">SPACE</h1>
          <p className="mt-6  leading-relaxed text-sm text-[#D0D6F9] font-barlow ">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="md:py-15">
          <button className="border border-white rounded-full w-50 h-50 bg-white flex items-center justify-center text-xl font-bellefair text-black hover:scale-110 transition-all  lg:w-60 lg:h-60 lg:text-2xl">
            EXPLORE
          </button>
        </div>
      </div>
    </div>
    )
}
