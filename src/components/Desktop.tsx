import React from "react";
import DropdownFlyerComponent from "./SharedUI/DropdownFlyerComponent/DropdownFlyerComponent";
import { Box } from "@mui/material";

const Desktop: React.FC = () => {
  return (
    <div>
      <Box sx={{ padding: 2 }}>
        <p>Desktop</p>
        <DropdownFlyerComponent />
      </Box>
    </div>
  );
};

export default Desktop;
