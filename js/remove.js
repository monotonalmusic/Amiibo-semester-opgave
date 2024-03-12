const remove = {};

remove.cartListener = async (amiibo) => {
    console.log('fire')
    let cartItems = document.querySelectorAll('.cart-item');
    console.log(cartItems.length)
        cartItems.forEach(item => {
            item.addEventListener('click', () => {
                localStorage.removeItem(amiibo.character);
                item.remove();
                
            });
        });
}
export default remove;