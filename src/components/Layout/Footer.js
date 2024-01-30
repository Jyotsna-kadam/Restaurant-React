import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <>
      <Box sx={{ textAlign: 'center', bgcolor: '#1A1A19', color: 'white', p: 3 }}>
        <Box
          sx={{
            my: 3,
            "& a": {
              textDecoration: 'none',
              "& svg": {
                fontSize: "60px",
                cursor: "pointer",
                color: 'white',
                mr: 2,
                "&:hover": {
                  color: 'goldenrod',
                  transform: "translateX(5px)",
                  transition: "all 400ms",
                },
              },
            },
          }}
        >
          {/* icons with links */}
          <a href="https://www.instagram.com/jyotsna_kdm/" target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
          </a>
          <a href="https://github.com/Jyotsna-kadam" target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
          </a>
          <a href="mailto:jyotsnakdm12@gmail.com">
            <EmailIcon />
          </a>
        </Box>
        <Typography
          variant='h5'
          sx={{
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
          }}
        >
          All Rights Reserved &copy; Jyotsna kadam
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
