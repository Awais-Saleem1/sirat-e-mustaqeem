
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Code To Success React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Code To Success React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import PriceDetail from "pages/LandingPages/Prices/sections/PriceDetail";

// Routes
import routes from "routes";

// Images
import bgImage from "assets/images/bg-about-us.jpg";
import CenteredFooter from "examples/Footers/CenteredFooter";

function Prices() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://wa.me/923164446868?text=I'm%20interested%20in%20online%20Quran%20class.",
          label: "WhatsApp",
          color: "success",
        }}
        // transparent
        // light
      />
      <MKBox
        minHeight="40vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
            
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Our Price
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
            Select available packages  as per your available time schedule.
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <MKTypography variant="body2" color="text" mt={3} mb={1}>
          Fee is charged on monthly basis including the public holidays. Low income families are offered 10% discount. We
          take fee in advance after you finished the trial classes and at the time of joining the regular classes.
        </MKTypography>
        <PriceDetail />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <CenteredFooter />
      </MKBox>
    </>
  );
}

export default Prices;
