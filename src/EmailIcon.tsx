import { TextField, InputAdornment, IconButton, Box } from "@mui/material";

export default function EmailIcon() {
  return (
    <TextField
      sx={{
        backgroundColor: "#F7F8F6",
        borderRadius: "3.25rem",
        paddingTop: "0.75rem",
        paddingRight: "0.75rem",
        paddingLeft: "2rem",
        paddingBottom: "0.75rem",
        width: "43.75rem",
      }}
      label="Email"
      variant="standard"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton>
              <Box
                sx={{
                  width: "8.12rem",
                  height: "3.62rem",
                  backgroundColor: "#0B2341",
                  borderRadius: "1.81rem",
                }}
              />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}
