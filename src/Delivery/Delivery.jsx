import deliveryData from "./deliveryData"

export default function Delivery() {
  return (
    <div className="pt-10 mt-10 bg-red-50 pb-0">
        <div className="text-center pt-10">
            <span className="text-2xl text-red-900"
            >{deliveryData.bagde}</span>
        </div>
    <div className="flex gap-6 pt-10 mt-10 px-20">
      <div className="w-1/2">
        <img className="w-full h-4/5"
        src={deliveryData.img} 
        alt="Delivery Image" />
      </div>
      <div className="w-1/2">
        <h1 className="text-5xl font-medium leading-tight text-red-900"
        >{deliveryData.title}</h1>
        <p className="text-lg mt-30 text-red-950"
        >{deliveryData.description}</p>
      </div>
    </div>
    </div>
  )
}
