import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <main>
        <section className="flex h-[50vh] mt-4">
          <div className="w-full text-white flex flex-col gap-3 justify-center items-center">
            <h2 className="font-bold text-4xl text-center">
              Simplify Your Links. Grow Your Reach.
            </h2>
            <p className="text-[17px]  text-center px-20">
              GoLink is built for creators, teams, and businesses to simplify link management. Shorten and brand URLs, track every click with real-time analytics, and collaborate easily. Share smarter, grow faster, and turn every link into a powerful opportunity
            </p>
            <ul>
                <Link href="/generate"><button className='bg-blue-500 text-white hover:bg-blue-600 font-medium rounded-lg text-sm px-3 py-1.5 text-center mx-2'>Try Now</button></Link>
                <Link href="/"><button className='bg-blue-500 text-white hover:bg-blue-600 font-medium rounded-lg text-sm px-3 py-1.5 text-center mx-2'>Github</button></Link>
            </ul>
          </div>
          <div className="img w-full relative">
            <Image  src={"/vector.svg"} fill={true} alt="vector image"/>
          </div>
        </section>
      </main>
    </>
  );
}
