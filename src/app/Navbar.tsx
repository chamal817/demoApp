import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import Link from 'next/link';


export default function NavBar() {


  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6">
         Demo App
        </Typography>
        <Link href="/">
          <Button color="inherit">Home</Button>
        </Link>
        <Link href="/login">
          <Button color="inherit">Login</Button>
        </Link>
        <Link href="/dashboard">
          <Button color="inherit">Dashboard</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}