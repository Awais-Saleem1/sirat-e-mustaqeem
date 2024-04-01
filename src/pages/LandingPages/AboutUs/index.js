
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// E Learning React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// E Learning React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import Details from "pages/LandingPages/AboutUs/sections/Details";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage1 from "assets/images/rotating-card-bg-front.jpeg"
import CenteredFooter from "examples/Footers/CenteredFooter";

function AboutUs() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
            route: "https://wa.me/923214638690?text=I'm%20interested%20in%20online%20Quran%20class.",
            label: "WhatsApp",
            color: "success",
        }}
        transparent
        light
      />
      <MKBox
        minHeight="30vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage1})`,
            // )}, url(${bgMasjid})`,
            
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
              About Us
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
              SATISFACTION OF OUR STUDENTS IS OUR TOP PRIORITY
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
        <Details />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <CenteredFooter />
      </MKBox>
    </>
  );
}

export default AboutUs;
