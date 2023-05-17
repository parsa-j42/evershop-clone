import { Modal, Box, Divider, Slider, Typography } from "@mui/material";
import FilterCheckboxVerticalList from "../FilterCheckboxVerticalList/CheckboxVerticalList";
import ProductsFilter from "src/app/components/staticComponents/ProductsFilter/ProductsFilter";

export default function FiltersModal({ isOpen, onClose,
  colorFilterOptions, selectedColors, setSelectedColors,
  sizeFilterOptions, selectedSizes, setSelectedSizes,
  brandFilterOptions, selectedBrands, setSelectedBrands,
  selectedPriceRange, setSelectedPriceRange }) {
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
        <ProductsFilter
          colorFilterOptions={colorFilterOptions} selectedColors={selectedColors} setSelectedColors={setSelectedColors}
          sizeFilterOptions={sizeFilterOptions} selectedSizes={selectedSizes} setSelectedSizes={setSelectedSizes}
          brandFilterOptions={brandFilterOptions} selectedBrands={selectedBrands} setSelectedBrands={setSelectedBrands}
          selectedPriceRange={selectedPriceRange} setSelectedPriceRange={setSelectedPriceRange}
        />
      </Box>
    </Modal>
  );
}