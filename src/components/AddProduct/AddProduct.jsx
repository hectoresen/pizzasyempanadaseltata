export const AddProductToCart = (product) => {

    let index = product.indexOf(":")
    const name = product.substring(0, index)
    console.log(name) //Nombre producto

    let sizeIndex = product.indexOf(",")
    const size = product.substring(index +1, sizeIndex);
    console.log(size) //Tamaño

    let indexPrice = product.indexOf("€")
    const price = product.substring(sizeIndex +1, indexPrice);
    console.log(price) //Precio

    if(name && size && price){
        let items = {
            name: name,
            size: size,
            price: Number(price)
        }
        console.log(typeof(items.price))

        let itemsList = []

        const getCarStorage = localStorage.getItem('productsList')
        if(getCarStorage){
            itemsList = JSON.parse(localStorage.getItem('productsList'))
            itemsList.push(items)
            localStorage.setItem('productsList', JSON.stringify(itemsList))
        }else{
            itemsList.push(items)
            localStorage.setItem('productsList', JSON.stringify(itemsList))
        }
    }
};