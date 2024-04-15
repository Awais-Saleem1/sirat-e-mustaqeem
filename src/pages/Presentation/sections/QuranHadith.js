
import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Code To Success React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import ayatsArr from "./data/ayat.json";
import hadithsArr from "./data/hadith.json";

function QuranHadith() {

    const [ayat, setAyat] = useState(0);
    const [hadith, setHadith] = useState(0);

    // multipy with 60 for 1 minute / 3600 for 1 hour / 86400 for 24 hours
    let timeInterval = 1000 * 10;

    useEffect(() => {
        setTimeout(() => {
            if (hadith == hadithsArr.length - 1) {
                setHadith(0)
            } else
                setHadith(hadith + 1)
        }, timeInterval);
    }, [hadith])

    useEffect(() => {
        setTimeout(() => {
            if (ayat == ayatsArr.length - 1) {
                setAyat(0)
            } else
                setAyat(ayat + 1)
        }, timeInterval);
    }, [ayat])

    console.log('verse: ', ayatsArr[ayat].verse)


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
                                <MKTypography variant="caption" textAlign={"left"}>
                                    {/* {hadith.book + " " + hadith.number || " "} */}
                                    {hadithsArr[hadith].book + " " + hadithsArr[hadith].number || " "}
                                </MKTypography>
                                <div style={{ marginBottom: 16 }} />

                                <MKTypography variant="h5" textAlign="right">
                                    {hadithsArr[hadith].translation || " "}
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
                                <MKTypography variant="caption" textAlign={"left"}>
                                    {ayatsArr[ayat].verse + " " + ayatsArr[ayat].surah || " "}
                                </MKTypography>
                                <div style={{ marginBottom: 10 }} />

                                <MKTypography variant="h5" textAlign="right">
                                    {ayatsArr[ayat].arabic}
                                </MKTypography>
                                <div style={{ height: 1, backgroundColor: '#4caf4f', marginTop: 12, marginBottom: 12 }} />
                                <MKTypography variant="h5" textAlign="right">
                                    {ayatsArr[ayat].translation}
                                </MKTypography>
                            </MKBox>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </MKBox>
    )
}

export default QuranHadith