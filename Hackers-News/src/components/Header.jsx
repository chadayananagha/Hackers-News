// import React from 'react';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


const Header = () => {
  return (
    <header>
      <Stack spacing={2} direction="row">
        <img src="public/images/899d76bbc312122ee66aaaff7f933d13.png" alt="hackers-news icon" width={50} height={50}></img>
        <h1>HACKERS NEWS</h1>

        <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
       <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Hacker's News"
        inputProps={{ 'aria-label': 'search google maps' }}
      /> 
    </Paper>
    <Button variant="contained">Login</Button>
    </Stack>
    </header>
  )
}
export default Header;
