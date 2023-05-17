import { Box, Typography, Slider, Divider } from "@mui/material";
import FilterCheckboxVerticalList from "src/app/components/baseComponents/FilterCheckboxVerticalList/CheckboxVerticalList";


export default function ProductsFilter(props) {
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
                value={props.selectedPriceRange}
                onChange={(event, value) => props.setSelectedPriceRange(value)}
                min={10}
                max={999}
            />
            <Divider sx={styles.filterDivider} />
            <Typography variant="subtitle1" gutterBottom>
                Color
            </Typography>
            <FilterCheckboxVerticalList
                items={props.colorFilterOptions}
                color="neutral"
                selectedItems={props.selectedColors}
                setSelectedItems={props.setSelectedColors}
            />
            <Divider sx={styles.filterDivider} />
            <Typography variant="subtitle1" gutterBottom>
                Size
            </Typography>
            <FilterCheckboxVerticalList
                items={props.sizeFilterOptions}
                color="neutral"
                selectedItems={props.selectedSizes}
            // setSelectedItems={props.setSelectedSizes}
            />
            <Divider sx={styles.filterDivider} />

            <Typography variant="subtitle1" gutterBottom>
                Brand
            </Typography>
            <FilterCheckboxVerticalList
                items={props.brandFilterOptions}
                color="neutral"
                selectedItems={props.selectedBrands}
                setSelectedItems={props.setSelectedBrands}
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