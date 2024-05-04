import React from "react";
import {
  Card,
  Avatar,
  Box,
  CardContent,
  Typography,
  List,
  ListItem,
} from "@mui/material";

const ProfileCard = ({ profile }) => {
  const { name, image, description } = profile;
  return (
    <Card sx={{ maxWidth: "550px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar alt={name} src={image} sx={{ width: 200, height: 200 }} />
      </Box>
      <CardContent sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <List>
          <ListItem sx={{ backgroundColor: "blue", color: "white" }}>
            {description}
          </ListItem>
          <ListItem></ListItem>
          <ListItem>Allowed to vote</ListItem>
        </List>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
