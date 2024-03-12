const remove = {};

remove.cartListener = async () => {
    console.log('fire')
    let cartItems = document.querySelectorAll('.cart-item');
    console.log(cartItems.length)
        cartItems.forEach(item => {
            item.addEventListener('click', () => {
                console.log('clicked')
                item.remove();
            });
        });
}
export default remove;