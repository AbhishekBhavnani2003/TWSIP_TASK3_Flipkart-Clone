
document.addEventListener('DOMContentLoaded', function () {
    var cartContainer = document.getElementById('cart-container');

    //  getting slected product 
    var selectedProducts = JSON.parse(localStorage.getItem('selectedProducts')) || [];

    // validation 
    if (selectedProducts.length > 0) {
        // Create a list to display the selected products
        var productList = document.createElement('ul');

        // Iterate over selected products and create list items
        selectedProducts.forEach(function (productId) {
            var listItem = document.createElement('li');
            listItem.textContent = 'Product name : ' + productId;
            productList.appendChild(listItem);
        });

        // addition of product
        cartContainer.appendChild(productList);
    } else {
        // no products
        var noItemsMessage = document.createElement('p');
        noItemsMessage.textContent = 'Your shopping cart is empty.';
        cartContainer.appendChild(noItemsMessage);

    }
});

function clearCart() {
    var cartContainer = document.getElementById('cart-container');
    while (cartContainer.firstChild) {
        cartContainer.removeChild(cartContainer.firstChild);
        // Clear local storage
        localStorage.removeItem('selectedProducts');
    }
}




function clearCartAndRedirect() {
    var selectedProducts = JSON.parse(localStorage.getItem('selectedProducts')) || [];

    //  names of all items in a hidden field
    var hiddenFieldName = document.getElementById('hiddenFieldName');
    hiddenFieldName.value = selectedProducts.join(', '); // Join product names into a string

    // url 
    var redirectURL = 'shipping-details.html?productName=' + encodeURIComponent(hiddenFieldName.value);

    // Clear the selected products in local storage
    localStorage.removeItem('selectedProducts');

    // Redirection
    window.location.href = redirectURL;
}
