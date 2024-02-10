import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Grid,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from '@mui/material';
import { signUpUser } from '../../config/firebaseconfig/firebasemethods';
import { useNavigate } from 'react-router-dom';
import { storage } from "../../config/firebaseconfig/firebase";
// import { signUpUser } from '../../config/firebase/firebasemethods';

const Admission = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    phone: '', // Added phone field
    address: '',
    course: '',
    days: '', // Changed from 'formData.course'
    image: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      image: URL.createObjectURL(e.target.files[0]),
    }));
  };



  
  
  
  
  
  
  
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Sign up the user
      const res = await signUpUser({ ...formData, Type: 'student' ,Url:imageUrl});
  
      // Upload image to Firebase Storage
      const storageRef = ref(storage, `${res.email}/${res.image}`);
      await uploadBytes(storageRef, res.image);
  
      // Get download URL for the uploaded image
      const imageUrl = await getDownloadURL(storageRef);
  
      console.log(imageUrl);
  
      // Navigate to '/student'
      navigate('/student');
    } catch (error) {
      console.error('Error during form submission:', error);
      alert('An error occurred during form submission.');
    }
  };
  

  const consollingvalue = (e) => {
    e.preventDefault();
  }

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Admission Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Address"
              name="address"
              multiline
              rows={3}
              value={formData.address}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth margin="normal">
              <InputLabel>Course</InputLabel>
              <Select
                label="Course"
                name="course"
                value={formData.course}
                onChange={handleChange}
              >
                <MenuItem value="null">Null</MenuItem>
                <MenuItem value="Web And App Development">Web And App Development</MenuItem>
                <MenuItem value="Graphic Designing">Graphic Designing</MenuItem>
                <MenuItem value="Flutter">Flutter</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth margin="normal">
              <InputLabel>Days</InputLabel>
              <Select
                label="Days"
                name="days"
                value={formData.days}
                onChange={handleChange}
              >
                <MenuItem value="WMF">WMA</MenuItem>
                <MenuItem value="TTS">TTS</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <input type="file"  />
            {formData.image && (
              <img src={URL.createObjectURL(formData.image)} alt="Selected" style={{ maxWidth: '100%' }} />
            )}
          </Grid>
        
          <Grid item xs={12}>
            {formData.image && (
              <img src={formData.image} alt="Selected" style={{ maxWidth: '100%' }} />
            )}
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