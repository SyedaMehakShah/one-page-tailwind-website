import banner from "../public/banner.jpg";
import Image from "next/image";

function Hero() {
  return (
    <main className="relative">
      <div className="relative w-full h-screen">
        <Image 
          src={banner} 
          alt="banner" 
          layout="fill" 
          className="z-0 object-cover"
        />
        
        {/* Box over the image */}
        <div className="absolute top-1/4 left-1/4 md:left-36 pt-6 bg-[rgb(241,227,201)] p-6 rounded-lg w-4/12 h-64 md:h-72">
          <p className="text-xs font-semibold">New Arrival</p>
          <h2 className="text-4xl font-bold text-[rgb(184,142,47)]">Discover Our <br /> New Collection</h2>
          <p className="mt-2 text-sm text-zinc-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Temporibus iusto dicta ratione, minima Lorem ipsum.
          </p>
          <button className="bg-[rgb(184,142,47)] text-slate-50 w-32 h-10 text-xs mt-5">Buy Now</button>
        </div>
      </div>
    </main>
  );
}

export default Hero;
