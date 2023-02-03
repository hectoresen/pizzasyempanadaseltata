export const sendOrder = (order) => {
    const { toSend } = order.options
    console.log(order)
    //Obtener contexto de método de pago si existe para acoplar a envios a domicilio
    //Borrar contextos y borrar localStorage al enviar el pedido
    
    const message = encodeURIComponent(`
        Deseo hacer un pedido, ${(!toSend) ? 'para recoger' : 'a domicilio'}`
    );


    const url = `https://api.whatsapp.com/send?phone=666666666&text=${message}`;
    window.open(url);
}