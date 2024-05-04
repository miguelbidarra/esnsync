import React, { useState, useEffect, useContext } from "react";
import {
  Container,
  Grid,
  Fade,
  Paper,
  TextField,
  Stack,
  Typography,
  Button,
  FormControl,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  userLogin,
  createDemoUser,
  getLoggedInUser,
  logoutUser,
} from "../../auth/auth";
import UserContext from "../../auth/UserContext";
import AutoModeIcon from "@mui/icons-material/AutoMode";
import LoginIcon from "@mui/icons-material/Login";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import logo from "./../../assets/esnstar.png";

export default function LoginPage() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [show, setShow] = useState(false);
  const [usernameValue, setUsernameValue] = useState("");
  const [LoginError, setLoginError] = useState("");
  const [UsernameError, setUsernameError] = useState("");
  const [PasswordError, setPasswordError] = useState("");
  const [passwordValues, setPasswordValues] = useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 100);
  }, []);

  const handleChange = (prop) => (event) => {
    setPasswordValues({ ...passwordValues, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setPasswordValues({
      ...passwordValues,
      showPassword: !passwordValues.showPassword,
    });
  };

  const handleShowPassword = (event) => {
    event.preventDefault();
  };

  const userIsLoggedIn = () => {
    const loggedInUser = getLoggedInUser();
    if (loggedInUser !== null) {
      setUser(loggedInUser);
      return true;
    }
    setUser(null);
    return false;
  };

  const gotoDashboard = () => {
    navigate("../dashboard");
  };

  const login = () => {
    let submit = true;
    if (passwordValues.password === "") {
      setPasswordError("Enter the password.");
      submit = false;
    } else {
      setPasswordError("");
    }
    if (usernameValue === "") {
      setUsernameError("Enter your username.");
      submit = false;
    } else {
      setUsernameError("");
    }
    if (submit === true) {
      const user = userLogin(usernameValue, passwordValues.password);
      if (userIsLoggedIn.correctPassword === true) {
        setLoginError("");
        setUser(user);
        navigate("../");
      } else {
        setLoginError("Please recheck your username & password.");
      }
    }
  };

  const demoLogin = () => {
    createDemoUser();
    setUser(null);
    logoutUser();
    const username = "admin";
    const password = "password";
    setUsernameValue(username);
    setPasswordValues({
      ...passwordValues,
      password,
    });
  };

  const handleCreateNewAccount = () => {
    navigate("../signup");
  };

  return (
    <>
      {userIsLoggedIn() && gotoDashboard()}
      <Fade in={show}>
        <Container maxWidth="xs" sx={{ height: 1 }}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{ height: 1 }}
          >
            <Grid item>
              <Paper elevation={3}>
                <Grid
                  container
                  spacing={3}
                  justifyContent="center"
                  alignItems="center"
                  p={4}
                >
                  <Grid
                    item
                    container
                    justifyContent="center"
                    alignItems="center"
                    xs={12}
                  >
                    <Grid item>
                      <img src={logo} alt="Sign up" width="100" height="auto" />
                      <Typography variant="h4" component="div">
                        ESNSync
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid item xs={12}>
                    <Stack spacing={1}>
                      <TextField
                        label="Username"
                        id="outlined"
                        type="username"
                        value={usernameValue}
                        onChange={(e) => setUsernameValue(e.target.value)}
                      />

                      <FormControl variant="outlined">
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <OutlinedInput
                          id="password"
                          type={
                            passwordValues.showPassword ? "text" : "password"
                          }
                          autoComplete="current-password"
                          value={passwordValues.password}
                          onChange={handleChange("password")}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleShowPassword}
                                edge="end"
                              >
                                {passwordValues.showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          }
                          label="Password"
                        />
                      </FormControl>
                    </Stack>
                  </Grid>

                  <Grid item xs={12}>
                    <Stack>
                      <Typography sx={{ color: "error.main" }}>
                        {UsernameError}
                      </Typography>
                      <Typography sx={{ color: "error.main" }}>
                        {PasswordError}
                      </Typography>
                      <Typography sx={{ color: "error.main" }}>
                        {LoginError}
                      </Typography>
                    </Stack>
                  </Grid>

                  <Grid item xs={12}>
                    <Stack
                      spacing={1}
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Button
                        variant="contained"
                        fullWidth
                        startIcon={<LoginIcon />}
                        onClick={login}
                      >
                        Login
                      </Button>
                      <Button
                        variant="outlined"
                        fullWidth
                        startIcon={<AutoModeIcon />}
                        onClick={demoLogin}
                      >
                        Demo Login
                      </Button>

                      <Button
                        variant="contained"
                        fullWidth
                        color="magenta"
                        onClick={handleCreateNewAccount}
                      >
                        Create new account
                      </Button>
                    </Stack>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Fade>
    </>
  );
}
