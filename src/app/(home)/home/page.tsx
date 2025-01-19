import Link from "next/link";


export default function HomePage() {
  return (
      <section className="text-gray-600 px-10 body-font py-10">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 italic" >ENJOY YOUR LIFE</h1>
            <h1><b>COARTDEV </b></h1>
            <p className="mb-8 leading-relaxed italic bold">Santai, tersenyum, dan nikmati hidup! Karena hidup adalah perjalanan yang berharga. Nikmati setiap detiknya, temukan kebahagiaan dalam hal-hal sederhana, dan ciptakan kenangan yang berarti serta jalani kebahagiaan dalam setiap momen dan jalani hidup dengan penuh semangat!! 😊✨</p>
            <div className="flex justify-center gap-2">
              <Link href={'/documentation'} type="button" className="inline-flex text-white bg-green-400 border-0 py-2 px-6 focus:outline-none hover:bg-green-400 rounded text-lg">Get Started</Link>
              <Link href={'/web-builder'} type="button" id="i9vauf" className="inline-flex text-white bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-green-400 rounded text-lg">Web Builder</Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img alt="https://dummyimage.com/720x600" src="https://images.unsplash.com/photo-1531989417401-0f85f7e673f8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" id="i7bxvi" className="object-cover object-center rounded" />
          </div>
        </div>
      </section>
  );
}
