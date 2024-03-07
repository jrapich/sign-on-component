import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemText
} from "@mui/material";

const flexCenter = {
  display: "flex",
  justifyContent: "center",
};

export default function SignUp() {
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
                <ListItemIcon>
                  {/* icon here */}
                </ListItemIcon>
                <ListItemText primary="Your First and Last Name" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {/* icon here */}
                </ListItemIcon>
                <ListItemText primary="Primary Email Address you use with your dealership" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding >
              <ListItemButton>
                <ListItemIcon>
                  {/* email icon */}
                </ListItemIcon>
                <ListItemText primary="Primary dealership certificate from your associated vehicle manufacturer, in PDF form" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Container>
    </Container>
  );
}
