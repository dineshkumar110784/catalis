import React, { useEffect, useState } from 'react';
import { useParams, useHistory, Link } from "react-router-dom";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


function Edituser() {
  const { id } = useParams();

  return (

    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <h2 className='mt-3 mb-3'>User Form Details</h2>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link href="#">Animal Master</Link></li>
            <li className="breadcrumb-item"><Link href="#">Animal License</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Basic Form</li>
          </ol>
        </nav>


      </div>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Name"
          defaultValue="John "
        />

        <TextField
          id="outlined-required"
          label="Address 1"
          defaultValue="222 Len USA"
        />
        <TextField
          id="outlined-required"
          label="Address 2"
          defaultValue="Test Len USA"
        />
        <TextField
          id="outlined-required"
          label="Address 3"
          defaultValue="New Test Len USA"
        />
        <TextField
          id="outlined-required"
          label="City"
          defaultValue="New York"
        />
        <TextField
          id="outlined-required"
          label="Province"
          defaultValue="Alberta"
        />
      </div>

    </Box>
  );
}

export default Edituser;
