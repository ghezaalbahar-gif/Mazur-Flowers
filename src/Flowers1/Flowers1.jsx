import sec1Data from "./sec1Data";

export default function Flowers1() {
  return (
    <div className="border-b border-b-red-950 pb-10 pt-10">
    <div className="grid grid-cols-3 gap-x-6 gap-y-15 px-20 m-10 mt-16">
      {sec1Data.map((item, index) => (
        <div key={index}>
      <div>
        <div className="overflow-hidden">
        <img className="w-100 h-100 cursor-pointer hover:scale-110 transition-all duration-400 ease-in-out"
        src={item.img} 
        alt="Flowers"
         /></div>
        <div className="flex flex-col tracking-wide mt-2 text-red-950 text-lg">
        <span>{item.number}</span>
        <span>{item.price}</span></div>
      </div>
    </div>
  ))}
    </div>
    <div className="flex m-auto justify-center items-center ">
    <button className="border border-red-950 rounded-full px-14 py-2 text-red-950 cursor-pointer hover:bg-rose-950 hover:text-white transition-all duration-300"
    >Assembled <br /> Bouquets</button></div>
    </div>
  );
}
