import * as React from "react";
import { AppBar, Tabs, Tab, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import BugReportIcon from "@mui/icons-material/BugReport";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import logo from "../../assets/esnstar.png";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";

const NavBar = () => {
  const navigate = useNavigate();

  const [bottomNavValue, setBottomNavValue] = useState(0);
  const [tabValue, setTabValue] = useState(1);
  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const handleBottomNavChange = (event, newValue) => {
    setBottomNavValue(newValue);
    const tabLabels = ["dashboard", "events", "test", "settings", "profile"];
    navigate(`/${tabLabels[newValue]}`, { replace: true });
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    const tabLabels = [
      "dashboard",
      "dashboard",
      "events",
      "test",
      "settings",
      "profile",
    ]; // Add an empty string for the logo tab
    navigate(`/${tabLabels[newValue]}`, { replace: true }); // Subtract 1 from newValue
  };

  return (
    <>
      {isMediumScreen ? (
        <BottomNavigation
          value={bottomNavValue}
          onChange={handleBottomNavChange}
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        >
          <BottomNavigationAction
            alt="Dashboard"
            label=""
            icon={<HomeIcon />}
          />
          <BottomNavigationAction
            alt="Events"
            label=""
            icon={<LibraryBooksIcon />}
          />
          <BottomNavigationAction
            alt="Test"
            label=""
            icon={<BugReportIcon />}
          />
          <BottomNavigationAction
            alt="Settings"
            label=""
            icon={<SettingsIcon />}
          />
          <BottomNavigationAction
            alt="Profile"
            label=""
            icon={<PersonIcon />}
          />
        </BottomNavigation>
      ) : (
        <AppBar position="static" color="toolbar">
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            aria-label="basic tabs example"
          >
            <Tab
              icon={
                <img
                  src={logo}
                  alt="Logo"
                  style={{ width: "25px", height: "auto" }}
                />
              }
              value={1}
            />
            <Tab label="Dashboard" />
            <Tab label="Events" />
            <Tab label="Test" />
            <Tab label="Settings" />
            <Tab label="Profile" />
          </Tabs>
        </AppBar>
      )}
    </>
  );
};

export default NavBar;
