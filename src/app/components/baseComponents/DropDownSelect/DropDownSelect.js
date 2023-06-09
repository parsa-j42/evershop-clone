import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DropDownSelect({option, setOption, title, options, color, sx}) {
  const handleChange = (event) => {
    setOption(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel color={color}>{title}</InputLabel>
        <Select
          value={option}
          label={title}
          onChange={handleChange}
          color={color} sx={sx}
        >
          {options.map((option, index) => (
            <MenuItem 
              key={index} 
              value={option}
              color={color}
            >{option}</MenuItem>
      ))}
      {/* <MenuItem value={null} color={color}>None</MenuItem> */}
        </Select>
      </FormControl>
    </Box>
  );
}
