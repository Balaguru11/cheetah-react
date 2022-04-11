import React, { useState } from "react";
import { Button, Box, TextField, Container, Alert } from "@mui/material";
import axios from "axios";
import { useId } from "react-id-generator";

const Register = () => {
  const url = "https://api.dev.cheetah.klaim.ai/auth/register";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tenantId, setTenantId] = useState(useId(1, "tenant-"));
  const [message, setMessage] = useState("");
  //   const [error, setError] = useState("");
  //   const [success, setSuccess] = useState("");

  //   function CreateTenant() {
  //     setTenantId();
  //     console.log(tenantId);
  //   }

  function formSubmit() {
    // CreateTenant();

    let newUser = {
      email: email,
      password: password,
      tenantId: tenantId[0],
    };

    console.log(newUser);

    axios.post(url, newUser).then((res) => {
      console.log(res);
    });
  }

  return (
    <>
      <div>Register</div>
      {message && <p>{message}</p>}
      <Container maxWidth="sm">
        <div>
          <h3>Registration</h3>
          <hr />
          {/* {error && (
            <Alert onClose={dismissAlert} severity="error">
              {error}
            </Alert>
          )}
          {success && (
            <Alert onClose={dismissAlert} severity="success">
              {success}
            </Alert>
          )} */}
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 2, width: "50ch" },
              alignItems: "center",
              justifyContent: "center",
            }}
            noValidate
            autoComplete="off"
          >
            {/* <TextField
              required
              id="standard-basic"
              label="First Name"
              variant="standard"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <TextField
              required
              id="standard-basic"
              label="Last Name"
              variant="standard"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
            <TextField
              InputLabelProps={{ shrink: true }}
              required
              id="standard-basic"
              label="Date of Birth"
              type="date"
              variant="standard"
              value={dob}
              onChange={(e) => {
                setDob(e.target.value);
              }}
            />
            {ageShow && (
              <>
                <Box
                  sx={{
                    // "&": {},
                    mx: 10,
                    p: 1,
                    boxShadow: 3,
                    borderRadius: 3,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "primary.dark",
                    color: "white",
                  }}
                >
                  <p>Your Age is: </p>
                  <h1>{age}</h1>
                </Box>
              </>
            )} */}
            <TextField
              required
              id="standard-basic"
              label="Email ID"
              variant="standard"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <TextField
              required
              id="standard-basic"
              label="Password"
              type="text"
              variant="standard"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <br />
            <Button variant="contained" color="warning" onClick={formSubmit}>
              Submit
            </Button>
          </Box>
        </div>
      </Container>
    </>
  );
};

export default Register;
