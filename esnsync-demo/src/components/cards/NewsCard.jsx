import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardHeader,
} from "@mui/material";

const NewsCard = ({ title, description, image }) => {
  return (
    <Card sx={{ maxWidth: "550px" }}>
      <CardMedia component="img" height="194" image={image} alt="image" />
      <CardContent sx={{ display: "flex", flexDirection: "column" }}>
        <CardHeader 
        title={title} 
        subheader={description}>
        </CardHeader>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
