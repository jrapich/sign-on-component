import {
  Box,
  Container,
  Typography,
  TextField,
  Divider,
  Button,
} from "@mui/material";
import { useRef } from "react";

//repeating styles, if any
const flexCenter = {
  display: "flex",
  justifyContent: "center",
};

export default function SignUp() {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const pdfRef = useRef("");

  //function to capture and submit data to REST API
  const sendToRest = async () => {
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(pdfRef.current.value);

    const sendDetails = await fetch("/api/signup/dealer", {
      method: "POST",
      body: JSON.stringify({
        name: nameRef.value,
        email: emailRef.value,
        pdf: pdfRef.value,
      }),
      headers: { "Content-Type": "application/json" },
    });

    const response = await sendDetails.json();
    console.log(response);
  };

  return (
    <Container
      maxWidth={"sm"}
      disableGutters
      sx={{
        //modal width, height, border
        borderColor: "black",
        borderLeft: 2,
        borderRight: 2,
        borderTop: 2,
        borderBottom: 2,
        p: 0,
        m: 0,
        //height: 820,
        maxHeight: "100%",
        width: "100%",
      }}
    >
      <Container>
        {/* <Box sx={flexCenter}>
          <Typography
            component={"h1"}
            variant={"h4"}
            sx={{
              mt: 4,
            }}
          >
            Certified Dealer Registration
          </Typography>
        </Box> */}
        <Box
          sx={{
            ...flexCenter,
            mt: 2,
          }}
        >
          <Typography component={"h2"} variant="h6" align={"center"}>
            To provide the utmost service to our clients and to protect against
            fraud, we have requirements to verify you are a certified vehicle
            dealer.
          </Typography>
        </Box>
        <Divider />
        <Container disableGutters maxWidth={false}>
          <Box sx={{ my: 2 }}>
            <Box
              sx={{
                pb: 2,
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* name */}
              <TextField
                label={"First/Last name"}
                inputRef={nameRef}
                sx={{
                  mb: 2,
                }}
              />
              {/* email */}
              <TextField
                label={"Valid email"}
                inputRef={emailRef}
                sx={{
                  mb: 2,
                }}
              />
              {/* dealership */}
              <TextField
                sx={{
                  mb: 2,
                }}
                label={"Dealership Name"}
                inputRef={pdfRef}
              />
            </Box>
            <Box sx={flexCenter}>
              <TextField inputRef={pdfRef} type="file" fullWidth helperText={"PDF containing your dealership certification from your vehicle manufacturer"} />
            </Box>
          </Box>
          <Box sx={flexCenter}>
            <Button
              variant="outlined"
              onClick={sendToRest}
              sx={{
                mb: 4,
              }}
            >
              SUBMIT
            </Button>
            <Box sx={{ ...flexCenter, mt: 2 }}></Box>
          </Box>
          <Box sx={flexCenter}>
            <Typography variant="body2" align={"center"} >
              Once your info is manually reviewed, we will email to
              you, an approved signup link to which you will use to create an
              account with a username/password. Our team will also reach out to
              you with any questions or concerns during the verification
              process.
            </Typography>
          </Box>
        </Container>
      </Container>
    </Container>
  );
}
