import React from 'react';
import Layout from '../components/Layout/Layout';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Layout>
        <Box sx={{
          my:15,
          textAlign: "center",
          p:2,
          "& h4":{
            fontWeight:"bold",
            my:2,
            fontSize:"2rem"
          },
          "& p":{
            textAlign:"justify",
          },
          "@media (max-width:600px)":{
            mt:0,
            "& h4":{
              fontSize:'1.5rem'
            }
          }
        }}>
          <Typography variant='h4'>
            Welcom To My Restaurant
          </Typography>
          <p>
          Welcome to Family Restaurant, where culinary artistry meets a delightful dining experience. Our passion for creating memorable moments is reflected in every dish we serve. Established with a vision to redefine gastronomy, we invite you on a culinary journey that transcends the ordinary.
          </p>
          <br/>
          <p>
          At Family Restaurant, we believe in the art of storytelling through food. Our chefs meticulously craft each dish, blending fresh, locally sourced ingredients with global flavors to create a symphony of tastes and textures. Whether you're a connoisseur or an adventurous foodie, our diverse menu offers a harmonious mix of traditional favorites and innovative creations.
          </p>
          <br/>
          <p>
          Beyond the plate, Family Restaurant is a celebration of community and culture. Our inviting ambiance and warm hospitality aim to make every visit a special occasion. We take pride in curating an environment where friends and families can gather, share laughter, and savor the finest culinary creations.
          </p>
          <br/>
          <p>
          As a team, we are committed to sustainability and ethical practices. From farm to table, we prioritize eco-friendly initiatives, ensuring that your dining experience not only tantalizes your taste buds but also reflects our dedication to a greener planet.
          </p>
          <br/>
          <p>
          Thank you for choosing Family Restaurant as your culinary destination. We look forward to serving you an unforgettable experience that goes beyond a meal – it's a celebration of flavors, traditions, and the joy of dining together.
          </p>
        </Box>
    </Layout>
  );
};

export default About;