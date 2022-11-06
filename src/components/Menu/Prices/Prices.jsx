import React from 'react';
import { useState } from 'react';
import { Dropdown } from "@nextui-org/react";
import { Pagination } from '@nextui-org/react';
import { Button, Grid, Text } from "@nextui-org/react";
import { AddProductToCart } from '../../AddProduct/AddProduct';
import './Prices.scss';

const Prices = (props) => {
    const [selected, setSelected] = useState({})
    const [showSelected, setShowSelected] = useState('Tamaño')
    const [productQuantity, setProductQuantity] = useState(1)

    const handleDataProduct = (data) => {

            //Show product on selector
            const index1 = data.currentKey.indexOf(":")
            const index2 = data.currentKey.indexOf("€")
            const index3 = data.currentKey.indexOf(",")
            const index4 = data.currentKey.indexOf("-")
            setShowSelected(data.currentKey.substring(index1 + 1, index2 + 1))

            //Send data to cart
            setSelected(
                {
                    name: data.currentKey.substring(0, index1 - 1),
                    size: data.currentKey.substring(index1 + 1, index3),
                    price: Number(data.currentKey.substring(index3 + 1, index4 - 2)),
                }
            )
    }

    return <div className='products__prices'>
        <Dropdown>
            <Dropdown.Button flat color="secondary" css={{ tt: 'capitalize' }}>
                {showSelected}
            </Dropdown.Button>
            <Dropdown.Menu
                aria-label="Single selection actions"
                color="secondary"
                disallowEmptySelection
                selectionMode="single"
                /* selectedKeys={selected} */
                onSelectionChange={(data) => { handleDataProduct(data) }}
            >
                {
                    props.productPrices.map((product) => {
                        return Object.keys(product).map(size => {
                            let productSelected = `${props.productName} : ${size}, ${product[size]} -`
                            let showSizeProduct = `${size}, ${product[size]}`
                            return <Dropdown.Item
                                key={productSelected}
                            >
                                {showSizeProduct}
                            </Dropdown.Item>
                        })
                    })
                }
            </Dropdown.Menu>
        </Dropdown>
        <Grid.Container gap={2} justify="center">
            <div className='food__quantity'>
                <Text>Selecciona cantidad</Text>
                <Pagination color="secondary" size='xs' total={4} onChange={(quantity) => setProductQuantity(quantity)} />
            </div>
            <Grid>
                <Button
                    shadow
                    color="secondary"
                    auto
                    onPress={() => { AddProductToCart([{...selected, quantity: productQuantity}])}}
                >
                    Añadir
                </Button>
            </Grid>
        </Grid.Container>
    </div>
}

export default Prices;