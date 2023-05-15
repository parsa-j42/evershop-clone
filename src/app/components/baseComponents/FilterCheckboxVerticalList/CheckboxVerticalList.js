import { useState } from "react";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

export default function CheckboxVerticalList({items, color, selectedItems, setSelectedItems}) {
  const handleItemChange = (event) => {
    const checked = event.target.checked;
    const value = event.target.value;

    if (checked) {
      setSelectedItems([...selectedItems, value]);
    } else {
      setSelectedItems(selectedItems.filter((item) => item !== value));
    }
  };

  return (
    <FormGroup>
      {items.map((item) => (
        <FormControlLabel
          key={item}
          control={
            <Checkbox
              checked={selectedItems.includes(item)}
              onChange={handleItemChange}
              value={item}
              color={color}
            />
          }
          label={item}
        />
      ))}
    </FormGroup>
  );
}