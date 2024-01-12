var productDescriptions = {
    'product1': 'Swing into style with our Customized Spiderman Oversized T-shirt, a homage to the iconic superhero. Tailored for comfort and individuality, this tee combines a roomy, oversized fit with your favorite web-slingers imagery. The vibrant colors and intricate detailing bring Spiderman to life, creating a statement piece that stands out. Crafted from high-quality, breathable fabric, it guarantees a cozy fit for everyday wear or showcasing your fandom at events. The custom design reflects your unique style, making it a must-have for Spiderman enthusiasts. Unleash your inner superhero with this personalized, oversized tee that merges fashion with fanhood seamlessly.',


    'product2': 'Indulge in whimsical fashion with our Customized Teddy Bear Oversized GenZ Collection T-shirt, a playful blend of comfort and style. Imprinted with an adorable teddy bear design, this tee from our GenZ Collection exudes youthful charm. The oversized fit embraces contemporary trends, ensuring a relaxed and on-point look for the fashion-forward. Crafted from premium fabric, it guarantees a soft touch against your skin while making a bold statement. This custom piece not only reflects your individuality but also encapsulates the spirit of the GenZ aesthetic, making it a must-have for those who appreciate fashion that is  both cozy and uniquely expressive.',


    'product3': 'Revamp your wardrobe with our Polo and Round Neck Super Saver Combo, featuring a pack of three versatile T-shirts. This curated collection combines style, comfort, and unbeatable value. The classic Polo shirts exude timeless elegance, perfect for a smart-casual vibe. Simultaneously, the round neck tees offer a laid-back charm ideal for everyday wear. Crafted from premium cotton, this combo ensures a soft touch against your skin and enduring quality. Enjoy the convenience of a wardrobe refresh with these essentials, offering a perfect blend of fashion and savings. Elevate your style effortlessly with this must-have trio, a cornerstone for any wardrobe.'


};


var productImages = {
    'product1': ['/static/images/fs3.png', '/static/images/fs1.png', '/static/images/fs8.png', '/static/images/fs7.png'],
    'product2': ['/static/images/fs2.png', '/static/images/fs6.png', '/static/images/fs2.png'],
    'product3': ['/static/images/fs4.jpg', '/static/images/fs5.jpg', '/static/images/fs4.jpg']

};


var productheading =
{
    'product1': ' Spiderman Oversized Tshirt  ',
    'product2': ' Teddy x Unique Oversized Tshirt  ',
    'product3': ' Super Saver Combos  '

}



var productfeature1 =
{
    'product1': 'Custom Spiderman Design',
    'product2': 'Custom Teddy Bear Design',
    'product3': 'Versatile Combo'
}

var productfeature2 =
{
    'product1': 'Oversized Fit',
    'product2': 'Oversized Fit',
    'product3': 'Timeless Elegance'
}

var productfeature3 =
{
    'product1': 'Vibrant Colors',
    'product2': 'Youthful GenZ Aesthetic',
    'product3': 'Premium Cotton Fabric'
}

var productfeature4 =
{
    'product1': 'High-Quality Fabric',
    'product2': 'Premium Fabric',
    'product3': 'Wardrobe Refresh',
}

var productfeature5 =
{
    'product1': ' Unique Fandom Expression',
    'product2': ' Unique Personal Expression',
    'product3': 'Fashion and Savings',
}

var productprice =
{
    'product1': 'Rs - 899',
    'product2': 'Rs - 799',
    'product3': 'Rs - 999',

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
    alert('Product added to the shopping cart !! ', name);
}

