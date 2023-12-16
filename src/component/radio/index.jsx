import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function FormControlLabelPlacement({onChange}) {
  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-form-control-label-placement"
        name="position"
        defaultValue="top"
        onChange={onChange}
      >
        <FormControlLabel
          sx={{
            color: "#666",
            fontFamily: "Noto Sans",
            fontSize: "16px",
            fontWeight: "400",
          }}
          value="student"
          control={<Radio />}
          label="Student"
        />
        <FormControlLabel
          sx={{
            color: "#666",
            fontFamily: "Noto Sans",
            fontSize: "16px",
            fontWeight: "400",
          }}
          value="teacher"
          control={<Radio />}
          label="Teacher"
        />
        <FormControlLabel
          sx={{
            color: "#666",
            fontFamily: "Noto Sans",
            fontSize: "16px",
            fontWeight: "400",
          }}
          value="other"
          control={<Radio />}
          label="Other"
        />
      </RadioGroup>
    </FormControl>
  );
}
