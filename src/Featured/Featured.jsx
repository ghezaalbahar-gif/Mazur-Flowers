import featuredData from "./featuredData";

export default function Flowers1() {
  return (
    <div className="pt-10 pb-10">
    <div className="flex gap-x-6 px-20 m-10 mt-16">
      {featuredData.map((item, index) => (
        <div key={index}>
      <div>
        <div className="overflow-hidden">
        <img className="cursor-pointer hover:scale-110 transition-all duration-400 ease-in-out"
        src={item.img} 
        alt="Ballons"
         /></div>
        <div className="flex flex-col tracking-wide leading-relaxed mt-3 text-red-950 text-lg text-center ">
        <span>{item.description}</span>
        <span>{item.price}</span></div>
      </div>
    </div>
  ))}
    </div>
    <div className="flex m-auto justify-center items-center ">
    <button className="border border-red-950 rounded-full px-6 py-3 text-red-950 cursor-pointer hover:bg-rose-950 hover:text-white transition-all duration-300"
    >Ballons and Gifts</button></div>
    </div>
  );
}
