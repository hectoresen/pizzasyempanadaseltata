import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Prices from '../Menu/Prices/Prices';
import './FoodCard.scss';
const FoodCard = ({food}) => {
    console.log(food)

    return (
        <div className='foodCard'>
            {
                (food)
                ?
                food.map(element =>{
                    return <div className='foodCard__content'>
                        <Card sx={{ maxWidth: 280, minHeight: 420, maxHeight: 420 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={element.img}
                                alt="el tata food"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {element.name}
                                </Typography>
                                <Typography variant="body3" color="text.secondary" fontStyle="italic">
                                    <div className='foodCard__content__ingredients'>
                                        {element.ingredients}
                                    </div>
                                </Typography>
                                <div className='foodCard__content__prices'>
                                    <Prices productPrices={element.prices} productName={element.name}/>
                                </div>
                            </CardContent>
                            {/*                             <CardActions>
                                                    <Button size="small">Compartir</Button>
                                                </CardActions> */}
                        </Card>
                    </div>
                })
                :
                ''
            }
        </div>
    )
}

export default FoodCard