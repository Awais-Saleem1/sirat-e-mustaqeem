
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MuiLink from "@mui/material/Link";


// Code To Success React components
import MKBox from "components/MKBox";

// Code To Success React examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";
import MKTypography from "components/MKTypography";

function CoursesDetail() {
  return (
    <MKBox component="section" pt={8} pb={8}>
      <Grid container spacing={1} justifyContent="space-evenly" height="100%">
        <Grid item xs={11} sm={9} md={5} lg={5} xl={3.8}>
          <Card>
            <MKBox
              variant="gradient"
              bgColor="success"
              borderRadius="lg"
              coloredShadow="info"
              mx={2}
              mt={-3}
              p={2}
              mb={1}
              textAlign="center"
            >
              <MKTypography variant="h4" fontWeight="medium" color="white">
                Noorani Qaida
              </MKTypography>
            </MKBox>
            <MKBox pt={4} pb={3} px={3}>
              <MKTypography variant="body2" color="text" mb={1}>
                Noorani qaida is the cornerstone of the sacred process of learning the Holy Quran. It is the
                first and foremost step in the journey of learning the Holy Quran, be it learning nazirah or
                taking up tajweed course.
              </MKTypography>
              <MKTypography variant="body2" color="text" mb={1}>
                Noorani Qaida exercises start with basic Arabic alphabets. Qaida
                starts with Arabic alphabets, after which it shows the connection between Alphabets. It also
                teaches the accessory of Zabr, Zehr, and Paysh. The students learn recognition of letters in
                individual and compound forms. They learn proper sounds of each letter. They learn how long
                should be a movement of tongue and how the certain words need to be stretched while
                enunciating. The students learn different rules of noon sakin, meem sakin and waqf.
              </MKTypography>
              <MKTypography variant="body2" color="text" mb={1}>
                After learning Noorani Qaida they are able to recognize words and join the words. Sound foundation
                in learning Noorani Qaida helps students read Quran with proper pronunciation. Learning this
                booklet is not just for children but adults also must bCode To Success Noorani Qaida in order to
                work through tajweed rules and improve the accuracy in recitation of Quran.
              </MKTypography>

            </MKBox>
          </Card>
        </Grid>

        <Grid item xs={11} sm={9} md={5} lg={5} xl={3.8}>
          <Card>
            <MKBox
              variant="gradient"
              bgColor="success"
              borderRadius="lg"
              coloredShadow="info"
              mx={2}
              mt={-3}
              p={2}
              mb={1}
              textAlign="center"
            >
              <MKTypography variant="h4" fontWeight="medium" color="white">
                Nazra-e-Quran
              </MKTypography>
            </MKBox>
            <MKBox pt={4} pb={3} px={3}>
              <MKTypography variant="body2" color="text" mb={1}>
                Nazra is to read the Holy Quran verbally, without translation.
              </MKTypography>
              <MKTypography variant="body2" color="text" mb={1}>
                For kids: teach Quran from a young age to your kids. It will develop
                the Islamic values and maintain a strong faith in Allah in them.
                If a kid acquires the basic knowledge of Quran from an early age, it becomes
                easier for them to follow the teachings of Islam in adulthood.
              </MKTypography>

              <MKTypography variant="body2" color="text" mb={1}>
                For adults: learning Quran is never too late. Anyone can join this online academy belonging to any age group.
                Reciting and understanding Quran Pak is compulsory for understanding the true message of Allah.
              </MKTypography>

              <MKTypography variant="body2" color="text" mb={1}>
                We offer a comprehensive Quran course for kids to provide a sound foundation of islamic
                education for young minds. Holy Quran is the word of Allah and is considered very important for Muslims.
                Allah has communicated to Muslims through Quran through Holy Prophet Muhammad (S.A.W).
                It is also one of the primary sources of Sharia (moral and legal code through
                which Muslims are expected to lead their lives). Hence, it is of vital importance that
                kids belonging to Muslim families learn the Quran and noorani qaida from an earlier age.
              </MKTypography>
            </MKBox>
          </Card>
        </Grid>

        <Grid item xs={11} sm={9} md={5} lg={5} xl={3.8}>
          <Card>
            <MKBox
              variant="gradient"
              bgColor="success"
              borderRadius="lg"
              coloredShadow="info"
              mx={2}
              mt={-3}
              p={2}
              mb={1}
              textAlign="center"
            >
              <MKTypography variant="h4" fontWeight="medium" color="white">
                Hifz-e-Quran
              </MKTypography>
            </MKBox>
            <MKBox pt={4} pb={3} px={3}>
              <MKTypography variant="body2" color="text" mb={1}>
                The memorization of Quran or Hifz e Quran is an important religious practice. It is an act
                of worship that brings immense reward for the believer. There’s no doubt that reciting Quran
                and perfecting your tajweed are extremely noble goals, and the rewards for them are great
                and unique. However, the memorizers of the Quran enjoy a special status above all.
              </MKTypography>

              <MKTypography variant="body2" color="text" mb={1}>
              The Messenger of Allah said,
                “The best amongst you is the one who learns the Qur’an and teaches it”.
                (Al-Bukhari)
              </MKTypography>

              <MKTypography variant="body2" color="text" mb={1}>
                What you have is so valuable that you are the only one in this universe,
                along with one other type of person, worthy of being envied.
              </MKTypography>

              <MKTypography variant="body2" color="text" mb={1}>
                One of the miracles of the Quran is that Allaah made it easy for us to memorize,
                as He, Subhaanahu wa Ta’aala, said:
              </MKTypography>

              <MKTypography variant="h4" color="text" mb={1} textAlign="right" pr={2} pb={1}>
                يَسَّرۡنَا ٱلۡقُرۡءَانَ لِلذِّكۡرِ فَهَلۡ مِن مُّدَّكِرٍ۬
              </MKTypography>

              <MKTypography variant="body2" color="text" mb={1}>
                And We have indeed made the Qur’an easy to understand and remember, then is there any that
                will remember? (Al-Qamar:17,22,32,40)
              </MKTypography>

            </MKBox>
          </Card>
        </Grid>
      </Grid>
    </MKBox>
  );
}

export default CoursesDetail;
