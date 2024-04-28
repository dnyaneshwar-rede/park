import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="px-10 py-6 flex justify-between items-center bg-[#32065b]">
      <span className="flex items-center gap-4">
        <Image
          src="/assets/images/logo.png"
          width={60}
          height={30}
          alt="logo"
        />
        <span class="text-5xl text-transparent bg-gradient-to-r from-pink-500 to-purple-800 bg-clip-text font-bold">
          Parkopedia
        </span>
      </span>
      <nav>
        <ul className="flex items-center justify-start gap-8 text-2xl font-base text-white">
          <li>
            <Link
              href="/"
              className="py-1 hover:border-b-2 hover:border-b-white/80"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              href="#feature"
              className="py-1 hover:border-b-2 hover:border-b-white/80"
            >
              FEATURES
            </Link>
          </li>
          <li>
            <Link
              href="#gallery"
              className="py-1 hover:border-b-2 hover:border-b-white/80"
            >
              GALLERY
            </Link>
          </li>
          <li>
            <Link
              href="#About-Us"
              className="py-1 hover:border-b-2 hover:border-b-white/80"
            >
              ABOUT US
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
