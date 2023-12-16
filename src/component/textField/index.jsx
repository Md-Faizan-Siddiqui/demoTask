import { Box, InputLabel, TextField } from "@mui/material";
import React from "react";

const index = ({
  label,
  placeholder,
  type,
  name,
  pattern,
  onChange,
  value,
  required,
}) => {
  return (
    <Box sx={{}}>
      <InputLabel
        htmlFor="inputField"
        sx={{
          color: "#666",
          fontFamily: "Noto Sans",
          fontSize: "12px",
          fontWeight: "600",
          mb: "10px",
        }}
      >
        {label}
      </InputLabel>
      <TextField
      sx={{
        ".css-1wvltgx-MuiInputBase-root-MuiOutlinedInput-root":{
          borderRadius:"8px"
        }
      }}
        required={required}
        name={name}
        type={type}
        placeholder={placeholder}
        id="inputField"
        pattern={pattern}
        fullWidth
        onChange={onChange}
        value={value}
      />
    </Box>
  );
};

export default index;
