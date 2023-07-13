import React from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
//react icons
import { FaAirbnb } from "react-icons/fa";
import { flexCenter } from "../Themes/commonStyles";
import { pink } from "@mui/material/colors";
const Logo = () => {
  return (
    //Box is just like div in html and styles are passed through objects
    <Box sx={flexCenter}>
      <FaAirbnb size={40} color={pink[500]} />
      <Typography
        sx={{
          ml: 1,
          color: (theme) => theme.palette.secondary.main,
          fontsize: "20px",
          fontWeight: "bold",
        }}
        component="h3"
      >
        airbnb
      </Typography>
    </Box>
  );
};

export default Logo;
