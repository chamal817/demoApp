'use client';
import { Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function login(){
    
      const [formData, setFormData] = useState({
        email: '',
        password: '',
      });
      const handleChange = (event :any) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
      const handleSubmit = (event :any) => {
        event.preventDefault();
        console.log(formData);
      };
    return  <Container component="main" maxWidth="xs">
    <div>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <form  onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={formData.password}
          onChange={handleChange}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary">

          Sign In
        </Button>
      </form>
    </div>
  </Container>
}