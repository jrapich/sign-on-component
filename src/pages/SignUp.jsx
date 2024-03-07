import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemText,
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
      maxWidth={false}
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
        height: 700,
        width: 600,
      }}
    >
      <Container>
        <Box sx={flexCenter}>
          <Typography
            component={"h1"}
            variant={"h4"}
            sx={{
              mt: 4,
            }}
          >
            Certified Dealer Registration
          </Typography>
        </Box>
        <Box
          sx={{
            ...flexCenter,
            mt: 2,
          }}
        >
          <Typography component={"h2"} variant="h6" sx={{}}>
            To provide the utmost service to our clients and to protect against
            fraud, we have requirements to verify you are a certified vehicle
            dealer. These requirements are:
          </Typography>
        </Box>
        <Box sx={{ ...flexCenter, mt: 2 }}>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>{/* icon here */}</ListItemIcon>
                <ListItemText primary="Your First and Last Name" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>{/* icon here */}</ListItemIcon>
                <ListItemText primary="Primary Email Address you use with your dealership" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>{/* email icon */}</ListItemIcon>
                <ListItemText primary="Primary dealership certificate from your associated vehicle manufacturer, in PDF form" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
        <Divider />
        <Container disableGutters maxWidth={false}>
          <Box sx={{ my: 2 }}>
            <Box
              sx={{
                pb: 2,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {/* name */}
              <TextField label={"First/Last name"} inputRef={nameRef} />
              {/* email */}
              <TextField label={"Email"} inputRef={emailRef} />
            </Box>
            <Box>
              <TextField label={"certificate PDF"} inputRef={pdfRef} fullWidth />
            </Box>
          </Box>
          <Box sx={flexCenter}>
            <Button variant="outlined" onClick={sendToRest}>
              SUBMIT
            </Button>
            <Box sx={{ ...flexCenter, mt: 2 }}></Box>
          </Box>
        </Container>
      </Container>
    </Container>
  );
}
