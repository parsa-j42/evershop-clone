import { Modal, Box, Divider, Slider, Typography } from "@mui/material";
import FilterCheckboxVerticalList from "../FilterCheckboxVerticalList/CheckboxVerticalList";

export default function FiltersModal({ isOpen, onClose }) {
  const handleClose = () => {
    onClose();
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="filters-modal-title"
      aria-describedby="filters-modal-description"
    >
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        minWidth: '300px',
        maxWidth: '500px',
        maxHeight: '80vh',
        overflowY: 'auto'
      }}>
        <Typography variant="subtitle1" gutterBottom>
          Price
        </Typography>
        <Slider
          color="neutral"
          defaultValue={[10, 999]}
          aria-labelledby="price-range-slider"
          valueLabelDisplay="auto"
          min={10}
          max={999}
        />
        <Divider />
        <Typography variant="subtitle1" gutterBottom>
          Color
        </Typography>
        <FilterCheckboxVerticalList items={colorFilterOptions} color="neutral" />
        <Divider />
        <Typography variant="subtitle1" gutterBottom>
          Size
        </Typography>
        <FilterCheckboxVerticalList items={sizeFilterOptions} color="neutral" />
        <Divider />
        <Typography variant="subtitle1" gutterBottom>
          Brand
        </Typography>
        <FilterCheckboxVerticalList items={brandFilterOptions} color="neutral" />
        <Divider />
      </Box>
    </Modal>
  );
}
const colorFilterOptions = [
  "White",
  "Pink",
  "Black",
  "Green",
  "Brown",
  "Grey",
  "Purple",
];
const sizeFilterOptions = ["XL", "L", "M", "S", "XS"];
const brandFilterOptions = ["Nike", "Converse"];
const sortByOptions = ["Price", "Name"];