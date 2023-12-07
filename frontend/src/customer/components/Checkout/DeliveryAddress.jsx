import { Grid, Avatar, Box, Rating, TextField, Button } from "@mui/material";
import AddressCard from "../AddressCard/AddressCard";

export default function DeliveryAddress() {

    const handleSubmit = (e)=>{
        e.preventDefault();
        const data = new FormData(e.currentTarget)
        const address = {
            firstName: data.get('firstname'),
            lastName: data.get('lasttname'),
            address: data.get('address'),
            city: data.get('city'),
            state: data.get('state'),
            zip: data.get('zip'),
            phoneNumber: data.get('phoneNumber'),
        }
        console.log(address);
    }

  return (
    <div className="my-8">
      <Grid container spacing={4}>
        <Grid item xs={12} lg={5}>
            <Box className="border border-md shadow-md h[30.5rem] overflow-y-scroll">
            <div className="p-5 border-b">
            <AddressCard />
            <button
              type="submit"
              className="mt-10 flex  items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Deliver Here
            </button>
          </div>
            </Box>
          
        </Grid>
        <Grid item xs={12} lg={7}>
          <Box className="border rounded-md shadow-md p-5">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstname"
                    name="firstname"
                    label="First Name"
                    variant="standard"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lasttname"
                    name="lasttname"
                    label="Last Name"
                    variant="standard"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="address"
                    name="address"
                    label="Address"
                    variant="standard"
                    fullWidth
                    multiline
                    rows={4}
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    variant="standard"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="State / Province / Region"
                    variant="standard"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="zip"
                    name="zip"
                    label="Zip / Postal code"
                    variant="standard"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="phoneNumber"
                    name="phoneNumber"
                    label="Phone Number"
                    variant="standard"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <button className="mt-6 flex  items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" type="submit">
                    Deliver Here
                  </button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
