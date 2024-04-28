import React from "react";
import Header from "../Header";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="h-screen bg-hero-bg bg-cover">
      <Header />
      <div className="text-center text-white h-[80vh] flex flex-col justify-center items-center gap-6">
        <h1 className="text-8xl font-semibold">Parkopedia</h1>
        <p className="text-2xl italic">
          Life is Like journey,but don&apos;t worry, you&apos;ll find Link
          parking spot at the end
        </p>
        <div className="mt-[70px]">
          <Link href="#feature">
            <span className="border-[0.5px] border-white rounded-xl px-8 py-4 text-xl hover:bg-white/30 hover:text-black transition-colors duration-500">Read More</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
