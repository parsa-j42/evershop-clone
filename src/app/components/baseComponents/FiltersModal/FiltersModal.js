import { Modal, Box, Divider, Slider, Typography } from "@mui/material";
import FilterCheckboxVerticalList from "../FilterCheckboxVerticalList/CheckboxVerticalList";
import ProductsFilter from "src/app/components/staticComponents/ProductsFilter/ProductsFilter";

export default function FiltersModal(props) {
  return (
    <Modal
      open={props.isOpen}
      onClose={props.onClose}
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
          colorFilterOptions={props.colorFilterOptions} selectedColors={props.selectedColors} setSelectedColors={props.setSelectedColors}
          sizeFilterOptions={props.sizeFilterOptions} selectedSizes={props.selectedSizes} setSelectedSizes={props.setSelectedSizes}
          brandFilterOptions={props.brandFilterOptions} selectedBrands={props.selectedBrands} setSelectedBrands={props.setSelectedBrands}
          selectedPriceRange={props.selectedPriceRange} setSelectedPriceRange={props.setSelectedPriceRange}
        />
      </Box>
    </Modal>
  );
}