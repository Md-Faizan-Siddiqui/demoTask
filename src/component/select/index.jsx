import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

// const names = ["Morning", "After Noon", "Evening"];

// function getStyles(name, personName, theme) {
//   return {
//     fontWeight:
//       personName.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }

export default function MultipleSelectPlaceholder({
  label,
  placeholder,
  type,
  name,
  pattern,
  onChange,
  value,
  required,
  options,
}) {
  const theme = useTheme();
//   const [personName, setPersonName] = React.useState([]);
  console.log("option",options)
//   const handleChange = (event) => {
//     const {
//       target: { value },
//     } = event;
//     setPersonName(
//       // On autofill we get a stringified value.
//       typeof value === "string" ? value.split(",") : value
//     );
//   };

  return (
    
      <FormControl sx={{ m: 1, width: "100%", mt: 3 }}>
        <Select
        type={type}
        name={name}
        //   multiple
        fullWidth
        //   displayEmpty
          value={value}
          onChange={onChange}
         input={<OutlinedInput />}
        //   renderValue={(selected) => {
            
        //        return <em>Placeholder</em>;
        
        // }}
        //   MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
        >
          {/* <MenuItem  value="">
            {placeholder}
          </MenuItem> */}
          {options?.map((name, index) => (
            
            <MenuItem
              key={index}
              value={name.value}
            //   style={getStyles(name, personName, theme)}
            >
              {name.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

  );
}