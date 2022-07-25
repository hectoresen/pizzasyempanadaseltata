import React from 'react';
import Prices from '../Prices/Prices';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Patty.scss';

const Patty = () => {
    const pattyList = [
        {
            Name: 'Ternera',
            Img: 'https://cdn.discordapp.com/attachments/964479986855706624/1001133578282868807/209290430_169364441919154_6614498174943569325_n.jpg',
            Ingredients: 'Empanada de Ternera',
            Prices: [
                {'Empanada Kg': '9.90 €'},{'Unidad': '1.50 €'},
            ]
        },
        {
            Name: 'Pollo',
            Img: 'https://cdn.discordapp.com/attachments/964479986855706624/1001133578282868807/209290430_169364441919154_6614498174943569325_n.jpg',
            Ingredients: 'Empanada de Pollo',
            Prices: [
                {'Empanada Kg': '9.90 €'},{'Unidad': '1.50 €'},
            ]
        },
        {
            Name: 'Atún',
            Img: 'https://cdn.discordapp.com/attachments/964479986855706624/1001133578282868807/209290430_169364441919154_6614498174943569325_n.jpg',
            Ingredients: 'Empanada de Atún',
            Prices: [
                {'Empanada Kg': '9.90 €'},{'Unidad': '1.50 €'},
            ]
        },
        {
            Name: 'Jamón y queso',
            Img: 'https://cdn.discordapp.com/attachments/964479986855706624/1001133578282868807/209290430_169364441919154_6614498174943569325_n.jpg',
            Ingredients: 'Empanada de Jamón y queso',
            Prices: [
                {'Empanada Kg': '8.30 €'},{'Unidad': '1.50 €'},
            ]
        },
        {
            Name: 'Bacon',
            Img: 'https://cdn.discordapp.com/attachments/964479986855706624/1001133578282868807/209290430_169364441919154_6614498174943569325_n.jpg',
            Ingredients: 'Empanada de Bacon',
            Prices: [
                {'Empanada Kg': '8.30 €'},{'Unidad': '1.50 €'},
            ]
        },
        {
            Name: 'Pascualina',
            Img: 'https://cdn.discordapp.com/attachments/964479986855706624/1001133578282868807/209290430_169364441919154_6614498174943569325_n.jpg',
            Ingredients: 'Espinacas, acelgas, huevo, cebolla y pimiento',
            Prices: [
                {'Empanada Kg': '8.30 €'},{'Unidad': '1.50 €'},
            ]
        },
        {
            Name: 'Vegana',
            Img: 'https://cdn.discordapp.com/attachments/964479986855706624/1001133578282868807/209290430_169364441919154_6614498174943569325_n.jpg',
            Ingredients: 'Espinacas, cebolla, pimiento y queso vegano',
            Prices: [
                {'Empanada Kg': '9.90 €'},{'Unidad': '1.50 €'},
            ]
        },
    ]
    return (
        <div className='pattymenu'>
                        {pattyList.map(element =>{
                return <div className='pattymenu__patty' key={element.Name}>
                        <Card sx={{ maxWidth: 180, minHeight: 370 }}>
                            <CardMedia
                                component="img"
                                height="160"
                                image={element.Img}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    {element.Name}
                                </Typography>
                                <Typography variant="body4" color="text.secondary" fontStyle="italic" fontSize="">
                                    {element.Ingredients}
                                </Typography>
                                <div className='pattymenu__patty__prices'>
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

export default Patty;