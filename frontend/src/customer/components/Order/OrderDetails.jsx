import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

export default function OrderDetails() {
  return (
    <div className="px-5 lg:px-20 lg:py-10">
      <div className="border border-md shadow-md p-7 mb-5">
        <h1 className="font-bold text-xl mb-4">Delivery Address</h1>
        <AddressCard />
      </div>
      <div className="border border-md shadow-md p-7 mb-5 flex justify-between">
        <Grid
          container
          sx={{ justifyContent: "space-between", alignItems: "center" }}>
          <Grid item xs={12} md={10}>
            <OrderTracker />
          </Grid>
          <Grid item xs={12} md={2}>
            {" "}
            <Button variant="outlined" color="error">
              Cancel Order
            </Button>
          </Grid>
        </Grid>
      </div>
      
      {[1,1,1,1].map((item, index)=>(
         <div className="border border-md shadow-md p-7 mb-5 flex justify-between" key={index}>
         <Grid
           container
           sx={{ justifyContent: "space-between", alignItems: "center" }}>
           <Grid item xs={12} md={2}>
             <img
               src="https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
               alt=""
               className="h-[10rem] w-[10rem] object-cover"
             />
           </Grid>
           <Grid item xs={12} md={7}>
             <div className="ml-5 space-y-1">
               <p className="font-semibold">
                 A checkbox input can only have two states in a form
               </p>
               <div className="flex space-x-3">
               <p className="font-semibold opacity-50">Size : M</p>
               <p className="font-semibold opacity-50">Color : Black</p>
               </div>
               <p className="font-semibold opacity-80">Seller : Black</p>
               <p className="font-semibold opacity-80">&#x20B9; 345</p>
             </div>
           </Grid>
           <Grid item xs={12} md={3}>
             <Button color="primary" startIcon={<StarIcon/>}>
               Rate & Review Product
             </Button>
           </Grid>
         </Grid>
       </div>
      ))}
     
    </div>
  );
}
