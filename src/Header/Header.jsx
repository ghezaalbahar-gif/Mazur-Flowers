import headerData from './headerData'
import { LuShoppingCart } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
function Header() {
  return (
    <div className="bg-white border-b-2 border-b-pink-100 sticky top-0 z-50">
      <div className="flex justify-between px-20 mx-6 my-0 py-4">
        <div>
          <img
            src={headerData.logo}
            alt="Logo"
            className="w-28 h-6 cursor-pointer"
          />
        </div>
        <div className="flex gap-4">
          <button className="w-7 h-7 cursor-pointer hover:scale-110 ease-in-out transition-all duration-300">
         <LuShoppingCart size={24} /> 
         </button>
         <button className="w-7 h-7 cursor-pointer hover:scale-110 ease-in-out transition-transform duration-300 ">
         <IoSearch size={24}/>
         </button>
        </div>
      </div>
    </div>
  )
}

export default Header