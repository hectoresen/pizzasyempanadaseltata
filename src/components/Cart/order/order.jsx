
export const sendOrder = (order) => {
    const { toSend, address, comments } = order.options
    const { products, paymentMethod } = order;

    const productsList = products.map(product => {
        return `- ${product.name} - ${(product.selector) ? 'Relleno: ' + product.selector : ''} Tamaño: ${product.size} - Cantidad: ${product.quantity} Precio: ${product.price} \n`
      }).join("");
    
    const payments = (paymentMethod === 'Método de pago') ? '' : `Método de pago:${paymentMethod}`
    const comment = (comments == undefined) ? '' : `Comentarios adicionales ${comments}`
    
      const message = encodeURIComponent(
        `[PEDIDO-WEB] - Deseo hacer un pedido, ${(!toSend) ? 'para recoger:' : 'a domicilio:'} \n
        ${productsList}
        Para la dirección: ${address} \n
        ${comment} \n
        ${payments}`
      );


    const url = `https://api.whatsapp.com/send?phone=605649228&text=${message}`;
    window.open(url);
}