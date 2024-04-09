
import React, { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// E Learning React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Ayats from "./data/ayat.json";
import Hadiths from "./data/hadith.json";

function QuranHadith() {

    const [ayat, setAyat] = useState(Ayats[0]);
    const [hadith, setHadith] = useState(Hadiths[0]);
    const [value, onChange] = useState(new Date());

    let HijriDateEN = value.toLocaleDateString('en-SA-u-ca-islamic-umalqura',
        { timeZone: 'UTC', month: 'long', day: 'numeric', year: 'numeric' });
    console.log("date: ", HijriDateEN);
    let HijriDateAR = value.toLocaleDateString("ar-SA", {
        month: "long",
        day: "numeric",
        year: "numeric"
    });
    console.log("date: ", HijriDateAR);


    return (
        <MKBox component="section" py={3} pt={12}>
            <Container>
                <Grid container spacing={1} justifyContent="space-evenly" height="100%">
                    <Grid item xs={12} sm={10} md={6} lg={6} xl={5} mb={8} px={2}>
                        <Card style={{ minHeight: 300 }}>
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
                                    Hadith of the Day
                                </MKTypography>
                            </MKBox>
                            <MKBox pb={3} px={3}>

                                {/* <div style={{ marginBottom: -26 }} /> */}

                                <MKTypography variant="caption" textAlign={"left"}>
                                    {hadith.book + " " + hadith.number || " "}
                                </MKTypography>
                                <div style={{ marginBottom: 16 }} />

                                <MKTypography variant="h5" textAlign="right">
                                    {hadith.translation}
                                </MKTypography>
                            </MKBox>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={10} md={6} lg={6} xl={5} mb={8} px={2}>
                        <Card style={{ minHeight: 300 }}>
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
                                    Ayat of the Day
                                </MKTypography>
                            </MKBox>
                            <MKBox pb={3} px={3}>
                                {/* <div style={{ marginBottom: -16 }} /> */}

                                <MKTypography variant="caption" textAlign={"left"}>
                                    {ayat.surah + " " + ayat.verse || " "}
                                </MKTypography>
                                <div style={{ marginBottom: 12 }} />


                                <MKTypography variant="h5" textAlign="right">
                                    {ayat.arabic}
                                </MKTypography>
                                <div style={{ height: 2, backgroundColor: '#4caf4f', marginTop: 16, marginBottom: 16 }} />
                                <MKTypography variant="h5" textAlign="right">
                                    {ayat.translation}
                                </MKTypography>
                            </MKBox>
                        </Card>
                    </Grid>
                </Grid>

                <Grid container spacing={1} justifyContent="space-evenly" height="100%">

                    <Grid item xs={12} sm={10} md={6} lg={6} xl={5} mb={8} px={2} alignSelf={"center"}>
                        <Card style={{ minHeight: 300 }}>
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
                                    Islamic Calendar
                                </MKTypography>
                            </MKBox>
                            <MKBox mt={2} pb={3} px={3} alignSelf="center">
                                <MKTypography variant="h5" mb={4}textAlign="center">
                                    {HijriDateEN}
                                </MKTypography>
                                <Calendar
                                    onChange={onChange}
                                    value={value}
                                    calendarType="islamic"
                                    locale="ar-SA"
                                />

                            </MKBox>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={10} md={6} lg={6} xl={5} mb={8} px={2} alignSelf={"center"}>
                        <Card style={{ minHeight: 300 }}>
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
                                    Islamic Calendar
                                </MKTypography>
                            </MKBox>
                            <MKBox mt={2} pb={3} px={3} alignSelf="center">
                                <MKTypography variant="h5" mb={1} textAlign="center">
                                    {HijriDateAR}
                                </MKTypography>

                                <Calendar
                                    onChange={onChange}
                                    value={value}
                                    // locale="ar-SA"
                                    calendarType="islamic"
                                />

                            </MKBox>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </MKBox>
    )
}

export default QuranHadith