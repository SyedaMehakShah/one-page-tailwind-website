import { CiUser, CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import Image from "next/image";
import logo from "./public/logo.jpg";
import Main from "./components/main";
import Hero from "./components/hero";
import Product from "./components/product";
import Footer from "./components/footer"; // Corrected import

export default function Home() {
  return (
    <>
      <div className="w-full h-24 bg-slate-200 flex flex-row gap-x-4 md:gap-x-60">
        <div className="flex p-8">
          <Image
            className="logo"
            src={logo}
            alt="logo"
            width={150}
            height={50}
          />
          <h1 className="text-3xl font-bold">FURNIRO</h1>
        </div>
        <div className="">
          <ul className="flex gap-11 p-8 font-semibold">
            <li className="hover:cursor-pointer hover:text-[rgb(184,142,47)]">
              Home
            </li>
            <li className="hover:cursor-pointer hover:text-[rgb(184,142,47)]">
              Shop
            </li>
            <li className="hover:cursor-pointer hover:text-[rgb(184,142,47)]">
              About
            </li>
            <li className="hover:cursor-pointer hover:text-[rgb(184,142,47)]">
              Contact
            </li>
          </ul>
        </div>
        <div className="flex gap-8 p-8 font-bold">
          <CiUser aria-label="User" />
          <CiSearch aria-label="Search" />
          <CiHeart aria-label="Favorites" />
          <MdOutlineShoppingCart aria-label="Cart" />
        </div>
      </div>

      <Hero />
      <Main />
      <Product />
      <Footer />
    </>
  );
}
