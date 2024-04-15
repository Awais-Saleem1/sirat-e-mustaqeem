
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Code To Success React components
import MKBox from "components/MKBox";

// Code To Success React examples
import MKTypography from "components/MKTypography";

function Details() {
  return (
    <MKBox component="section" pt={3} pb={2}>
      <Container>
        <Grid
          container spacing={3} sx={{ mb: 2 }}>
          {/* <MKTypography variant="body1" opacity={0.8} mt={1} mb={3}>
            SATISFACTION OF OUR STUDENTS IS OUR TOP PRIORITY
          </MKTypography> */}

          <MKTypography variant="body2" color="text" mb={2} mt={2}>
            We feel blessed to offer online Quran classes for various online Quran courses.
            For quality education, we have a very careful screening and selection process for our Quran tutors. They are chosen based upon their high qualification and loving nature.
          </MKTypography>

          <MKTypography variant="body2" color="text" mb={2}>
            Their noteworthy commitment and impressive dedication to their work, their remarkable aptitude for teaching each
            student according to his/her learning capability, and their exceptional mastery over the recitation, Tajweed, and
            Tarteel of the Quran are some of the things our <b> Code To Success </b> Quran Academy is extremely proud of. You are only going to find
            these things in our online Quran academy.
          </MKTypography>

          <MKTypography variant="h4" color="text" mb={2}>
            We Know What We Are Doing And We Are Experts In It!
          </MKTypography>
          <MKTypography variant="body2" color="text" mb={2}>
            The excellence of our hardworking team coupled with the numerous facilities this online Quran academy provides to its students makes us believe that we are undoubtedly the greatest and finest online Quran institution for you.
          </MKTypography>
          <MKTypography variant="body2" color="text" mb={2}>
            We provide service for people of all ages, ranging from 5-year-old children to 70-year-old people. Our flexible hours are the most attractive thing about our online Quran academy. For the ease of our respected students, we are available for you 24/7.
          </MKTypography>
          <MKTypography variant="body2" color="text" mb={2}>
            Wherever in the world you’re present and are looking for a good virtual Quran academy, we are always there to provide you with the best Quranic learning in multiple languages:
          </MKTypography>

          <Grid container justifyContent="center" sx={{ textAlign: "center" }}>
            <Grid item xs={12} md={3}>
              <MKTypography variant="h4" color="text" mb={2}>
                English
              </MKTypography>
            </Grid>
            <Grid item xs={12} md={3}>
              <MKTypography variant="h4" color="text" mb={2}>
                Urdu
              </MKTypography>
            </Grid>
            <Grid item xs={12} md={3}>
              <MKTypography variant="h4" color="text" mb={2}>
                Arabic
              </MKTypography>
            </Grid>
          </Grid>

          <MKTypography variant="body2" color="text" mb={2}>
            In our online Quran academy, distance barrier or time difference is not a problem at all. Our services extend to every corner of the world. You can take online Quran classes at home anywhere, at any time. Ensuring that you or your kids receive the best quality Quran education here is always at the top of our list.
          </MKTypography>

          <MKTypography variant="body2" color="text" mb={2}>
            Excellent teaching style: To learn Quran online with Tajweed is no longer difficult now. Our online Quran academy has always ensured that our students have the maximum possible interactive one-on-one Skype sessions with our Quran tutors to provide a better understanding of the Holy Quran. Students can learn Quran at home easily now, without having to step out of their comfort zone.
          </MKTypography>

          <MKTypography variant="body2" color="text" mb={2}>
            These virtual ones on one session help our students in getting the proper individual attention of our tutors. As a result, it also contributes to the development and strengthening of a personal student-tutor connection.
          </MKTypography>

          <MKTypography variant="body2" color="text" mb={2}>
            Strict check:  We keep a strict check on the behavior and attitude of our tutors. Our virtual Quran academy always ensures that the attitude of our tutors with the beloved students is totally satisfactory and all right. Any complaints from our students or any problems they get to face are surely dealt with properly and with a mature approach.
          </MKTypography>

          <MKTypography variant="body2" color="text" mb={2}>
            We are here to help you deal with your issues properly and decently. This guarantees a constructive environment for our students.
          </MKTypography>

          <MKTypography variant="h4" color="text" mb={2}>
            Join Us
            <MKTypography variant="body2" color="text">
              Reach out to us if you want to learn Quran online. We can’t wait to serve you like we’ve been doing for the past many years!
            </MKTypography>
          </MKTypography>

        </Grid>

      </Container>
    </MKBox>
  );
}

export default Details;
