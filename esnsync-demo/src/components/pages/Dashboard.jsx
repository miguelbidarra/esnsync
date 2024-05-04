import {
  Grid,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  Link as MuiLink,
} from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";

import NewsCard from "../../components/cards/NewsCard";

import image1 from "./../../assets/esnlive.png";
import image2 from "./../../assets/ga.png";
import image3 from "./../../assets/mandate.png";

const Dashboard = () => {
  return (
    <Container>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start" // align content to the top
      >
        <Grid item xs={12} sm={12} md={6} sx={{ pt: 3 }}>
          <Typography
            variant="h6"
            style={{textAlign: "center" }}
          >
            News
          </Typography>
          <Typography variant="body1" style={{ textAlign: "center" }}>
            Here are the latest news
          </Typography>
          <Grid container spacing={3}>
            {" "}
            {/* Added spacing={3} here */}
            <Grid item xs={12}>
              <NewsCard
                title="New ESNSync Platfrom"
                description="We have a new tool to help us on the section, lets go team oh yeah baby!"
                image={image1}
              />
            </Grid>
            <Grid item xs={12}>
              <NewsCard
                title="General Assembly"
                description="Next Ga coming soon... Read the documents, prepare your decisions well!"
                image={image2}
              />
            </Grid>
            <Grid item xs={12}>
              <NewsCard
                title="Candidacies for Mandate 2024/2025"
                description="The candidacies for the next Statutory Bodies coming soon. also this is jnot working like it should You can replace it with your actual content."
                image={image3}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}  md={6} sx={{ pt: 3 , px:3}}>
          <Typography
            variant="h6"
            style={{ textAlign: "center" }}
          >
            Useful Links
          </Typography>
          <Typography variant="body1" style={{ textAlign: "center" }}>
            Here you can access document files
          </Typography>
          <List style={{ backgroundColor: "white" }}>
            <ListItem disablePadding>
              <ListItemButton
                component={MuiLink}
                href="https://eventupp.eu/"
                target="_blank"
                rel="noopener"
              >
                <ListItemIcon>
                  <LinkIcon />
                </ListItemIcon>
                <ListItemText primary="ESN Portal" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                component={MuiLink}
                href="https://egm-app.click/"
                target="_blank"
                rel="noopener"
              >
                <ListItemIcon>
                  <LinkIcon />
                </ListItemIcon>
                <ListItemText primary="EGM App" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                component={MuiLink}
                href="https://ga.esn.org/"
                target="_blank"
                rel="noopener"
              >
                <ListItemIcon>
                  <LinkIcon />
                </ListItemIcon>
                <ListItemText primary="GA App" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                component={MuiLink}
                href="https://drive.google.com/file/d/140n11LyEW5tzFJog4h0ESVc4znt20pen/view?usp=sharing"
                target="_blank"
                rel="noopener"
              >
                <ListItemIcon>
                  <LinkIcon />
                </ListItemIcon>
                <ListItemText primary="Standing Orders" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                component={MuiLink}
                href="https://drive.google.com/file/d/1uZW-axlbzCrgRcfXhFCnlyqlG6ORHcjc/view?usp=sharing"
                target="_blank"
                rel="noopener"
              >
                <ListItemIcon>
                  <LinkIcon />
                </ListItemIcon>
                <ListItemText primary="Statutes" />
              </ListItemButton>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
