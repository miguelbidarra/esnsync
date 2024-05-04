import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2e3192",
      contrastText: "#fff",
    },
    cyan: {
      main: "#00aeef",
      contrastText: "#fff",
    },
    magenta: {
      main: "#ec008c",
      contrastText: "#fff",
    },
    green: {
      main: "#7ac143",
      contrastText: "#fff",
    },
    orange: {
      main: "#f47b20",
      contrastText: "#fff",
    },
    background: {
      paper: "#fff",
      default: "#f5f5f5",
    },
    text: {
      primary: "#333",
      secondary: "#666",
    },
    success: {
      main: "#2dd36f",
      contrast: "#fff",
      shade: "#28ba62",
      tint: "#42d77d",
    },
    warning: {
      main: "#ffc409",
      contrast: "#000",
      shade: "#e0ac08",
      tint: "#ffca22",
    },
    danger: {
      main: "#eb445a",
      contrast: "#fff",
      shade: "#cf3c4f",
      tint: "#ed576b",
    },
    light: {
      main: "#f4f5f8",
      contrast: "#000",
      shade: "#d7d8da",
      tint: "#f5f6f9",
    },
    medium: {
      main: "#92949c",
      contrast: "#fff",
      shade: "#808289",
      tint: "#9d9fa6",
    },
    dark: {
      main: "#222428",
      contrast: "#fff",
      shade: "#1e2023",
      tint: "#383a3e",
    },
    toolbar: {
      main: "#222428",
      contrast: "#fff",
      shade: "#202226",
      tint: "#2d2f33",
    },
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
    h4: {
      fontWeight: 700,
      fontSize: "1.5rem",
    },
    body1: {
      fontWeight: 400,
      fontSize: "0.9rem",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          height: 56,
          boxShadow: "none",
          disableGutters: true,
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          // override the styles here
          width: '100%', // change the width to 80%
          height: '100%',
          paddingTop: '0px', // change the padding to 24px
          // add or override other styles as needed
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontSize: "1rem",
          padding: "0.5rem 1rem",
          borderRadius: "0.25rem",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-input": {
            textAlign: "left",
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          height: '100%',
          display: 'flex',
          alignItems: 'stretch',
        },
        indicator: {
          backgroundColor: "#fff", // or any other color you want
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: 12, // set font size to 12px
          color: "#fff", // or any other color you want
          "&.Mui-selected": {
            fontWeight: 700, // set font weight to bold when selected
            color: "#fff", // or any other color you want
          },
          textTransform: "none", // add this line to set text transform to none
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '10px 10px', // adjust the padding to your liking
        },
      },
    },
  },
});

export default theme;
