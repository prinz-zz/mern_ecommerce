
export default function MenShirtCardItem({shirt}){
    return (
     
        <div className="bg-white shadow-md hover:shadow-lg trasition-shadow overflow-hidden rounded-lg w-full sm:w-[300px] m-4">
      <div className="w-full h-full object-cover object-top">
        <img
          className="h-[320px] sm:h-[220px] w-full object-cover object-top hover:scale-105 transition-scale duration-300"
          src={shirt.imageUrl || "https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
          alt=""
        />
      </div>
      <div className="truncate text-lg text-center p-3 font-semibold text-slate-700">{shirt.title}</div>
      <div className="p-3">
        <p className="line-clamp-3 text-gray-600">
          {shirt.description}
        </p>
      </div>
    </div>
    )
}