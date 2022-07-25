import React from 'react';
import Prices from '../Prices/Prices';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Desserts.scss';


    const dessertsList = [
        {
            Name: 'Filloas rellenas',
            Img: 'https://media.discordapp.net/attachments/964479986855706624/1001130394504134826/294085913_421775336678062_6956343524878210492_n.jpg?width=1013&height=1013',
            Ingredients: 'Miel, nutella, dulce de leche..',
            Prices: [
                {Unidad: '1 €'}
            ]
        },
        {
            Name: 'Alfajores',
            Img: 'https://media.discordapp.net/attachments/964479986855706624/1001130394504134826/294085913_421775336678062_6956343524878210492_n.jpg?width=1013&height=1013',
            Ingredients: '',
            Prices: [
                {Unidad: '2 €'}
            ]
        },
        {
            Name: 'Torta de ricotta',
            Img: 'https://media.discordapp.net/attachments/964479986855706624/1001130394504134826/294085913_421775336678062_6956343524878210492_n.jpg?width=1013&height=1013',
            Ingredients: '',
            Prices: [
                {Porción: '1.50 €'}
            ]
        },
        {
            Name: 'Pasta frola',
            Img: 'https://media.discordapp.net/attachments/964479986855706624/1001130394504134826/294085913_421775336678062_6956343524878210492_n.jpg?width=1013&height=1013',
            Ingredients: '',
            Prices: [
                {Unidad: '2 €'}
            ]
        }
    ]

const Desserts = () => {
    return (
        <div className='dessertsmenu'>
         {dessertsList.map(element =>{
                return <div className='dessertsmenu__dessert' key={element.Name}>
                        <Card sx={{ minWidth: 220, minHeight: 300 }}>
                            <CardMedia
                                component="img"
                                height="150"
                                image={element.Img}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {element.Name}
                                </Typography>
                                <Typography variant="body3" color="text.secondary" fontStyle="italic">
                                    {element.Ingredients}
                                </Typography>
                                <div className='dessertsmenu__dessert__prices'>
                                    <Prices productPrices={element.Prices} />
                                </div>
                            </CardContent>
{/*                             <CardActions>
                                <Button size="small">Compartir</Button>
                            </CardActions> */}
                            </Card>
                        </div>
            })}
        </div>
    )
}

export default Desserts;