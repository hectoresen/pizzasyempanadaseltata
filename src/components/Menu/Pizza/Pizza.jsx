import React from 'react';
import Prices from '../Prices/Prices';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Pizza.scss';

const Pizza = () => {
    const pizzaList = [
        {
            Name: 'Maldonado',
            Img: 'https://media.discordapp.net/attachments/964479986855706624/1001130394504134826/294085913_421775336678062_6956343524878210492_n.jpg?width=1013&height=1013',
            Ingredients: 'Mozarella, jamón serrano y pollo desmenuzado',
            Prices: [
                {Porción: '2 €'},{Mediana: '8.60 €'},{Grande: '11.80 €'}
            ]
        },
        {
            Name: 'Rocha',
            Img: 'https://media.discordapp.net/attachments/964479986855706624/1001130394504134826/294085913_421775336678062_6956343524878210492_n.jpg?width=1013&height=1013',
            Ingredients: 'Mozarella, aceitunas y salchichón',
            Prices: [
                {Porción: '2 €'},{Mediana: '8.60 €'},{Grande: '11.80 €'}
            ]
        },
        {
            Name: 'Paysandú',
            Img: 'https://media.discordapp.net/attachments/964479986855706624/1001130394504134826/294085913_421775336678062_6956343524878210492_n.jpg?width=1013&height=1013',
            Ingredients: 'Mozarella, aceitunas piquillo y bacon',
            Prices: [
                {Porción: '2 €'},{Mediana: '9.50 €'},{Grande: '12.60 €'}
            ]
        },
        {
            Name: 'Florida',
            Img: 'https://media.discordapp.net/attachments/964479986855706624/1001130394504134826/294085913_421775336678062_6956343524878210492_n.jpg?width=1013&height=1013',
            Ingredients: 'Mozarella, queso de cabra, jamón serrano y tomate',
            Prices: [
                {Porción: '2 €'},{Mediana: '9.80 €'},{Grande: '12.60 €'}
            ]
        },
        {
            Name: 'Montevideo',
            Img: 'https://media.discordapp.net/attachments/964479986855706624/1001130394504134826/294085913_421775336678062_6956343524878210492_n.jpg?width=1013&height=1013',
            Ingredients: 'Quesos: Mozarella, emmental, oveja y cabra',
            Prices: [
                {Porción: '2 €'},{Mediana: '9.80 €'},{Grande: '12.60 €'}
            ]
        },
        {
            Name: 'Vegetal',
            Img: 'https://media.discordapp.net/attachments/964479986855706624/1001130394504134826/294085913_421775336678062_6956343524878210492_n.jpg?width=1013&height=1013',
            Ingredients: 'Mozarella, pimientos rojo y verde, champiñones y aceitunas',
            Prices: [
                {Porción: '2 €'},{Mediana: '8.50 €'},{Grande: '12.20 €'}
            ]
        },
        {
            Name: 'Vegana',
            Img: 'https://media.discordapp.net/attachments/964479986855706624/1001130394504134826/294085913_421775336678062_6956343524878210492_n.jpg?width=1013&height=1013',
            Ingredients: 'Mozarella vegana, champiñones, pimiento y cebolla',
            Prices: [
                {Porción: '2 €'},{Mediana: '9.50 €'},{Grande: '12.20 €'}
            ]
        },
    ];

    return (
        <div className='pizzamenu'>
            {pizzaList.map(element =>{
                return <div className='pizzamenu__pizza' key={element.Name}>
                        <Card sx={{ maxWidth: 240, minHeight: 420 }}>
                            <CardMedia
                                component="img"
                                height="140"
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
                                <div className='pizzamenu__pizza__prices'>
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

export default Pizza