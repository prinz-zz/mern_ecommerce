import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <>
      <Grid
        container
        className="bg-black text-white text-center mt-10 p-4"
        sx={{ background: "#000", color: "#fff" }}>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant={"h6"}>
            Company
          </Typography>
          <div>
            <button className="pb-5" variant={"h6"} gutterbottom="true">
              About
            </button>
          </div>
          <div>
            <button className="pb-5" variant={"h6"} gutterbottom="true">
              Blog
            </button>
          </div>
          <div>
            <button className="pb-5" variant={"h6"} gutterbottom="true">
              Press
            </button>
          </div>
          <div>
            <button className="pb-5" variant={"h6"} gutterbottom="true">
              Jobs
            </button>
          </div>
          <div>
            <button className="pb-5" variant={"h6"} gutterbottom="true">
              Partners
            </button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant={"h6"}>
            Solutions
          </Typography>
          <div>
            <button className="pb-5" variant={"h6"} gutterbottom="true">
              Analitics
            </button>
          </div>
          <div>
            <button className="pb-5" variant={"h6"} gutterbottom="true">
              Commerce
            </button>
          </div>
          <div>
            <button className="pb-5" variant={"h6"} gutterbottom="true">
              Insights
            </button>
          </div>
          <div>
            <button className="pb-5" variant={"h6"} gutterbottom="true">
              Support
            </button>
          </div>
          <div>
            <button className="pb-5" variant={"h6"} gutterbottom="true">
              Marketing
            </button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant={"h6"}>
            Documentation
          </Typography>
          <div>
            <button className="pb-5" variant={"h6"} gutterbottom="true">
              Guides
            </button>
          </div>
          <div>
            <button className="pb-5" variant={"h6"} gutterbottom="true">
              API Status
            </button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant={"h6"}>
            Legal
          </Typography>
          <div>
            <button className="pb-5" variant={"h6"} gutterbottom="true">
              Claim
            </button>
          </div>
          <div>
            <button className="pb-5" variant={"h6"} gutterbottom="true">
              Privacy
            </button>
          </div>
          <div>
            <button className="pb-5" variant={"h6"} gutterbottom="true">
              Terms
            </button>
          </div>

        </Grid>
      </Grid>
    </>
  );
}
