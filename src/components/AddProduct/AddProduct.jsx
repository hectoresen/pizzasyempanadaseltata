export const AddProductToCart = ([product]) => {

    if(product){
        let items = {
            name: product.name,
            size: product.size,
            price: product.price * product.quantity,
            quantity: product.quantity
        }
        console.log(items)

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