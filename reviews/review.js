class Review extends HTMLElement {
    constructor() {
      super();
    }

  connectedCallback() {
    var image_url = this.attributes.image_url.value
    var website = this.attributes.website.value
    var product_name = this.attributes.product_name.value
    var left_arrow = this.attributes.left_arrow.value
    var right_arrow = this.attributes.right_arrow.value
    this.innerHTML = `
    <html>
    <head>
      <title>Daphne the Wiener</title>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <link rel="stylesheet" href="../css/style.css">
      <link rel="stylesheet" href="../css/arrow.css">
          <style>
          /* First image (Logo. Full height) */
      .bgimg-r {
        background-image: url('../images/${image_url}');
        min-height: 100%;
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
      }
      </style>
          <div class="w3-top">
          <div class="w3-bar" id="myNavbar">
            <a class="w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large w3-right" href="javascript:void(0);" onclick="toggleFunction()" title="Toggle Navigation Menu">
              <i class="fa fa-bars"></i>
            </a>
            <a href="../index.html" class="w3-bar-item w3-button">HOME</a>
            <a href="../index.html#about" class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-user"></i> ABOUT</a>
            <a href="../index.html#products" class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-th"></i> PRODUCTS</a>
            <a href="../index.html#contact" class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-envelope"></i> CONTACT</a>
            <a href="#" class="w3-bar-item w3-button w3-hide-small w3-right w3-hover-red">
            </a>
          </div>

          <!-- Navbar on small screens -->
          <div id="navDemo" class="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium">
            <a href="../index.html#about" class="w3-bar-item w3-button" onclick="toggleFunction()">ABOUT</a>
            <a href="../index.html#products" class="w3-bar-item w3-button" onclick="toggleFunction()">PRODUCTS</a>
            <a href="../index.html#contact" class="w3-bar-item w3-button" onclick="toggleFunction()">CONTACT</a>
          </div>
        </div>
      </div>
      <!-- First Parallax Image with Logo Text -->
      <div class="bgimg-r w3-display-container w3-opacity-min">
        <div class="w3-display-left w3-padding-large w3-pale-red w3-xlarge w3-wide w3-animate-opacity" style="white-space:nowrap;">
          <button type="button" onclick="location.href='./${left_arrow}'"><<<</button>
          <span class="w3-center">${product_name}</span>
        </div>
      </div>
      <div class="w3-display-right w3-padding-large w3-pale-red" style="white-space:nowrap;">
        <div>
          <i class="fa fa-laptop fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i><a href="${website}">Website</a><br>
          <i class="fa fa-paw fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i>Promo: Daphne<br>
          We loved this product 10/10! Daphine especially enjoyed making omlettes.
        </div>
        <button type="button" onclick="location.href='./${right_arrow}'">>>></button>
        </div>
      </body>
    </html>
    `;
  }
}

  customElements.define('review-template', Review);
