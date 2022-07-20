import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Pizza.scss';
import Prices from '../Prices/Prices';

const Pizza = () => {
    const pizzaList = [
        {
            Name: 'Maldonado',
            Img: 'https://scontent.fvgo1-1.fna.fbcdn.net/v/t39.30808-6/208312047_169364428585822_6699304822989092132_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a26aad&_nc_ohc=XD5MPX5uLCcAX9vuZhI&_nc_ht=scontent.fvgo1-1.fna&oh=00_AT8WJwoeUBK5vJE6nEscbjqlhTawyLP2ksbpT8adbsk_nQ&oe=62DAC3DE',
            Ingredients: 'Mozarella, jamón serrano y pollo desmenuzado',
            Prices: [
                {Porción: '2 €'},{Mediana: '8.60 €'},{Grande: '11.80 €'}
            ]
        },
        {
            Name: 'Rocha',
            Img: 'https://scontent.fvgo1-1.fna.fbcdn.net/v/t39.30808-6/208312047_169364428585822_6699304822989092132_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a26aad&_nc_ohc=XD5MPX5uLCcAX9vuZhI&_nc_ht=scontent.fvgo1-1.fna&oh=00_AT8WJwoeUBK5vJE6nEscbjqlhTawyLP2ksbpT8adbsk_nQ&oe=62DAC3DE',
            Ingredients: 'Mozarella, aceitunas y salchichón',
            Prices: [
                {Porción: '2 €'},{Mediana: '8.60 €'},{Grande: '11.80 €'}
            ]
        },
        {
            Name: 'Paysandú',
            Img: 'https://scontent.fvgo1-1.fna.fbcdn.net/v/t39.30808-6/208312047_169364428585822_6699304822989092132_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a26aad&_nc_ohc=XD5MPX5uLCcAX9vuZhI&_nc_ht=scontent.fvgo1-1.fna&oh=00_AT8WJwoeUBK5vJE6nEscbjqlhTawyLP2ksbpT8adbsk_nQ&oe=62DAC3DE',
            Ingredients: 'Mozarella, aceitunas piquillo y bacon',
            Prices: [
                {Porción: '2 €'},{Mediana: '9.50 €'},{Grande: '12.60 €'}
            ]
        },
        {
            Name: 'Florida',
            Img: 'https://scontent.fvgo1-1.fna.fbcdn.net/v/t39.30808-6/208312047_169364428585822_6699304822989092132_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a26aad&_nc_ohc=XD5MPX5uLCcAX9vuZhI&_nc_ht=scontent.fvgo1-1.fna&oh=00_AT8WJwoeUBK5vJE6nEscbjqlhTawyLP2ksbpT8adbsk_nQ&oe=62DAC3DE',
            Ingredients: 'Mozarella, queso de cabra, jamón serrano y tomate',
            Prices: [
                {Porción: '2 €'},{Mediana: '9.80 €'},{Grande: '12.60 €'}
            ]
        },
        {
            Name: 'Montevideo',
            Img: 'https://scontent.fvgo1-1.fna.fbcdn.net/v/t39.30808-6/208312047_169364428585822_6699304822989092132_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a26aad&_nc_ohc=XD5MPX5uLCcAX9vuZhI&_nc_ht=scontent.fvgo1-1.fna&oh=00_AT8WJwoeUBK5vJE6nEscbjqlhTawyLP2ksbpT8adbsk_nQ&oe=62DAC3DE',
            Ingredients: 'Quesos: Mozarella, emmental, oveja y cabra',
            Prices: [
                {Porción: '2 €'},{Mediana: '9.80 €'},{Grande: '12.60 €'}
            ]
        },
        {
            Name: 'Vegetal',
            Img: 'https://scontent.fvgo1-1.fna.fbcdn.net/v/t39.30808-6/208312047_169364428585822_6699304822989092132_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a26aad&_nc_ohc=XD5MPX5uLCcAX9vuZhI&_nc_ht=scontent.fvgo1-1.fna&oh=00_AT8WJwoeUBK5vJE6nEscbjqlhTawyLP2ksbpT8adbsk_nQ&oe=62DAC3DE',
            Ingredients: 'Mozarella, pimientos rojo y verde, champiñones y aceitunas',
            Prices: [
                {Porción: '2 €'},{Mediana: '8.50 €'},{Grande: '12.20 €'}
            ]
        },
        {
            Name: 'Vegana',
            Img: 'https://scontent.fvgo1-1.fna.fbcdn.net/v/t39.30808-6/208312047_169364428585822_6699304822989092132_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a26aad&_nc_ohc=XD5MPX5uLCcAX9vuZhI&_nc_ht=scontent.fvgo1-1.fna&oh=00_AT8WJwoeUBK5vJE6nEscbjqlhTawyLP2ksbpT8adbsk_nQ&oe=62DAC3DE',
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
                        <Card sx={{ maxWidth: 240 }}>
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
                                <Typography variant="body2" color="text.secondary" fontStyle="italic">
                                    {element.Ingredients}
                                </Typography>
                                <div className='pizzamenu__pizza__prices'>
                                    <Prices pizzaPrices={element.Prices} />
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