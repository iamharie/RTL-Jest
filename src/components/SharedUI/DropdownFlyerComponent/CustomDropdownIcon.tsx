import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import DownCaretDropdown from "../../../assets/images/downcaretDropdown.svg";

const CustomDropdownIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => (
    <SvgIcon {...props} ref={ref}>
      <DownCaretDropdown />
    </SvgIcon>
  )
);

export default CustomDropdownIcon;
