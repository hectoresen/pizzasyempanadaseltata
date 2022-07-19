import React from 'react';
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
        }
    ]
    return (
        <div className='pizzamenu'>
            {pizzaList.map(element =>{
                return <div className='pizzamenu__pizza' key={element.Name}>
                        <Card sx={{ maxWidth: 205 }}>
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
                                <Typography variant="body2" color="text.secondary">
                                    {element.Ingredients}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Compartir</Button>
                            </CardActions>
                            </Card>
                        </div>
            })}
        </div>
    )
}

export default Pizza