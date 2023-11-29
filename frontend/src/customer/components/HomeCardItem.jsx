
export default function HomeCardItem({jeans}){
    return (
     
        <div className="bg-white shadow-md hover:shadow-lg trasition-shadow overflow-hidden rounded-lg w-full sm:w-[300px] m-4">
      <div className="w-full h-full object-cover object-top">
        <img
          className="h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300"
          src={jeans.imageUrl || "https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
          alt=""
        />
      </div>
      <div className="truncate text-lg text-center p-2 font-semibold text-slate-700">{jeans.title}</div>
      <div className="p-3">
        <p className="line-clamp-3 text-gray-600">
          {jeans.description}
        </p>
      </div>
    </div>
    )
}