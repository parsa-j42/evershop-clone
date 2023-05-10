"use client";

import Image from 'next/image';
import { ThemeProvider, Typography, Box, Button } from '@mui/material';
import { theme } from "./utils/theme";
import mainBanner from '../../public/mainBanner.png';
import AppNavBar from './components/staticComponents/AppNavBar/AppNavBar'
import AppFooter from './components/staticComponents/AppFooter/AppFooter'
import kidsShoeCollection from '../../public/kidsShoeCollection.jpeg';
import womenShoeCollection from '../../public/womenShoeCollection.jpeg';
import menCollection from '../../public/menShoeCollection.jpeg';
import zoomPegasusShoes from '../../public/zoomPegasusShoes.png';
import taylorAllStarShoes from '../../public/taylorAllStarShoes.png';
import racerAdaptShoes from '../../public/racerAdaptShoes.png';
import chuckTaylorShoes from '../../public/chuckTaylorShoes.png';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <main className="min-h-screen flex-col items-center justify-between">
        <AppNavBar/>
        <Image sx={styles.Banner} src={mainBanner} alt="Main Banner" layout="responsive" />
        <section style={styles.section}>
          <div>
            <Image src={kidsShoeCollection} alt="Kids Shoe Collection" width={300} height={300} style={styles.image} />
            <Typography variant="h6" component="h2" align="left" style={styles.shoeTitle}>
              Kids Shoes Collection
            </Typography>
            <Typography variant="body2" align="left" style={styles.description}>
              {kidsShoeCollectionDescription}
            </Typography>
              <Button variant="contained" href="shop/kids" style={styles.button}>
                Shop Kids
              </Button>
          </div>
          <div>
            <Image src={womenShoeCollection} alt="Women Shoe Collection" width={300} height={300} style={styles.image} />
            <Typography variant="h6" component="h2" align="left" style={styles.shoeTitle}>
              Women Shoes Collection
            </Typography>
            <Typography variant="body2" align="left" style={styles.description}>
              {womenShoeCollectionDescription}
            </Typography>
              <Button variant="contained" href="/shop/women" style={styles.button}>
                Shop Women
              </Button>
          </div>
          <div>
            <Image src={menCollection} alt="Men Collection" width={300} height={300} style={styles.image} />
            <Typography variant="h6" component="h2" align="left" style={styles.shoeTitle}>
              Men Shoes Collection
            </Typography>
            <Typography variant="body2" align="left" style={styles.description}>
              {menShoeCollectionDescription}
            </Typography>
              <Button variant="contained" href="/shop/men" style={styles.button}>
                Shop Men
              </Button>
          </div>
        </section>
        <section style={styles.section}>
          <div style={styles.featuredProductsContainer}>
            <Typography variant="h5" component="h2" align="center" sx={styles.title}>
              Featured Products
            </Typography>
            <div style={styles.featuredProducts}>
              <div style={styles.productItem}>
                <a href="#">
                  <Image src={zoomPegasusShoes} alt="Zoom Pegasus Shoes" style={styles.productImage} />
                </a>
                <Typography variant="subtitle1" align="center" sx={styles.productName}>
                  Zoom Pegasus Shoes
                </Typography>
                <Typography variant="subtitle2" align="center" sx={styles.productPrice}>
                  $99.99
                </Typography>
              </div>
              <div style={styles.productItem}>
                <a href="#">
                  <Image src={taylorAllStarShoes} alt="Taylor All Star Shoes" style={styles.productImage} />
                </a>
                <Typography variant="subtitle1" align="center" sx={styles.productName}>
                  Taylor All Star Shoes
                </Typography>
                <Typography variant="subtitle2" align="center" sx={styles.productPrice}>
                  $79.99
                </Typography>
              </div>
              <div style={styles.productItem}>
                <a href="#">
                  <Image src={racerAdaptShoes} alt="Racer Adapt Shoes" style={styles.productImage} />
                  <Typography variant="subtitle1" align="center" sx={styles.productName}>
                    Racer Adapt Shoes
                  </Typography>
                </a>
                <Typography variant="subtitle2" align="center" sx={styles.productPrice}>
                  $129.99
                </Typography>
              </div>
              <div style={styles.productItem}>
                <a href="#">
                  <Image src={chuckTaylorShoes} alt="Chuck Taylor Shoes" style={styles.productImage} />
                </a>
                <Typography variant="subtitle1" align="center" sx={styles.productName}>
                  Chuck Taylor Shoes
                </Typography>
                <Typography variant="subtitle2" align="center" sx={styles.productPrice}>
                  $89.99
                </Typography>
              </div>
            </div>
          </div>
        </section>
        <AppFooter/>
      </main>
    </ThemeProvider>
  )
}

const styles = {
  banner: {
  },
  section: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '2rem',
    paddingBottom: '2rem',
  },
  image: {
    marginRight: '2rem',
  },
  shoeTitle: {
    marginBottom: '1rem',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  title: {
    marginBottom: '1rem',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    marginBottom: '0.5rem',
    maxWidth: '300px',
  },
  button: {
    marginBottom: '1rem',
    backgroundColor: '#2E3440',
    color: "white",
  },
  featuredProductsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  featuredProducts: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: '2rem',
    marginBottom: '2rem',
    width: '100%',
  },
  productItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 1rem',
  },
  productImage: {
    width: '250px',
    height: '250px',
    marginBottom: '0.5rem',
  },
  productName: {
    marginBottom: '0.25rem',
    fontWeight: 'bold',
  },
  productPrice: {
  },
};


const kidsShoeCollectionDescription = "Constructed from luxury nylons, leathers, and custom hardware, featuring sport details such as hidden breathing vents, waterproof + antimicrobial linings, and more."
const womenShoeCollectionDescription = "Constructed from luxury nylons, leathers, and custom hardware, featuring sport details such as hidden breathing vents, waterproof + antimicrobial linings, and more."
const menShoeCollectionDescription = "Constructed from luxury nylons, leathers, and custom hardware, featuring sport details such as hidden breathing vents, waterproof + antimicrobial linings, and more."