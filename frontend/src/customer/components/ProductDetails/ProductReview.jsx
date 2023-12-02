import { Grid, Avatar, Box, Rating } from "@mui/material";

export default function ProductReview() {
  return (
    <div className="pb-10">
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}>
              A
            </Avatar>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <div className="space-y-2 my-1">
            <div>
              <p className='font-semibold text-lg'>Adam</p>
              <p className='opacity-70'>April 5, 2023</p>
            </div>
          </div>
          <Rating defaultValue={2.5} precision={0.5} name="half-rating" readOnly/>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis inventore non officiis, molestiae quidem nulla iusto
            itaque, quam a, natus deserunt similique tempora quaerat amet neque.
            Pariatur consectetur ipsam dolore.{" "}
          </p>
        </Grid>
      </Grid>
    </div>
  );
}
