
export const sendOrder = (order) => {
    const { toSend, address, comments } = order.options
    const { products, paymentMethod } = order;

    const productsList = products.map(product => {
        return `- ${product.name} - ${(product.selector) ? 'Relleno: ' + product.selector : ''} Tamaño: ${product.size} - Cantidad: ${product.quantity} Precio: ${product.price} \n`
      }).join("");
    
      const message = encodeURIComponent(
        `[PEDIDO-WEB] - Deseo hacer un pedido, ${(!toSend) ? 'para recoger:' : 'a domicilio:'} \n
        ${productsList}
        Para la dirección: ${address} \n
        Comentarios adicionales: ${comments} \n
        Método de pago: ${paymentMethod}`
      );


    const url = `https://api.whatsapp.com/send?phone=666666666&text=${message}`;
    window.open(url);
}