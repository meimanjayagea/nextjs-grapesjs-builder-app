import Link from "next/link"

export default function HomePage() {
  return (
    <>
      <header className="bg-gray-900 text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center text-white">
          <Link href={"/"}className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center mb-4 md:mb-0">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              viewBox="0 0 24 24" id="ijvx66" className="w-10 h-10 text-white p-2 bg-green-400 rounded-full">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl text-white hover:text-green-400">COARTDEV</span>
          </Link>
          <nav className="flex lg:w-1/5 flex-wrap items-center lg:justify-center text-base md:ml-auto">
            <Link href={"/"} className="mr-5 hover:text-green-400">Home</Link>
            <Link href={"/"} className="mr-5 hover:text-green-400">Profile</Link>
            <Link href={"/"} className="mr-5 hover:text-green-400">Project</Link>
            <Link href={"/"} className="hover:text-green-400">Kontak</Link>
          </nav>
          <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
            <Link href={'/dashboard'}
              className="inline-flex items-center bg-green-400 border-0 py-1 px-3 focus:outline-none hover:bg-green-400 rounded text-base mt-4 md:mt-0">Signin</Link>
          </div>
        </div>
      </header>

      <section className="text-gray-600 body-font">
        <div id="iidua8" className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div id="iuc9ck"
            className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 id="igvd0n" className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">ENJOY YOUR LIFE</h1>
            <h1 id="i6jpwa1"><b id="iv5x5wk">COARTDEV </b></h1>
            <p id="iy5b0l" className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
              plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic hover:
              tumeric truffaut hexagon try-hard chambray.</p>
            <div className="flex justify-center gap-2">
              <Link href={'/dashboard'} type="button" className="inline-flex text-white bg-green-400 border-0 py-2 px-6 focus:outline-none hover:bg-green-400 rounded text-lg">Go to app</Link>
              <Link href={'/dashboard'} type="button" id="i9vauf" className="inline-flex text-white bg-green-400 border-0 py-2 px-6 focus:outline-none hover:bg-green-400 rounded text-lg">Get Started</Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img alt="https://dummyimage.com/720x600" src="https://images.unsplash.com/photo-1531989417401-0f85f7e673f8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" id="i7bxvi" className="object-cover object-center rounded" />
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-600 body-font">
        <div id="ikvsu7" className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <Link href={"/"} className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <svg fill="none"
              stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"
              className="w-10 h-10 text-white p-2 bg-green-400 rounded-full">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg><span id="iriexh" className="ml-3 text-xl">Coartdev</span>
          </Link>
          <p id="i01s4k"
            className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © {new Date().getFullYear()} coartdev —<Link href="https://twitter.com/knyttneve" rel="noopener noreferrer" target="_blank" id="iy2shw"
              className="text-gray-600 ml-1">Meiman Jaya Gea</Link>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link href={"/"} className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </Link>
            <Link href={"/"} className="ml-3 text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </Link>
            <Link href={"/"} className="ml-3 text-gray-500">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-5 h-5">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </Link>
            <Link href={"/"} className="ml-3 text-gray-500">
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" viewBox="0 0 24 24" className="w-5 h-5">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </Link>
          </span>
        </div>
      </footer>
    </>
  );
}
