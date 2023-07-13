import { Box, Button, Stack, Link } from "@mui/material";
import React from "react";
import { flexCenter } from "../Themes/commonStyles";
import { AiOutlineMenu } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
const ProfileSetting = () => {
  return (
    <Box sx={flexCenter}>
      <Link href="#">Airbnb your home</Link>
      <Stack>
        <Button>
          <BsGlobe size={24} />
        </Button>
        <Button
          sx={{
            borderRadius: 10,
            border: "1px solid #ddd",
          }}
        >
          <Stack>
            <AiOutlineMenu size={24} />
            <FaRegUserCircle size={24} />
          </Stack>
        </Button>
      </Stack>
      {/* globe section is done */}
    </Box>
  );
};

export default ProfileSetting;
