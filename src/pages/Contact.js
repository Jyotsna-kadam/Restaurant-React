import React from 'react';
import Layout from '../components/Layout/Layout';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

const Contact = () => {
  return (
    <Layout>
        <Box sx={{ my:5, ml :10, "& h4":{fontWeight:"bold", mb:2 }}}>
          <Typography variant='h4'>
            Contact My Restaurant
          </Typography>
          <p>
          We're thrilled to hear from you! Whether you have a question, feedback, or simply want to say hello, we're here to assist. Feel free to reach out using the contact details below, and our dedicated team will respond as promptly as possible.

Address:
[Your Restaurant Name]
[Street Address]
[City, State, Zip Code]

Phone:
[Your Contact Number]

Email:
[Your Email Address]

Reservation Information
For reservation inquiries, please contact us directly via phone or use our convenient online reservation system. We recommend booking in advance to secure your preferred dining time, especially during peak hours and special events.

Online Reservation:
[Reservation Link]

Catering and Events
Planning a special event or celebration? Let us make it extraordinary! Our catering services are designed to bring the flavors of [Your Restaurant Name] to your chosen venue. For event inquiries, please reach out to our events team using the contact details provided.

Events Team:
[Event Contact Email]
[Event Contact Phone]

Connect With Us
Stay updated on the latest news, events, and mouth-watering delights by following us on social media. Connect with [Your Restaurant Name] across our various platforms, and be part of our vibrant community.

Facebook: [Facebook Link]
Instagram: [Instagram Link]
Twitter: [Twitter Link]
We look forward to hearing from you and having the pleasure of hosting you at [Your Restaurant Name].
          </p>
        </Box>
        <Box sx={{m:3, width:"600px",ml:10, "@media (max-width:600px)":{
          width:'300px',
        }}}>
          <TableContainer component={Paper}>
            <Table aria-label='contact table'>
              <TableHead>
                <TableRow>
                  <TableCell sx={{bgcolor:'black', color:'white'}} align='center'>
                    Contact Details
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <SupportAgentIcon sx={{color:'red', pt:1}}/> 1800-00-0000 (tollfree)
                  </TableCell>
                </TableRow>
                <TableRow>
                <TableCell>
                    <EmailIcon sx={{color:"skyblue", pt:1}}/> help@myrest.com 
                  </TableCell>
                </TableRow>
                <TableRow>
                <TableCell>
                    <CallIcon sx={{color:"green", pt:1}}/>  8928132890
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
    </Layout>
  );
};

export default Contact;