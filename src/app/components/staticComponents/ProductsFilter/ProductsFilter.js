import { Box, Typography, Slider, Divider } from "@mui/material";
import FilterCheckboxVerticalList from "src/app/components/baseComponents/FilterCheckboxVerticalList/CheckboxVerticalList";


export default function ProductsFilter({
    colorFilterOptions, selectedColors, setSelectedColors,
    sizeFilterOptions, selectedSizes, setSelectedSizes,
    brandFilterOptions, selectedBrands, setSelectedBrands,
    selectedPriceRange, setSelectedPriceRange }) {
    return (
        <Box>
            <Typography variant="subtitle1" gutterBottom>
                Price
            </Typography>
            <Slider
                color="neutral"
                defaultValue={[10, 999]}
                aria-labelledby="price-range-slider"
                valueLabelDisplay="auto"
                value={selectedPriceRange}
                onChange={(event, value) => setSelectedPriceRange(value)}
                min={10}
                max={999}
            />
            <Divider sx={styles.filterDivider} />
            <Typography variant="subtitle1" gutterBottom>
                Color
            </Typography>
            <FilterCheckboxVerticalList
                items={colorFilterOptions}
                color="neutral"
                selectedItems={selectedColors}
                setSelectedItems={setSelectedColors}
            />
            <Divider sx={styles.filterDivider} />
            <Typography variant="subtitle1" gutterBottom>
                Size
            </Typography>
            <FilterCheckboxVerticalList
                items={sizeFilterOptions}
                color="neutral"
                selectedItems={selectedSizes}
            // setSelectedItems={setSelectedSizes}
            />
            <Divider sx={styles.filterDivider} />

            <Typography variant="subtitle1" gutterBottom>
                Brand
            </Typography>
            <FilterCheckboxVerticalList
                items={brandFilterOptions}
                color="neutral"
                selectedItems={selectedBrands}
                setSelectedItems={setSelectedBrands}
            />
            <Divider sx={styles.filterDivider} />

        </Box>
    )

}

const styles = {
    filterDivider: {
        borderBottom: "1px solid #BDBDBD",
        width: "100%",
        marginBottom: "24px",
      },
};