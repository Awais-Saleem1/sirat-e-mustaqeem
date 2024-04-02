import React, { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MuiLink from "@mui/material/Link";


// E Learning React components
import MKBox from "components/MKBox";

// E Learning React examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";
import MKTypography from "components/MKTypography";

function PriceDetail() {
  const [plans, setPlans] = useState([]);
  const [annually, setAnnually] = useState(false)

  return (
    <MKBox component="section" pt={8} pb={8}>
      <Grid container spacing={1} justifyContent="space-evenly" height="100%">
        <Grid item xs={12} sm={10} md={6} lg={5} xl={3} mb={4}>
          <Card>
            <MKBox
              variant="gradient"
              // bgColor="success"
              borderRadius="lg"
              coloredShadow="info"
              mx={2}
              mt={-4}
              p={2}
              mb={1}
              textAlign="center"
              sx={() => ({
                cursor: "pointer",
                backgroundColor: "#4caf4f",
                "&:hover": {
                  backgroundColor: "green",
                  color: 'black',
                }
              })}
            >
              <MKTypography variant="h4" fontWeight="medium" color="white">
                Weekend Plan
              </MKTypography>
            </MKBox>
            <MKBox pt={4} pb={3} px={3} textAlign="center">
              <MKTypography variant="body2" >
                <b>$25</b> Per Month
              </MKTypography>
              <div style={{ height: 1, backgroundColor: 'lightgrey', marginTop: 6, marginBottom: 6 }} />

              <MKTypography variant="body2" fontWeight="light">
                Online Classes
              </MKTypography>
              <div style={{ height: 1, backgroundColor: 'lightgrey', marginTop: 6, marginBottom: 6 }} />

              <MKTypography variant="body2" >
                <strong>2</strong> classes per week
              </MKTypography>
              <div style={{ height: 1, backgroundColor: 'lightgrey', marginTop: 6, marginBottom: 6 }} />

              <MKTypography variant="body2" mb="2" border="4" >
                <b>8</b> classes per Month
              </MKTypography>
              <div style={{ height: 1, backgroundColor: 'lightgrey', marginTop: 6, marginBottom: 6 }} />

              <MKTypography variant="body2" fontWeight="medium">
                One to one sessions
              </MKTypography>
              <div style={{ height: 1, backgroundColor: 'lightgrey', marginTop: 6, marginBottom: 6 }} />

              <MKTypography variant="body2" >
                <b>2</b> days FREE Trial
              </MKTypography>
              <div style={{ height: 1, backgroundColor: 'lightgrey', marginTop: 6, marginBottom: 6 }} />

              <MKTypography variant="body2" fontWeight="light" >
                Flexible timing
              </MKTypography>
            </MKBox>
          </Card>
        </Grid>

        <Grid item xs={12} sm={10} md={6} lg={5} xl={3.2} mb={4}>
          <Card>
            <MKBox
              variant="gradient"
              // bgColor="success"
              borderRadius="lg"
              coloredShadow="info"
              mx={2}
              mt={-4}
              p={2}
              mb={1}
              textAlign="center"
              sx={() => ({
                cursor: "pointer",
                backgroundColor: "#4caf4f",
                "&:hover": {
                  backgroundColor: "green",
                  color: 'black',
                }
              })}
            >
              <MKTypography variant="h3" fontWeight="medium" color="white">
                Weekdays Plan
              </MKTypography>
            </MKBox>
            <MKBox pt={4} pb={3} px={3} textAlign="center">
              <MKTypography variant="body2" >
                <b>$35</b> Per Month
              </MKTypography>
              <div style={{ height: 1, backgroundColor: 'lightgrey', marginTop: 6, marginBottom: 6 }} />

              <MKTypography variant="body2" fontWeight="light">
                Online Classes
              </MKTypography>
              <div style={{ height: 1, backgroundColor: 'lightgrey', marginTop: 6, marginBottom: 6 }} />

              <MKTypography variant="body2" >
                <strong>5</strong> classes per week
              </MKTypography>
              <div style={{ height: 1, backgroundColor: 'lightgrey', marginTop: 6, marginBottom: 6 }} />

              <MKTypography variant="body2" mb="2" border="4" >
                <b>20</b> classes per Month
              </MKTypography>
              <div style={{ height: 1, backgroundColor: 'lightgrey', marginTop: 6, marginBottom: 6 }} />

              <MKTypography variant="body2" fontWeight="medium">
                One to one sessions
              </MKTypography>
              <div style={{ height: 1, backgroundColor: 'lightgrey', marginTop: 6, marginBottom: 6 }} />

              <MKTypography variant="body2" >
                <b>2</b> days FREE Trial
              </MKTypography>
              <div style={{ height: 1, backgroundColor: 'lightgrey', marginTop: 6, marginBottom: 6 }} />

              <MKTypography variant="body2" fontWeight="light" >
                Flexible timing
              </MKTypography>
            </MKBox>
          </Card>
        </Grid>

        <Grid item xs={12} sm={10} md={6} lg={5} xl={3} mb={4}>
          <Card>
            <MKBox
              variant="gradient"
              // bgColor="success"
              borderRadius="lg"
              coloredShadow="info"
              mx={2}
              mt={-4}
              p={2}
              mb={1}
              textAlign="center"
              sx={() => ({
                cursor: "pointer",
                backgroundColor: "#4caf4f",
                "&:hover": {
                  backgroundColor: "green",
                  color: 'black',
                }
              })}
            >
              <MKTypography variant="h4" fontWeight="medium" color="white">
                Custom Plan
              </MKTypography>
            </MKBox>
            <MKBox pt={4} pb={3} px={3} textAlign="center">
              <MKTypography variant="body2" >
                <b>$35</b> Per Month
              </MKTypography>
              <div style={{ height: 1, backgroundColor: 'lightgrey', marginTop: 6, marginBottom: 6 }} />

              <MKTypography variant="body2" fontWeight="light">
                Online Classes
              </MKTypography>
              <div style={{ height: 1, backgroundColor: 'lightgrey', marginTop: 6, marginBottom: 6 }} />

              <MKTypography variant="body2" >
                <strong>Choose</strong> classes per week
              </MKTypography>
              <div style={{ height: 1, backgroundColor: 'lightgrey', marginTop: 6, marginBottom: 6 }} />

              {/* <MKTypography variant="body2" mb="2" border="4" >
                <b>20</b> classes per Month
              </MKTypography>
              <div style={{ height: 1, backgroundColor: 'lightgrey', marginTop: 6, marginBottom: 6 }} /> */}

              <MKTypography variant="body2" fontWeight="medium">
                One to one sessions
              </MKTypography>
              <div style={{ height: 1, backgroundColor: 'lightgrey', marginTop: 6, marginBottom: 6 }} />

              <MKTypography variant="body2" >
                <b>2</b> days FREE Trial
              </MKTypography>
              <div style={{ height: 1, backgroundColor: 'lightgrey', marginTop: 6, marginBottom: 6 }} />

              <MKTypography variant="body2" fontWeight="light" >
                Flexible timing
              </MKTypography>
            </MKBox>
          </Card>
        </Grid>

      </Grid>

      {/* </Grid> */}
    </MKBox>
  );
}

export default PriceDetail;
