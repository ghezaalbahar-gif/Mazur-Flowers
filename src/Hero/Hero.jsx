import heroData from './heroData'
import { FiArrowRight } from "react-icons/fi";

export default function Hero() {
  return (
    <div className="flex items-center justify-between px-21 py-16 bg-rose-50">
      <div className=" w-md ml-10">
        <span className="text-red-950 text-1xl bg-white border border-pink-100 py-1 px-3 rounded-2xl shadow shadow-pink-200">
          {heroData.bagde}
        </span>
        <h1 className="text-5xl font-bold text-red-950 mb-5 mt-4">
          {heroData.title}
        </h1>
        <p className="text-lg text-gray-800 leading-8 mb-8 ">
          {heroData.description}
        </p>
        <button className="flex items-center justify-center gap-2 bg-red-950 cursor-pointer text-white px-8 py-3 rounded-full text-base font-medium hover:bg-rose-900 duration-300 hover:translate-x-1">
          {heroData.button}<FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
      <div className="overflow-hidden ease-in-out ">
        <img
          src={heroData.image}
          alt="Flower image"
          className="w-140  object-cover rounded-3xl shadow-lg cursor-pointer "
        />
      </div>

    </div>
  )
}