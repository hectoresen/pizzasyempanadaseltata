import React from "react"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { Grid } from "@nextui-org/react"
import Prices from "../Menu/Prices/Prices"
import "./FoodCard.scss"
const FoodCard = ({ food }) => {

    return (
        <div className="foodCard">
            <Grid.Container gap={0} justify="center" >
                {food
                    ? food.map((element) => {
                        return (
                            <Grid fluid style={{ margin: '2%' }} >
                                <Card
                                    sx={{ minWidth: 280, maxWidth: 280, minHeight: 450, maxHeight: 450 }}
                                >
                                    <CardMedia
                                        component="img"
                                        height="150"
                                        image={element.img}
                                        alt="el tata food"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {element.name}
                                        </Typography>
                                        <Typography
                                            variant="body3"
                                            color="text.secondary"
                                            fontStyle="italic"
                                        >
                                            <div className="food__ingredients">
                                                {element.ingredients}
                                            </div>
                                        </Typography>
                                        <Prices
                                            productPrices={element.prices}
                                            productName={element.name}
                                        />
                                    </CardContent>
                                </Card>
                            </Grid>
                        );
                    })
                    :
                    ""}

            </Grid.Container>
        </div>
    );
};

export default FoodCard;
