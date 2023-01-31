export const sendOrder = (order) => {
    const { toSend } = order.options
    console.log(order)
    
    const message = encodeURIComponent(`
        Deseo hacer un pedido, ${(!toSend) ? 'para recoger' : 'a domicilio'}`
    );


    const url = `https://api.whatsapp.com/send?phone=666666666&text=${message}`;
    window.open(url);
}