export const AddProductToCart = ([product]) => {
    let duplicatedItems = false;

    if(product){
        let items = {
            name: product.name,
            size: product.size,
            selector: product.selector,
            img: product.img,
            ingredients: product.ingredients,
            price: product.price * product.quantity,
            quantity: product.quantity
        }

        let itemsList = []

        const checkDuplicateItems = () => {
            itemsList.map(product => {
                if ((product.name == items.name) && (product.size == items.size)) {
                    duplicatedItems = true;
                    product.quantity = product.quantity + items.quantity
                    product.price = product.price + items.price
                }
            })
        }

        const getCarStorage = localStorage.getItem('productsList')
        if(getCarStorage){
            itemsList = JSON.parse(localStorage.getItem('productsList'))
            checkDuplicateItems()
            if (duplicatedItems) {
                localStorage.clear()
                return localStorage.setItem('productsList', JSON.stringify(itemsList))
            }

            itemsList.push(items)
            localStorage.setItem('productsList', JSON.stringify(itemsList))
        }else{
            itemsList.push(items)
            localStorage.setItem('productsList', JSON.stringify(itemsList))
        }
    }
};