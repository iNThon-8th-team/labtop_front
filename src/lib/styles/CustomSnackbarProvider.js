import { MaterialDesignContent } from "notistack";
import { styled } from "@mui/material";
import { COLORS } from "./theme";

const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
  "&.notistack-MuiContent-default": {
    backgroundColor: COLORS.secondory95,
    color: COLORS.textDefault,
    fontSize: "16px",
  },
  "&.notistack-MuiContent-success": {
    backgroundColor: "#B1EFB1",
    color: COLORS.textDefault,
    fontSize: "16px",
  },
  "&.notistack-MuiContent-error": {
    backgroundColor: "#FFBEBE",
    color: COLORS.textDefault,
    fontSize: "16px",
  },
  "&.notistack-MuiContent-warning": {
    backgroundColor: "#FAED96",
    color: COLORS.textDefault,
    fontSize: "16px",
  },
  "&.notistack-MuiContent-info": {
    backgroundColor: "#8AC5FF",
    color: COLORS.textDefault,
    fontSize: "16px",
  },
}));

export default StyledMaterialDesignContent;
