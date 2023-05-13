import { Box, Grid, Card, CardActionArea, CardMedia, CardContent, Typography, Container } from "@mui/material";
import zoomPegasusShoes from 'public/zoomPegasusShoes.png';
import Image from 'next/image';
import { theme } from "src/app/utils/theme.js";

export default function Products({ products }) {
  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item key={product.name} s={12} md={6} lg={4}>
          <Card sx={{
            height: "100%",
            [theme.breakpoints.down('md')]: {
              width: "80vw",
            }
          }}>
            <CardActionArea>
              <CardMedia sx={{
                [theme.breakpoints.down('md')]: {
                  width: "80vw",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }
              }}>
                <Image src={product.img} alt={product.name} />
              </CardMedia>
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
