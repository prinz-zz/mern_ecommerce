import { Grid, Avatar, Box, Rating, TextField, Button } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import OrderCard from "./OrderCard";

const orderStatus = [
  { label: "On the Way", value: "on_the_way" },
  { label: "Delivered", value: "delivered" },
  { label: "Cancelled", value: "cancelled" },
  { label: "Returned", value: "returned" },
];

export default function Order() {
  return (
    <div className='p-7'>
      <Grid
        container
        sx={{ justifyContent: "space-between", padding: "1.75rem" }}>
        <Grid item xs={12} lg={2.5}>
          <div className="h-auto shadow-md bg-white p-5 sticky top-5">
            <h1 className="font-bold text-lg">Filter</h1>
            <div className="space-y-4 mt-5">
              <h1>Order Status</h1>
              <FormGroup>
                {orderStatus.map((status) => (
                  <FormControlLabel
                    key={status.label}
                    control={<Checkbox value={status.value} />}
                    label={status.label}
                  />
                ))}
              </FormGroup>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} lg={9}>
          {[1, 1, 1, 1].map((orderStatus) => (
            <div className="h-auto shadow-md bg-white p-5 mb-5" >
              <OrderCard/>
            </div>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
