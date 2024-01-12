var productDescriptions = {
    'product1': 'Mi 5G phones represent Xiaomis cutting-edge mobile technology, bringing high-speed connectivity and advanced features to users. These devices leverage fifth-generation (5G) wireless technology, ensuring lightning-fast internet speeds for seamless browsing, gaming, and streaming. Packed with powerful processors, vibrant displays, and impressive camera systems, Mi 5G phones offer a premium user experience. Xiaomi focuses on delivering value, balancing performance and affordability. ',


    'product2': 'IPhones 5G lineup represents Apples pinnacle of mobile technology, seamlessly integrating the power of fifth-generation wireless connectivity. These devices deliver unparalleled speed for internet activities, including browsing, gaming, and streaming. Equipped with cutting-edge processors, stunning displays, and top-tier camera systems, iPhone 5G models ensure a premium and intuitive user experience. Apples design excellence is evident in the sleek and sophisticated aesthetics of these devices, combining form and function seamlessly.',


    'product3': 'Samsungs 5G smartphones epitomize the brands leadership in mobile technology, harnessing the power of fifth-generation wireless connectivity for a transformative user experience. With blazing-fast internet speeds, these devices redefine mobile communication, making activities like browsing, gaming, and streaming incredibly smooth. Boasting powerful processors, stunning displays, and advanced camera setups, Samsungs 5G phones offer cutting-edge performance and imaging capabilities.'


};


var productImages = {
    'product1': ['/static/images/ph1.jpg', '/static/images/ph2.jpg', '/static/images/ph3.jpg ',
        '/static/images/ph4.jpg '],
    'product2': ['/static/images/ph5.jpg', '/static/images/ph6.jpg', '/static/images/ph7.jpg ',
        '/static/images/ph8.jpg '],
    'product3': ['/static/images/ph9.jpg', '/static/images/ph10.jpg', '/static/images/ph11.jpg ',
        '/static/images/ph12.jpg ']

};


var productheading =
{
    'product1': 'MI 10T 5G Series   ',
    'product2': ' IPHONE 13 Series  ',
    'product3': ' SAMSUNG S23 Series'
}



var productfeature1 =
{
    'product1': 'High Refresh Rate Display',
    'product2': 'A15 Bionic Chip',
    'product3': 'High-Performance Processor'
}

var productfeature2 =
{
    'product1': 'Powerful Processor',
    'product2': 'Super Retina XDR Display',
    'product3': 'Advanced Camera System'
}

var productfeature3 =
{
    'product1': 'Impressive Camera System',
    'product2': 'Advanced Camera System',
    'product3': 'High-Quality Display'
}

var productfeature4 =
{
    'product1': 'Large Battery Capacity',
    'product2': 'Cinematic Mode',
    'product3': '5G Connectivity',
}

var productfeature5 =
{
    'product1': '5G Connectivity',
    'product2': ' 5G Connectivity ',
    'product3': 'Design and Build:',
}

var productprice =
{
    'product1': 'Rs - 35,000',
    'product2': 'Rs - 50,000',
    'product3': 'Rs - 1,20,000',

}






function exploreProduct(productId) {
    // dynamic addition 

    document.getElementsByTagName('h1')[0].style.display = 'none';

    var productContainer = document.getElementById('product-container');
    var categoryContainer = document.querySelector('.category');

    // dynamic product page content

    var productPageContent = `
                <div class="product-page">
                    <h2>${productheading[productId]}</h2>
                    <div class="image-gallery">
                    ${productImages[productId].map(image => `<img src="${image}" alt="">`).join('')}
                </div>


                <h1>${productprice[productId]}</h1>

                <h3>Product Description : </h3>
                    <p>${productDescriptions[productId]}</p>
                    
                    <div class="features">
                    <h3>Product Features : </h3>
                    <h4>${productfeature1[productId]}</h4>
                    <h4>${productfeature2[productId]}</h4>
                    <h4>${productfeature3[productId]}</h4>
                    <h4>${productfeature4[productId]}</h4>
                    <h4>${productfeature5[productId]}</h4>
                    </div>

                    <div class="buttons">
                    <button onclick="window.location.href = 'shipping-details.html?productName=${productheading[productId]}'  ">

                    Shop Now
                    
                    </button>
                    <button onclick="shopProduct('${productheading[productId]}')">Add To Cart</button>
                    <button onclick="goBack()">Go Back</button>
                    </div>

                </div>
            `;


    productContainer.innerHTML = productPageContent;


    categoryContainer.style.display = 'none';

    productContainer.style.display = 'block';





}

function goBack() {
    // Reload the main page when the user goes back
    location.reload();
    categoryContainer.style.display = 'flex';
    productContainer.style.display = 'none';
    document.getElementsByTagName('h1')[0].style.display = ' ';
}

function shopProduct(name) {
    //  storing the selected product name in localStorage
    var selectedProducts = JSON.parse(localStorage.getItem('selectedProducts')) || [];
    selectedProducts.push(name);
    localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
    alert('Product added to the shopping cart:', name);
}

