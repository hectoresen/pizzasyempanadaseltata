export const DeleteProduct = (product) => {

    if(product) {
        let itemsList = []
        itemsList = JSON.parse(localStorage.getItem('productsList'))

        const newCartList = itemsList.find((element, index) =>{
            if(element.name === product.name && product.size && product.quantity && product.price) {
                return itemsList.splice(index, 1)
            }
            return false
        })

        if(newCartList) {
            localStorage.clear()
            localStorage.setItem('productsList', JSON.stringify(itemsList))
        }
    }
}