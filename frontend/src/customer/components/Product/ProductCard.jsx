export default function ProductCard({ product }) {
  return (
    <div className="bg-white shadow-md hover:shadow-lg trasition-shadow overflow-hidden rounded-lg w-full sm:w-[250px] m-4 hover:scale-105 transition-scale duration-300 z-20">
      <div className="object-cover object-top">
        <img
          className="h-[320px] sm:h-[220px] w-full object-cover object-top"
          src={
            product.imageUrl ||
            "https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt=""
        />
      </div>
      
        <div className="truncate text-lg text-center p-3 font-semibold text-slate-700">
          {product.brand}
        </div>
        <div className="pt-0 p-3">
          <p className="line-clamp-3 text-gray-600">{product.title}</p>
        </div>
        <div className="flex justify-center space-x-2 pt-0 p-3">
          <p className="font-semibold">&#8377; {product.discountedPrice}</p>
          <p className="line-through opacity-50">&#8377; {product.price}</p>
          <p className="font-semibold text-green-500"> {product.discountPercent}% Off</p>
        </div>
    </div>
  );
}
