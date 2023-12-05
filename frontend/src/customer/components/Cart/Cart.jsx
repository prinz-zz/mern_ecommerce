import CartItem from "./CartItem";

export default function Cart() {
  return (
    <div className="p-7">
      <div className="lg:grid grid-cols-3 la:px-16 relative gap-5">
        <div className="col-span-2">
          {[3,3,3,3,3,3,3,3,3,3].map((item)=>(
            <CartItem />
          ))}
        </div>
        <div className="sticky top-0 h-[100vh] mt-5 lg:mt-0 col-span-1">
          <div className="border p-5 shadow-md rounded-lg">
            <p className="uppercase font-bold opacity-60 divide-y-2 border-b-2 border-slate-300">
              Price details
            </p>
            <div className="space-y-3 py-3 font-semibold">
              <div className="flex justify-between  text-black">
                <span>Price</span>
                <span className="text-green-700">6447</span>
              </div>
              <div className="flex justify-between text-black">
                <span>Discount</span>
                <span className="text-green-700">6447</span>
              </div>
              <div className="flex pb-2 justify-between text-black border-b-2 border-slate-300">
                <span>Delivery Charges</span>
                <span className="text-green-700">6447</span>
              </div>
              <div className="flex justify-between text-black">
                <span className="font-bold">Total Amount</span>
                <span className="text-green-700">6447</span>
              </div>
            </div>
            <button
              type="submit"
              className="mt-5 w-full flex  items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
