"use client";
import { ThemeProvider, Typography, Box, Grid, Slider, Divider, Hidden, Container, useMediaQuery } from "@mui/material";
import { theme } from "../../utils/theme";
import AppNavBar from "../../components/staticComponents/AppNavBar/AppNavBar";
import AppFooter from "../../components/staticComponents/AppFooter/AppFooter";
import FilterCheckboxVerticalList from "../../components/baseComponents/FilterCheckboxVerticalList/CheckboxVerticalList";
import ProductsList from "../../components/baseComponents/ProductsList/ProductsList";
import DropDownSelect from "src/app/components/baseComponents/DropDownSelect/DropDownSelect.js";
export default function shopForKids() {
  return (
    <ThemeProvider theme={theme}>
      <main className="min-h-screen flex-col items-center justify-between">
        <AppNavBar />
        <Grid container sx={styles.container}>
        <Grid item xs={12}>
        <Box sx={styles.titleBox}>
        <Typography variant="h4" color="white" align="center" sx={{ ml: 8 }}>
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
            />
            <Divider sx={styles.filterDivider} />
            <Typography variant="subtitle1" gutterBottom>
              Size
            </Typography>
            <FilterCheckboxVerticalList
              items={sizeFilterOptions}
              color="neutral"
            />
            <Divider sx={styles.filterDivider} />

            <Typography variant="subtitle1" gutterBottom>
              Brand
            </Typography>
            <FilterCheckboxVerticalList
              items={brandFilterOptions}
              color="neutral"
            />
            <Divider sx={styles.filterDivider} />
          </Grid>
          <Grid
            // sm={12}
            md={9}
            sx={styles.productContainer}
            justifyContent="flex-end"
          >
            <Container>
            <DropDownSelect
              title="Sort By"
              options={sortByOptions}
              color="neutral"
              sx={styles.DropDownSelect}
            />
            </Container>
            <ProductsList products={products} />
          </Grid>
        </Grid>
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
    // width: "56vw",
    height: "20vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    textAlign: "left",
  },
  container: {
    marginTop: 5,
    marginLeft: "auto",
    marginRight: "auto",
    width: "56vw",
    '@media (max-width: 600px)': {
      width: '90vw',
    },
    flexGrow: 1,
  },
  filterContainer: {
    paddingRight: 4,
    // borderRight: "1px solid #ccc",
    display: { xs: "none", md: "block" },
  },
  productContainer: {
    // paddingLeft: 4,
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
const products = [
  {
    name: "Continental 80 Shoes",
    price: "$126",
    img: require("../../../../public/continental.png"),
  },
  {
    name: "Nizza trefoil shoes",
    price: "$198",
    img: require("../../../../public/nizza.png"),
  },
  {
    name: "Nmd_r1 shoes",
    price: "$193",
    img: require("../../../../public/nmd.png"),
  },
  {
    name: "Canvas platform chuck taylor all star",
    price: "$691",
    img: require("../../../../public/canvasPlatform.png"),
  },
  {
    name: "Chuck taylor all star move",
    price: "$491",
    img: require("../../../../public/chuckTaylor.png"),
  },
  {
    name: "Mix and match chuck taylor all star",
    price: "$798",
    img: require("../../../../public/mixMatch.png"),
  },
  {
    name: "Seasonal color chuck 70",
    price: "$819",
    img: require("../../../../public/seasonalColor.png"),
  },
  {
    name: "Nike court vision low",
    price: "$904",
    img: require("../../../../public/nikeCourt.png"),
  },
  {
    name: "Nike react infinity run flyknit",
    price: "$543",
    img: require("../../../../public/nikeReact.png"),
  },
  {
    name: "Nike react phantom run flyknit 2",
    price: "$718",
    img: require("../../../../public/nikePhantom.png"),
  },
  {
    name: "Nike react phantom run flyknit 2",
    price: "$718",
    img: require("../../../../public/nike3.png"),
  },
];
