const remove = {};

remove.cartListener = async (amiibo) => {
    // console.log('fire')
    // let cartItems = document.querySelectorAll('.cart-item');
    // console.log(cartItems.length)
    //     cartItems.forEach(item => {
    //             item.addEventListener('click', () => {
    //                     localStorage.removeItem(amiibo.character);
    //                     item.remove();
    //                     let badge = document.querySelector('#lblCartCount');
    //                     badge.textContent = localStorage.length;
            
    //                 });
    //             });
    
    if (localStorage.length > 0) {
        console.log(amiibo.character)
        let cartItem = document.querySelector(`#${amiibo.character}-cart`);
        console.log(cartItem)
        cartItem.addEventListener('click', (e) => {
            let target = e.target.parentElement;
            localStorage.removeItem(amiibo.character);
            target.remove();
            let badge = document.querySelector('#lblCartCount');
            badge.textContent = localStorage.length;
        });
    }
    
};
export default remove;