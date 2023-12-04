export default function Card({ item }) {
  return (
    <div className="bg-white shadow-md hover:shadow-lg trasition-shadow  rounded-lg w-full sm:w-[300px] m-4">
      <div className="object-cover">
        <img
          className="h-[320px] sm:h-[220px] w-full object-cover object-top hover:scale-105 transition-scale duration-300"
          src={
            item.imageUrl ||
            "https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt=""
        />
      </div>
      <div className="truncate text-lg text-center p-3 font-semibold text-slate-700">
        {item.title}
      </div>
      <div className="p-3 pt-0">
        <p className="line-clamp-3 text-gray-600">{item.description}</p>
      </div>
    </div>
  );
}
