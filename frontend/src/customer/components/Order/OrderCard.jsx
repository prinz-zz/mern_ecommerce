import { Grid, Avatar, Box, Rating, TextField, Button } from "@mui/material";
import AdjustIcon from "@mui/icons-material/Adjust";

export default function OrderCard() {
  return (
    <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
      <Grid item xs={6}>
        <div className="flex cursor-pointer">
          <img
            src="https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="h-[10rem] w-[10rem] object-cover"
          />
          <div className="ml-5 space-y-1">
            <p className="font-semibold">
              A checkbox input can only have two states in a form
            </p>
            <p className="font-semibold opacity-50">Size : M</p>
            <p className="font-semibold opacity-50">Color : Black</p>
          </div>
        </div>
      </Grid>
      <Grid item xs={2}>
        <p> &#x20B9;1234</p>
      </Grid>
      <Grid item xs={4}>
        {true && (
          <div>
            <p className="font-semibold flex items-center">
              <AdjustIcon
                sx={{ height: "15px", width: "15px" }}
                className="text-green-600 mr-1"
              />
              Delivered on February 08
            </p>
            <p className="text-sm">Your item has been delivered</p>
          </div>
        )}
        {false && (
          <p className="opacity-60">Expected delivery on February 08</p>
        )}
      </Grid>
    </Grid>
  );
}
