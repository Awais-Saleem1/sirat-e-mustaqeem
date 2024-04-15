
import React, { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Code To Success React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import events from "./data/islamicEvents.json";

import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';

// import styles "./";
import { } from "./data/styles.css";


function CalendarEvents() {
    // console.log(events.event)

    const [value, onChange] = useState(new Date());

    const options = {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    };

    let date = value.toLocaleDateString(undefined, options);
    let HijriDateAR = value.toLocaleDateString("ar-SA", options);

    return (
        <MKBox component="section" py={3} pt={12}>
            <Container>
                <Grid container spacing={1} justifyContent="space-evenly" height="100%">

                    <Grid item xs={12} sm={10} md={6} lg={6} xl={5} mb={8} px={2} alignSelf={"center"}>
                        <Card style={{ height: 400 }}>
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
                                    Calendar
                                </MKTypography>
                            </MKBox>
                            <MKBox mt={1} pb={3} px={3} alignSelf="center">
                                <MKTypography color="black" variant="h5" mb={1} textAlign="center">
                                    {date}  / {HijriDateAR}
                                </MKTypography>
                                <div style={{ height: 1, backgroundColor: '#4caf4f', marginTop: 6, marginBottom: 6 }} />

                                <Calendar
                                    onChange={onChange}
                                    value={value}
                                // calendarType="islamic"
                                />
                            </MKBox>
                        </Card>
                    </Grid>


                    <Grid item xs={12} sm={10} md={6} lg={6} xl={5} mb={8} px={2} >
                        <Card style={{ height: 400 }}>
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
                                    Islamic Events
                                </MKTypography>
                            </MKBox>
                            <MKBox mt={0.5} pb={3} px={3}>

                                {events.map((item, index) =>
                                    <div>
                                        <div style={{ display: "flex", alignItems: 'center', justifyContent: 'space-between' }}>
                                            <MKTypography variant="h6" >
                                                {item.event}:
                                            </MKTypography>

                                            <MKTypography variant="body2" >
                                                {' ' + item.date + ' '}
                                            </MKTypography>
                                        </div>
                                        {index != events.length - 1 && < div style={{ height: 1, backgroundColor: '#4caf4f', marginTop: 6, marginBottom: 6 }} />}
                                    </div>
                                )}
                            </MKBox>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </MKBox>
    )
}

export default CalendarEvents
