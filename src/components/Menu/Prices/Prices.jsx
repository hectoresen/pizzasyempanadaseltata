import React from 'react';
import { Dropdown } from "@nextui-org/react";
import { Button, Grid } from "@nextui-org/react";
import  {AddProductToCart} from '../../AddProduct/AddProduct';
import './Prices.scss';

const Prices = (props) => {
    const [selected, setSelected] = React.useState(new Set(["Tamaño"]));

    const selectedValue = React.useMemo(() => Array.from(selected).join(", ").replaceAll("_", " "),
        [selected]
    );

    return <div className='products__prices'>
        <Dropdown>
            <Dropdown.Button flat color="secondary" css={{tt: 'capitalize'}}>
                {selectedValue}
            </Dropdown.Button>
            <Dropdown.Menu
                    aria-label="Single selection actions"
                    color="secondary"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={selected}
                    onSelectionChange={setSelected}
                >
            {
                props.productPrices.map((product) =>{
                    return Object.keys(product).map(size =>{
                        /* let selectedSize = `${size}, ${product[size]} - ${props.productName}`; */
                        let selectedSize = `${props.productName} : ${size}, ${product[size]}`
                        return <Dropdown.Item
                                    key={selectedSize}
                                    >
                                    {selectedSize}
                                </Dropdown.Item>
                    })
                })
            }
            </Dropdown.Menu>
        </Dropdown>
        {/* Botón que pedir que enviaría los valores de lo elegido */}
        <Grid.Container gap={10}>
            <Grid>
                <Button
                    shadow
                    color="secondary"
                    auto
                    onPress={() => {AddProductToCart(selected.currentKey)}}
                    >
                    Añadir
                </Button>
            </Grid>
        </Grid.Container>

    </div>
/*         return props.productPrices.map((product, index) =>{
            return <div className='products__prices' key={index}>
                    <div className='products__prices-price'>
                        <p><span>{Object.keys(product)}:</span> {Object.values(product)}</p>
                    </div>
            </div>
        }) */
    }

export default Prices;