import React, { useState } from 'react';
import { TextField, Button, Container, Grid } from '@mui/material';
import { addImageToStorage, signUpUser } from '../../config/firebaseconfig/firebasemethods';

const Admission = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    selectedCourse: '',
    timing: '',
    phoneNumber: '',
    fullName: '',
    fatherName: '',
    motherName: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      image: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signUpUser(formData)
    // Handle form submission here, e.g., send data to server
    const img = formData.image;
    const imageurl = addImageToStorage(img , formData.email)
    console.log(imageurl);
    console.log(formData);
  };

  return (
    <Container maxWidth="md">
      <form onSubmit={handleSubmit}>
        <h1>Admission form</h1>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              type="password"
              label="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="Father's Name"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="Mother's Name"
              name="motherName"
              value={formData.motherName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              select
              variant="outlined"
              label="Timing"
              name="timing"
              value={formData.timing}
              onChange={handleChange}
            >
              <option value="MWF">MWF (Monday, Wednesday, Friday)</option>
              <option value="TTS">TTS (Tuesday, Thursday, Saturday)</option>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Admission;
