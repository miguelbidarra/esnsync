import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Box,
  Button,
  Container,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import EditIcon from "@mui/icons-material/Edit";
import img from "./../../assets/profilepic.jpg";
import { logoutUser } from "../../auth/auth";
import { useContext } from "react";
import UserContext from "../../auth/UserContext";

const ProfileItem = ({ label, value }) => (
  <ListItem>
    <ListItemText>
      <Box sx={{ color: "text.secondary" }}>{label}</Box>
      <Box sx={{ color: "text.primary", fontSize: 16 }}>{value}</Box>
    </ListItemText>
  </ListItem>
);

const Profile = () => {
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    setUser(null);
    logoutUser();
    // navigate to the login page or the root route
    // you can use the `useNavigate` hook from `react-router-dom` for this
  };

  return (
    <Container maxWidth="xs" sx={{ py: 4 }}>
      <Card>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Avatar src={img} sx={{ width: 200, height: 200 }} />
          </Box>
          <List style={{ padding: 0, backgroundColor: "white" }}>
            <ProfileItem
              label="Name"
              value={
                user
                  ? `${user.firstname} ${user.lastname}`
                  : "Firstname Lastname"
              }
            />
            <ProfileItem
              label="Email"
              value={user ? `${user.email}` : "example@gmail.com"}
            />
            <ProfileItem
              label="Password"
              value={user ? `${user.password}` : "None"}
            />
            <ListItem sx={{ backgroundColor: "grey", color: "white" }}>
              <Button>
                <EditIcon
                  sx={{ backgroundColor: "transparent", color: "white" }}
                />
              </Button>
            </ListItem>
          </List>
          <Typography variant="h6" textAlign={"center"} sx={{ mt: 4, mb: 2 }}>
            My Events
          </Typography>
          <List style={{ padding: 0, backgroundColor: "white" }}>
            <ListItem>
              <ListItemText primary="Neon Rave" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Train Party" />
            </ListItem>
          </List>
          <Typography variant="h6" textAlign={"center"} sx={{ mt: 4, mb: 2 }}>
            Other actions
          </Typography>
          <List style={{ padding: 0, backgroundColor: "white" }}>
            <ListItem disablePadding>
              <ListItemButton onClick={handleLogout}>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItemButton>
            </ListItem>
          </List>
        </CardContent>
        <CardActions sx={{ justifyContent: "flex-end" }} />
      </Card>
    </Container>
  );
};

export default Profile;
