import { Box, Grid, Card, CardActionArea, CardMedia, CardContent, Typography, } from "@mui/material";
import zoomPegasusShoes from '../../../../../public/zoomPegasusShoes.png';
import Image from 'next/image';

export default function Products({ products }) {
  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item key={product.name} xs={8} sm={6} md={4}>
          <Card sx={{ height: "100%" }}>
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
