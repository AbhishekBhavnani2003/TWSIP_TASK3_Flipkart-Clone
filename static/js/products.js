var productDescriptions = {
    'product1': 'Step into timeless style with the Black and White Nike Shoes. These iconic kicks effortlessly blend classic design with modern comfort. The sleek black upper, adorned with the iconic Nike swoosh in crisp white, exudes a sense of sophistication and versatility. Crafted with precision, the shoes boast a lightweight yet durable construction, ensuring durability for your daily adventures. Whether you are hitting the gym, strolling the streets, or making a fashion statement, these shoes provide the perfect fusion of style and functionality. Elevate your footwear game with the Black and White Nike Shoes – a symbol of enduring elegance and athletic prowess.',


    'product2': 'Elevate your casual style with these Brown Casual Shoes, a perfect blend of comfort and sophistication. The rich brown hue complements various outfits, adding a touch of warmth and refinement to your look. Crafted with precision, the shoes feature a stylish yet understated design, making them versatile for both casual outings and semi-formal occasions. The durable construction ensures longevity, while the comfortable insole guarantees all-day ease. Whether you are navigating city streets or social gatherings, these brown casual shoes make a statement with their timeless appeal. Step out in confidence, embracing both comfort and fashion effortlessly with these classic brown kicks.',


    'product3': 'Step into dynamic performance with these Black & Red Sport Shoes. The bold color combination not only adds a striking aesthetic but also signifies energy and power. Engineered for athleticism, they feature advanced cushioning and support, ensuring comfort during high-impact activities. The black mesh upper offers breathability, while the vibrant red accents provide a sporty edge. Designed for durability, these shoes withstand the rigors of intense workouts. The non-slip sole guarantees stability, making them your ideal companion for runs, gym sessions, or any fitness pursuit. Embrace the fusion of style and functionality, conquering every stride with confidence and flair.'


};


var productImages = {
    'product1': ['/static/images/sh1.jpg', '/static/images/sh7.jpg', '/static/images/sh6.jpg'],
    'product2': ['/static/images/sh4.jpg', '/static/images/sh2.jpg', '/static/images/sh4.jpg'],
    'product3': ['/static/images/sh3.jpg', '/static/images/sh5.jpg', '/static/images/sh3.jpg']

};


var productheading =
{
    'product1': ' Nike Black-White Sport Shoes ',
    'product2': 'Nike Brown Casual Shoes  ',
    'product3': 'Nike Black-Red Sport Shoes  '

}



var productfeature1 =
{
    'product1': 'Sleek design',
    'product2': 'Stylish design',
    'product3': 'Dynamic Color Combination'
}

var productfeature2 =
{
    'product1': 'Supreme comfort',
    'product2': 'Rich color',
    'product3': 'Advanced Cushioning and Support'
}

var productfeature3 =
{
    'product1': 'Durable build',
    'product2': 'All-day comfort with a comfortable insole',
    'product3': 'Breathable Mesh Upper'
}

var productfeature4 =
{
    'product1': 'Lightweight feel',
    'product2': 'Durable construction',
    'product3': 'Durable Construction',
}

var productfeature5 =
{
    'product1': ' Versatile for any activity',
    'product2': ' Perfect for casual and semi-formal occasions',
    'product3': ' Non-Slip Sole',
}

var productprice =
{
    'product1': 'Rs - 1999',
    'product2': 'Rs - 1499',
    'product3': 'Rs - 1899',

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

