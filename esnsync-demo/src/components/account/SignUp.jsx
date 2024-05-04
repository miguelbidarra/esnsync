import React, { useState, useContext } from "react";
import {
  Container,
  Grid,
  Stack,
  Paper,
  Typography,
  Button,
  FormControl,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  IconButton,
  Fade,
  FormHelperText,
  Box,
} from "@mui/material";
import {
  ArrowBackIosNew as ArrowBackIosNewIcon,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { validate as validateEmail } from "check-email-validation";
import { useNavigate } from "react-router-dom";
import { userSignUp, isNewUser } from "../../auth/auth";
import UserContext from "../../auth/UserContext";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
    showPassword: false,
  });
  const [errors, setErrors] = useState({});
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};
    if (formData.firstname === "")
      errors.firstname = "Please enter your first name.";
    if (formData.lastname === "")
      errors.lastname = "Please enter your last name.";
    if (formData.email === "") errors.email = "Please enter your email.";
    if (formData.username === "")
      errors.username = "You need a username to create an account.";
    if (formData.password === "")
      errors.password = "You need a password for your account.";
    if (!validateEmail(formData.email)) errors.email = "Email is invalid.";
    if (!isNewUser(formData.username))
      errors.username = "Username exists. Try something else.";
    if (!validatePassword(formData.password))
      errors.password = "Password is invalid.";
    return errors;
  };

  const validatePassword = (password) => {
    // Use a more robust password validation library like joi or yup
    return password.length >= 8;
  };

  const handleInputChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handlePasswordVisibility = () => {
    setFormData({ ...formData, showPassword: !formData.showPassword });
  };

  const handleSignUp = () => {
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      const userInfo = userSignUp(
        formData.firstname,
        formData.lastname,
        formData.username,
        formData.email,
        formData.password
      );
      setUser(userInfo);
      navigate("../Dashboard", { replace: true });
    } else {
      setErrors(errors);
    }
  };

  const handleGoBackClick = () => {
    navigate("/", { replace: true });
  };

  return (
    <Fade in={true}>
      <Container maxWidth="md" sx={{ height: 1 }}>
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
                item
                spacing={3}
                justifyContent="center"
                alignItems="center"
                p={4}
              >
                <Box item xs={12}>
                  <Typography variant="h5">Sign Up</Typography>
                </Box>

                <Grid item xs={12}>
                  <Stack spacing={1}>
                    <FormControl variant="outlined">
                      <InputLabel htmlFor="firstname">First Name</InputLabel>
                      <OutlinedInput
                        id="firstname"
                        type="text"
                        value={formData.firstname}
                        onChange={handleInputChange("firstname")}
                        label="First Name"
                      />
                      <FormHelperText sx={{ color: "error.main" }}>
                        {errors.firstname}
                      </FormHelperText>
                    </FormControl>

                    <FormControl variant="outlined">
                      <InputLabel htmlFor="lastname">Last Name</InputLabel>
                      <OutlinedInput
                        id="lastname"
                        type="text"
                        value={formData.lastname}
                        onChange={handleInputChange("lastname")}
                        label="Last Name"
                      />
                      <FormHelperText sx={{ color: "error.main" }}>
                        {errors.lastname}
                      </FormHelperText>
                    </FormControl>

                    <FormControl variant="outlined">
                      <InputLabel htmlFor="email">Email</InputLabel>
                      <OutlinedInput
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange("email")}
                        label="Email"
                      />
                      <FormHelperText sx={{ color: "error.main" }}>
                        {errors.email}
                      </FormHelperText>
                    </FormControl>

                    <FormControl variant="outlined">
                      <InputLabel htmlFor="username">Username</InputLabel>
                      <OutlinedInput
                        id="username"
                        type="text"
                        value={formData.username}
                        onChange={handleInputChange("username")}
                        label="Username"
                      />
                      <FormHelperText sx={{ color: "error.main" }}>
                        {errors.username}
                      </FormHelperText>
                    </FormControl>

                    <FormControl variant="outlined">
                      <InputLabel htmlFor="password">Password</InputLabel>
                      <OutlinedInput
                        id="password"
                        type={formData.showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={handleInputChange("password")}
                        label="Password"
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              edge="end"
                              onClick={handlePasswordVisibility}
                            >
                              {formData.showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                      <FormHelperText sx={{ color: "error.main" }}>
                        {errors.password}
                      </FormHelperText>
                    </FormControl>
                  </Stack>
                </Grid>

                <Grid item xs={12}>
                  <Stack spacing={1}>
                    <Button
                      variant="contained"
                      color="magenta"
                      sx={{ width: 1 }}
                      onClick={handleSignUp}
                    >
                      Sign Up
                    </Button>
                    <Button
                      variant="outlined"
                      color="primary"
                      startIcon={<ArrowBackIosNewIcon />}
                      sx={{ width: 1 }}
                      onClick={handleGoBackClick}
                    >
                      Go Back
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Fade>
  );
};

export default SignUpPage;
