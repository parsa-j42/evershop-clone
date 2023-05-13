import { Box, Grid, Card, CardActionArea, CardMedia, CardContent, Typography, Container } from "@mui/material";
import zoomPegasusShoes from '../../../../../public/zoomPegasusShoes.png';
import Image from 'next/image';
import { theme } from "src/app/utils/theme.js";

export default function Products({ products }) {
  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item key={product.name} s={12} md={6} lg={4}>
          <Card sx={{
            height: "100%",
            // '@media (max-width: 600px)': {
            //   width: '90vw',
            // },
            [theme.breakpoints.down('sm')]: {
              width: "80vw",}
          }}>
            <CardActionArea>
              {/* <CardMedia
                component="img"
                height="200"
                image={zoomPegasusShoes}
                alt={product.name}
              /> */}
              <Image src={product.img} alt={product.name} />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {product.price}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}

    </Grid>
  );
}
