import { useTheme } from "@mui/material/styles";
import { Box, Typography, Grid2, useMediaQuery } from "@mui/material";
import { styled } from "@mui/material/styles";

const HeaderLinks = styled(Typography)({
  color: "white",
  fontWeight: 600,
  fontSize: "0.75rem",
});

const HeaderDisclaimer = styled(Typography)({
  color: "white",
  fontWeight: 600,
  fontSize: "0.75rem",
});

const FurnitureTypeButton = styled(Typography)({
  color: "#4F6076",
  fontWeight: 400,
  fontSize: "1.12rem",
});

export default function CozeyHeader() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#69A2FF",
          justifyContent: "space-between",
          height: "2rem",
          paddingTop: "0.5rem",
          paddingBottom: "0.5rem",
          paddingLeft: "5rem",
          paddingRight: "5rem",
        }}
      >
        {isLargeScreen && (
          <Box
            sx={{
              display: "flex",
              gap: "0.75rem",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <HeaderDisclaimer>Designed in North America</HeaderDisclaimer>
            <HeaderDisclaimer>|</HeaderDisclaimer>
            <HeaderDisclaimer>Fast & Free Shipping</HeaderDisclaimer>
          </Box>
        )}
        {isLargeScreen && (
          <Box
            sx={{
              display: "flex",
              gap: "2rem",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <HeaderLinks>Reviews</HeaderLinks>
            <HeaderLinks>Free Swatches</HeaderLinks>
            <HeaderLinks>Financing</HeaderLinks>
            <HeaderLinks>Support</HeaderLinks>
            <HeaderLinks>Contacts Us</HeaderLinks>
            <HeaderLinks>Our Locations</HeaderLinks>
            <HeaderLinks>EN</HeaderLinks>
          </Box>
        )}
      </Box>
      <Box
        sx={{
          backgroundColor: "#F7F8F6",
          height: "3.75rem",
          display: "flex",
          justifyContent: "center",
          paddingLeft: "5rem",
          paddingRight: "5rem",
        }}
      >
        {isLargeScreen && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "0.5rem",
              alignItems: "center",
            }}
          >
            <FurnitureTypeButton>Seating</FurnitureTypeButton>
            <FurnitureTypeButton>Tables</FurnitureTypeButton>
            <FurnitureTypeButton>Storage</FurnitureTypeButton>
            <FurnitureTypeButton>Accessories</FurnitureTypeButton>
            <FurnitureTypeButton>Washable Rugs</FurnitureTypeButton>
            <FurnitureTypeButton>Outdoor</FurnitureTypeButton>
          </Box>
        )}
      </Box>
    </Box>
  );
}
