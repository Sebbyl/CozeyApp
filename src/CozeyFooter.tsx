import { Box, Typography, Grid2, useMediaQuery } from "@mui/material";
import EmailIcon from "./EmailIcon";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";

const FooterStatements = styled(Typography)({
  fontWeight: 400,
  fontSize: "0.875rem",
  color: "#F7F8F6",
});

export default function CozeyFooter() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "#69A2FF",
          height: "11.12rem",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          paddingTop: "3rem",
          paddingRight: "5rem",
          paddingLeft: "5rem",
          paddingBottom: "3rem",
        }}
      >
        {!isSmallScreen && (
          <Box>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "1.5rem",
                width: "30rem",
                color: "#F7F8F6",
              }}
            >
              Join the Cozey Family to stay ahead on product launches and
              exclusive content.
            </Typography>
          </Box>
        )}
        {/* <EmailIcon /> */}
      </Box>
      <Box
        sx={{
          backgroundColor: "#0B2341",
          height: "26.75rem",
          paddingTop: "3rem",
          paddingRight: "5rem",
          paddingLeft: "5rem",
          paddingBottom: "3rem",
        }}
      ></Box>
      <Box
        sx={{
          backgroundColor: "#0B2341",
          height: "3.25rem",
          display: "flex",
          flexDirection: "row",
          gap: "5rem",
          paddingTop: "1rem",
          paddingRight: "5rem",
          paddingLeft: "5rem",
          paddingBottom: "1rem",
        }}
      >
        <FooterStatements>
          © 2024 Cozey Inc. All rights reserved.
        </FooterStatements>
        <FooterStatements>Privacy Policy</FooterStatements>
        <FooterStatements>Terms of Use</FooterStatements>
      </Box>
    </Box>
  );
}
