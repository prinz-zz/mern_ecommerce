export default function CartItem() {
  return (
    <div className="p-5 shadow-md border rounded-lg">
      <div className="flex items-center">
        <div className="w-[5rem} h-[5rem] lg:w-[12rem] lg:h-[5rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
