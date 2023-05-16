"use client";
import {
  ThemeProvider,
  Typography,
  Box,
  Grid,
  Slider,
  Divider,
  Fab,
  useMediaQuery,
} from "@mui/material";
import { FilterList } from "@mui/icons-material";
import { useState, useMemo, memo, useEffect } from "react";

import { theme } from "../../utils/theme";
import AppNavBar from "../../components/staticComponents/AppNavBar/AppNavBar";
import AppFooter from "../../components/staticComponents/AppFooter/AppFooter";
import FilterCheckboxVerticalList from "../../components/baseComponents/FilterCheckboxVerticalList/CheckboxVerticalList";
import ProductsList from "../../components/baseComponents/ProductsList/ProductsList";
import DropDownSelect from "src/app/components/baseComponents/DropDownSelect/DropDownSelect.js";
import FiltersModal from "../../components/baseComponents/FiltersModal/FiltersModal";
// import products from "./products.json"
import colorFilterOptions from "./colorFilterOptions.json"
import sizeFilterOptions from "./sizeFilterOptions.json"
import brandFilterOptions from "./brandFilterOptions.json"
import sortByOptions from "./sortByOptions.json"

export default function ShopForKids() {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false);
  const handleFiltersModal = () => {
    setIsFiltersModalOpen(!isFiltersModalOpen);
  };

  const [selectedPriceRange, setSelectedPriceRange] = useState([10, 999]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const filtered = products.filter((product) => {
      const price = +product.price.slice(1)
      const color = product.color
      const size = product.size
      const brand = product.brand
      const isInPriceRange = (price >= selectedPriceRange[0] && price <= selectedPriceRange[1]);
      const hasSelectedColors = (selectedColors.length === 0 || selectedColors.includes(color));
      const hasSelectedBrands = (selectedBrands.length === 0 || selectedBrands.includes(brand));
      return (isInPriceRange && hasSelectedColors && hasSelectedBrands);
    });
    setFilteredProducts(filtered);
  }, [selectedPriceRange, selectedColors, selectedSizes, selectedBrands]);
  
  // useEffect(() => {
  //   console.log("filteredProducts changed:", filteredProducts);
  // }, [filteredProducts]);

  return (
    <ThemeProvider theme={theme}>
      <main className="min-h-screen flex-col items-center justify-between">
        <AppNavBar />
        <Grid container sx={styles.container}>
          <Grid item xs={12}>
            <Box sx={styles.titleBox}>
              <Typography
                variant="h4"
                color="white"
                align="center"
                sx={{ ml: 8 }}
              >
                KIDS
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3} sx={styles.filterContainer}>
            <Typography variant="h6" gutterBottom>
              Shop By
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Price
            </Typography>
            <Slider
              color="neutral"
              defaultValue={[10, 999]}
              aria-labelledby="price-range-slider"
              valueLabelDisplay="auto"
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
          </Grid>
          <Grid
            item
            sm={12}
            md={9}
            sx={styles.productContainer}
            justifyContent="flex-end"
          >
            <DropDownSelect
              title="Sort By"
              options={sortByOptions}
              color="neutral"
              sx={styles.DropDownSelect}
            />
            <ProductsList products={filteredProducts.length == 0 ? products : filteredProducts} />
          </Grid>
        </Grid>
        {isSmallScreen && (
          <Fab
            size="small"
            color="primary"
            aria-label="filter"
            sx={{ position: "fixed", bottom: 16, left: 16 }}
            onClick={handleFiltersModal}
          >
            <FilterList />
          </Fab>
        )}
        <FiltersModal
          isOpen={isFiltersModalOpen}
          onClose={handleFiltersModal}
        />
        <AppFooter />
      </main>
    </ThemeProvider>
  );
}

const styles = {
  titleBox: {
    bgcolor: "#695F58",
    marginTop: 5,
    marginBottom: 2,
    marginLeft: "auto",
    marginRight: "auto",
    height: "20vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    textAlign: "left",
    width: "100%",
  },
  container: {
    marginTop: 5,
    marginLeft: "auto",
    marginRight: "auto",
    width: "1100px",
    [theme.breakpoints.down("lg")]: {
      width: "90vw",
    },
    flexGrow: 1,
  },
  filterContainer: {
    paddingRight: 4,
    display: { xs: "none", md: "block" },
  },
  productContainer: {
    justifyContent: "center",
    textAlign: "center",
  },
  filterDivider: {
    borderBottom: "1px solid #BDBDBD",
    width: "100%",
    marginBottom: "24px",
  },
  DropDownSelect: {
    width: 180,
    marginBottom: 2,
  },
};

const products = [
  {
    name: "Continental 80 Shoes",
    price: "$126",
    color: "Pink",
    brand: null,
    img: require("../../../../public/continental.png"),
  },
  {
    name: "Nizza trefoil shoes",
    price: "$198",
    color: "White",
    brand: null,
    img: require("../../../../public/nizza.png"),
  },
  {
    name: "Nmd_r1 shoes",
    price: "$193",
    color: "Green",
    brand: null,
    img: require("../../../../public/nmd.png"),
  },
  {
    name: "Canvas platform chuck taylor all star",
    price: "$691",
    color: "Black",
    brand: "Converse",
    img: require("../../../../public/canvasPlatform.png"),
  },
  {
    name: "Chuck taylor all star move",
    price: "$491",
    color: "Pink",
    brand: "Converse",
    img: require("../../../../public/chuckTaylor.png"),
  },
  {
    name: "Mix and match chuck taylor all star",
    price: "$798",
    color: "Grey",
    brand: "Converse",
    img: require("../../../../public/mixMatch.png"),
  },
  {
    name: "Seasonal color chuck 70",
    price: "$819",
    color: "Purple",
    brand: "Converse",
    img: require("../../../../public/seasonalColor.png"),
  },
  {
    name: "Nike court vision low",
    price: "$904",
    color: "White",
    brand: "Nike",
    img: require("../../../../public/nikeCourt.png"),
  },
  {
    name: "Nike react infinity run flyknit",
    price: "$543",
    color: "Black",
    brand: "Nike",
    img: require("../../../../public/nikeReact.png"),
  },
  {
    name: "Nike react phantom run flyknit 2",
    price: "$718",
    color: "Pink",
    brand: "Nike",
    img: require("../../../../public/nikePhantom.png"),
  },
  {
    name: "Nike react phantom run flyknit 23",
    price: "$718",
    color: "Black",
    brand: "Nike",
    img: require("../../../../public/nike3.png"),
  },
];